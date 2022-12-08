import { TextFunction, TextFunctionEnvironment, TextFunctionInvokeInsn, TextFunctionReference } from "./runtime";

class StringReader {
	private str: string;
	private offset: number = 0;
	private row: number = 1;
	private col: number = 1;
	public constructor(str: string) {
		this.str = str;
	}

	public eof(): boolean {
		return this.offset >= this.str.length;
	}

	public checkRest(): void {
		if (this.eof()) {
			throw new TextCompileError("End of file");
		}
	}

	public peak(): string {
		return this.str[this.offset];
	}

	public move(): void {
		this.checkRest();
		if (this.peak() == '\n') {
			this.row++;
			this.col = 1;
		} else {
			this.col++;
		}
		this.offset++;
	}

	public pos(): [number, number] {
		return [this.row, this.col];
	}

	public expect(char: string) {
		if (this.peak() == char) {
			this.move();
		} else {
			throw new TextCompileError("Expect " + char);
		}
	}
}

class TextCompileError extends Error {
	public constructor(msg: string) {
		super(msg);
	}
}

enum TextType {
	FILE,
	ARGUMENT,
	CALLBACK,
	BLOCK,
}

class TextCompiler<T> {
	private escape: (src: string) => T;
	public constructor(escape: (src: string) => T) {
		this.escape = escape;
	}

	private parseInvoke(reader: StringReader): TextFunctionInvokeInsn<T> {
		let name = "";
		while (/[a-zA-Z_\$]/.test(reader.peak())) {
			name += reader.peak();
			reader.move();
		}
		if (name == "") {
			throw new TextCompileError("Function must have name");
		}
		let args: TextFunction<T>[] = [];
		if (reader.peak() == '(') {
			reader.move();
			args.push(this.parseText(reader, TextType.ARGUMENT));
			while (reader.peak() == ',') {
				reader.move();
				args.push(this.parseText(reader, TextType.ARGUMENT));
			}
			reader.expect(')');
		}
		let callback: TextFunction<T> | undefined = undefined;
		switch (reader.peak()) {
			case '{':
				reader.move();
				callback = this.parseText(reader, TextType.CALLBACK);
				reader.expect('}');
				break;
			case '[':
				reader.move();
				reader.expect('\n');
				reader.expect('\t');
				callback = this.parseText(reader, TextType.BLOCK);
				reader.expect(']');
				break;
			case ';':
				reader.move();
				break;
			default:
				throw new TextCompileError("Require argument list");
		}
		return new TextFunctionInvokeInsn(new TextFunctionReference(undefined, name),
				args.map(func => new TextFunctionReference(func, undefined)), callback);
	}

	private parseText(reader: StringReader, type: TextType): TextFunction<T> {
		let funcs: TextFunctionInvokeInsn<T>[] = [];
		let plainText = "";
		const put = () => {
			plainText += reader.peak();
			reader.move();
		}
		while (!reader.eof()) {
			switch (reader.peak()) {
				case '\\':
					if (type != TextType.BLOCK) {
						reader.move();
						switch (reader.peak()) {
							case '\\':
							case '{':
							case '}':
							case '(':
							case ',':
							case ')':
							case '[':
							case ']':
							case ';':
								put();
								break;
							default:
								this.flush(plainText, funcs);
								plainText = "";
								funcs.push(this.parseInvoke(reader));
						}
					}
					break;
				case '\n':
					if (type != TextType.BLOCK) { // we don't ignore '\n' in a block
						break;
					} else {
						reader.move();
						switch (reader.peak()) {
							case '\t':
								reader.move();
								break;
							case ']':
								this.flush(plainText, funcs);
								return this.complete(funcs);
							default:
								throw new TextCompileError("Lines in a block must start with \t");
						}
					}
				case '#':
					if (type != TextType.BLOCK) { // we have no comments in a block
						while (!reader.eof() && reader.peak() != '\n') { // Ignore comments
							reader.move();
						}
						if (!reader.eof()) {
							reader.move();
						}
					} else {
						put();
					}
					break;
				case ')':
				case ',':
					if (type == TextType.ARGUMENT) {
						this.flush(plainText, funcs);
						return this.complete(funcs);
					} else {
						put();
					}
					break;
				case '}':
					if (type == TextType.CALLBACK) {
						this.flush(plainText, funcs);
						return this.complete(funcs);
					} else {
						put();
					}
					break;
				default:
					put();
			}
		}
		this.flush(plainText, funcs);
		return this.complete(funcs);
	}

	private flush(plainText: string, funcs: TextFunctionInvokeInsn<T>[]) {
		if (plainText != '') {
			const escape = this.escape;
			funcs.push(new TextFunctionInvokeInsn(new TextFunctionReference(
					new class TextConstantFunction extends TextFunction<T> {
						public exec(): T {
							return escape(plainText);
						}
					}, undefined)));
		}
	}

	private complete(funcs: TextFunctionInvokeInsn<T>[]) {
		return new class TextConcatFunction extends TextFunction<T> {
			public exec(env: TextFunctionEnvironment<T>): T {
				return env.funccat(funcs).exec(env);
			}
		};
	}


	public compile(str: string): TextFunction<T> | TextCompileError {
		try {
			return this.parseText(new StringReader(str), TextType.FILE);
		} catch (ex) {
			return <TextCompileError> ex;
		}
	}
}

export {
	TextCompileError,
	TextCompiler
};