import { escape } from "html-escaper";
import { TextCompileError, TextCompiler } from "./compile";
import { TextFunction, TextFunctionEnvironment, TextRuntimeError } from "./runtime";

function lmb<T>(func: (env: TextFunctionEnvironment<T>, args: TextFunction<T>[], callback?: TextFunction<T>) => T): TextFunction<T> {
	return new class TextLambdaFunction extends TextFunction<T> {
		public exec(env: TextFunctionEnvironment<T>, args: TextFunction<T>[], callback: TextFunction<T> | undefined): T {
			return func(env, args, callback);
		}
	}
}

class HTMLImpl {
	private static COLOR_MAP: any = {
		black: [ 'BLACK', '0', 0, 0 ],
		dark_blue: [ 'DARK_BLUE', '1', 1, 170 ],
		dark_green: [ 'DARK_GREEN', '2', 2, 43520 ],
		dark_aqua: [ 'DARK_AQUA', '3', 3, 43690 ],
		dark_red: [ 'DARK_RED', '4', 4, 11141120 ],
		dark_purple: [ 'DARK_PURPLE', '5', 5, 11141290 ],
		gold: [ 'GOLD', '6', 6, 16755200 ],
		gray: [ 'GRAY', '7', 7, 11184810 ],
		dark_gray: [ 'DARK_GRAY', '8', 8, 5592405 ],
		blue: [ 'BLUE', '9', 9, 5592575 ],
		green: [ 'GREEN', 'a', 10, 5635925 ],
		aqua: [ 'AQUA', 'b', 11, 5636095 ],
		red: [ 'RED', 'c', 12, 16733525 ],
		light_purple: [ 'LIGHT_PURPLE', 'd', 13, 16733695 ],
		yellow: [ 'YELLOW', 'e', 14, 16777045 ],
		white: [ 'WHITE', 'f', 15, 16777215 ]
	};
	
	public static compile(str: string): TextFunction<string> | TextCompileError {
		return new TextCompiler(escape).compile(str);
	}

	public static execute(func: TextFunction<string>, env: TextFunctionEnvironment<string> = TextFunctionEnvironment.create(n => n.join(""))): string {
		env.put('line', lmb(() => "<br />"));
		env.put('i', lmb(() => "<br />"));
		env.put('page', lmb(() => "<br /><br />"));
		env.put('p', lmb(() => "<br /><br />"));
		env.put('color', lmb((env, args, callback) => {
					let color = args[0].exec(env.child());
					if (!/#[0-9a-f]{6}/.test(color)) {
						let entry = this.COLOR_MAP[color];
						if (!entry) {
							throw new TextRuntimeError("Unknown color");
						} else {
							color = "#" + entry[3].toString(16);
						}
					}
					return `<span style="color: ${color};">${callback?.exec(env.child())}</span>`;
				}));
		env.put('format', lmb((env, args, callback) => {
					let format = args[0].exec(env.child());
					switch (format) {
						case 'italic':
							return `<span style="font-style: italic;">${callback?.exec(env.child())}</span>`;
						case 'underline':
							return `<span style="text-decoration: underline;">${callback?.exec(env.child())}</span>`;
						case 'strikethrough':
							return `<span style="text-decoration: line-through;">${callback?.exec(env.child())}</span>`;
						case 'bold':
							return `<span style="font-weight: bold;">${callback?.exec(env.child())}</span>`;
						case 'obfuscated':
							return `<span class="obfuscated">${callback?.exec(env.child())}</span>`;
						default:
							throw new TextRuntimeError("Unknown format");
					}
				}));
		env.put('h1', lmb((env, args, callback) => `<h1>${callback?.exec(env.child())}</h1>`));
		env.put('h2', lmb((env, args, callback) => `<h2>${callback?.exec(env.child())}</h2>`));
		env.put('h3', lmb((env, args, callback) => `<h3>${callback?.exec(env.child())}</h3>`));
		env.put('h4', lmb((env, args, callback) => `<h4>${callback?.exec(env.child())}</h4>`));
		env.put('h5', lmb((env, args, callback) => `<h5>${callback?.exec(env.child())}</h5>`));
		env.put('hr', lmb(() => '<hr />'));
		return func.exec(env.child());
	}
}
export {
	HTMLImpl
}