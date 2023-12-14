class InvalidInput extends Error {
	constructor() {
		super("Invalid input");
	}
}

/**
 * Input Reader
 */
class InputReader {
	private content: string;
	private line: number;
	private column: number;
	private offset: number;
	public errorMessage: string;

	private constructor(content: string) {
		this.content = content;
		this.line = 1;
		this.column = 1;
		this.offset = 0;
		this.errorMessage = "";
	}

	public current(): string {
		return this.content[this.offset];
	}

	public move(): void {
		if (this.current() === "\n") {
			this.line++;
			this.column = 1;
		} else {
			this.column++;
		}
		this.offset++;
	}

	public skipWhitespace(): void {
		while (/\s/.test(this.current())) {
			this.move();
		}
	}

	/**
	 * Read an integer.
	 * @param min The minimum value (inclusive)
	 * @param max The maximum value (inclusive)
	 * @returns an integer
	 */
	public readInt(min: number, max: number): number {
		this.skipWhitespace();
		const beginLine = this.line, beginColumn = this.column;
		let ret = 0, sign = 1, intRead = false;
		if (this.current() === "-") {
			sign = -1;
			this.move();
		}
		while (/\d/.test(this.current())) {
			intRead = true;
			ret = ret * 10 + parseInt(this.current());
			if ((sign == 1 && ret > max) || (sign == -1 && -ret < min)) {
				this.errorMessage = `Line ${beginLine}, column ${beginColumn}: Integer violates range [${min}, ${max}]`;
				throw new InvalidInput();
			}
			this.move();
		}
		if (!intRead) { // Nothing read?
			this.errorMessage = `Line ${beginLine}, column ${beginColumn}: Integer expected`;
			throw new InvalidInput();
		}
		ret *= sign;
		if (ret < min || ret > max) {
			this.errorMessage = `Line ${beginLine}, column ${beginColumn}: Integer violates range [${min}, ${max}]`;
			throw new InvalidInput();
		}
		return ret;
	}

	/**
	 * Wrap a callback with input parsing. It will wrap invalid input with an Error object.
	 * @param input the input
	 * @param callback the read function
	 * @returns a value or an Error object
	 */
	public static parseInput<T>(input: string, callback: (reader: InputReader) => T): T | Error {
		const reader = new InputReader(input);
		try {
			let ret = callback(reader);
			reader.skipWhitespace();
			if (reader.offset < reader.content.length) {
				reader.errorMessage = `Line ${reader.line}, column ${reader.column}: EOF expected`;
				throw new InvalidInput();
			}
			return ret;
		} catch (e) {
			if (e instanceof InvalidInput) {
				return new Error(reader.errorMessage);
			} else {
				throw e;
			}
		}
	}
}

export { InputReader };