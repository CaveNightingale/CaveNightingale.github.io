// We want to find a format that is easy to write and easy to parse
abstract class TextFunction<T> {
	public abstract exec(env: TextFunctionEnvironment<T>, args?: TextFunction<T>[], callback?: TextFunction<T> | undefined): T;
}

class Optional<T> {
	private data?: T;
	private msg?: string;
	public constructor(data?: T, msg?: string) {
		this.data = data;
		this.msg = msg;
	}

	public get(): T | undefined  {
		return this.data;
	}

	public getOrThrow() {
		if (typeof this.data != 'undefined') {
			return this.data;
		} else {
			throw new TextRuntimeError(this.msg!);
		}
	}
}

class TextFunctionReference<T> {
	private func?: TextFunction<T>;
	private name?: string;

	public solve(env: TextFunctionEnvironment<T>): Optional<TextFunction<T>> {
		return new Optional(this.func || env.get(this.name!), "function " + this.name + " not found");
	}

	public constructor(func: TextFunction<T> | undefined, name: string | undefined) {
		if (!(func || name)) {
			throw new TextRuntimeError("No func or name found");
		}
		this.func = func;
		this.name = name;
	}
}

class TextRuntimeError extends Error {
	public constructor(msg: string) {
		super(msg);
	}
}

class TextFunctionInvokeInsn<T> {
	private func: TextFunctionReference<T>;
	private args: TextFunctionReference<T>[];
	private callback: TextFunction<T> | undefined;

	public constructor(func: TextFunctionReference<T>, args: TextFunctionReference<T>[] = [],
				callback?: TextFunction<T>) {
		this.func = func;
		this.args = args;
		this.callback = callback;
	}

	public invoke(env: TextFunctionEnvironment<T>): T {
		return this.func.solve(env).getOrThrow().exec(TextFunctionEnvironment.child(env),
				this.args.map(arg => arg.solve(env).getOrThrow()), this.callback);
	}
}

class TextFunctionEnvironment<T> {
	private map: Map<string, TextFunction<T>> = new Map();
	private parent?: TextFunctionEnvironment<T>;
	private concat: (src: T[]) => T;
	public get(name: string): TextFunction<T> | undefined {
		return this.map.get(name) || this.parent?.get(name);
	}

	private constructor(parent: TextFunctionEnvironment<T> | ((src: T[]) => T)) {
		if (parent instanceof TextFunctionEnvironment) {
			this.parent = parent;
			this.concat = parent.concat;
		} else {
			this.concat = parent;
		}
	}

	public funccat(insn: TextFunctionInvokeInsn<T>[]) {
		const concat = this.concat;
		return new class TextConcatFunction extends TextFunction<T> {
			public exec(env: TextFunctionEnvironment<T>): T {
				return concat(insn.map(e => e.invoke(env)));
			}
		};
	}

	public funcconst(value: T) {
		return new class TextConcatFunction extends TextFunction<T> {
			public exec(): T {
				return value;
			}
		};
	}

	public put(name: string, func: TextFunction<T>) {
		this.map.set(name, func);
		return this;
	}

	public static create<T>(concat: (src: T[]) => T): TextFunctionEnvironment<T> {
		return new TextFunctionEnvironment<T>(concat);
	}

	public static child<T>(parent: TextFunctionEnvironment<T>): TextFunctionEnvironment<T> {
		return new TextFunctionEnvironment<T>(parent);
	}

	public child(): TextFunctionEnvironment<T> {
		return TextFunctionEnvironment.child(this);
	}
}
export {
	TextFunction,
	TextFunctionEnvironment,
	TextFunctionInvokeInsn,
	TextFunctionReference,
	TextRuntimeError,
	Optional
}