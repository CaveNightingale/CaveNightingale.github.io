import katex from "katex";

interface TokenBase {
	kind: string;
	value: string;
}

interface TokenKeyword extends TokenBase {
	kind: "keyword";
	value: string;
}

interface TokenExpression extends TokenBase {
	kind: "expression";
	value: string; /* Katex expression, without $ */
}

interface TokenSymbol extends TokenBase {
	kind: "symbol";
	value: "indent" | "dedent" | "newline";
}

interface TokenComment extends TokenBase {
	kind: "comment";
	value: string;
}

type Token = TokenKeyword | TokenExpression | TokenSymbol | TokenComment;

function tokenize(input: string, replace: boolean = true): Token[] {

	if (replace) {
		input = input.replaceAll("[", "{").replaceAll("]", "}").replaceAll("'", "\\")
	}

	let result = [];
	let ptr = -1;
	let line = 1;
	function eof(): boolean {
		return ptr >= input.length - 1;
	}
	function next(): string {
		if (input[ptr] === "\n") {
			line++;
		}
		ptr++;
		return input[ptr];
	}
	function prev(): string {
		ptr--;
		if (input[ptr] === "\n") {
			line--;
		}
		return input[ptr];
	}
	function skip(): void {
		while (!eof()) {
			let s = next();
			if (s !== " " && s !== "\t") {
				prev();
				break;
			}
		}
	}
	function nextToken(): Token {
		let s = next();
		if (s === "\n") {
			return { kind: "symbol", value: "newline" };
		} else if (s === "{") {
			return { kind: "symbol", value: "indent" };
		} else if (s === "}") {
			return { kind: "symbol", value: "dedent" };
		} else if (s === "$") {
			let expr = "";
			while (!eof()) {
				s = next();
				if (s === "$") {
					break;
				}
				expr += s;
			}
			return { kind: "expression", value: expr };
		} else if (s === "#") {
			let comment = "";
			while (!eof()) {
				s = next();
				if (s === "\n") {
					prev();
					break;
				}
				comment += s;
			}
			return { kind: "comment", value: comment };
		} else {
			let keyword = s;
			while (!eof()) {
				s = next();
				if (!/[a-z]/.test(s)) {
					prev();
					break;
				}
				keyword += s;
			}
			return { kind: "keyword", value: keyword };
		}
	}
	skip();
	while (!eof()) {
		result.push(nextToken());
		skip();
	}
	while (result.length > 0 && result[result.length - 1].kind === "symbol" && result[result.length - 1].value === "newline") {
		result.pop();
	}
	while (result.length > 0 && result[0].kind === "symbol" && result[0].value === "newline") {
		result.shift();
	}
	return result;
}

function render(tokens: Token[]): string {
	console.log(tokens)
	function escape(s: string): string {
		let span = document.createElement("span");
		span.textContent = s;
		return span.innerHTML;
	}
	let result = "";
	let line = 0;
	let indent = 0;
	let newline = true;
	let emptyline = false;
	for (let token of tokens) {
		if (token.kind === "symbol") {
			if (token.value === "newline") {
				if (newline && !emptyline) {
					emptyline = true;
					continue;
				}
				line++;
				result += "<br /> ";
				newline = true;
			} else if (token.value === "indent") {
				if (indent === 0) {
					line = 0;
				}
				result += ": "; // Python style
				indent++;
			} else {
				indent--;
			}
		} else if (token.kind === "expression") {
			if (indent !== 0 && newline) {
				result += `<div style="display: inline-block; width: ${indent * 2.5}em">${line}</div> `;
			}
			let func2id: Map<string, string> = new Map()
			let str = katex.renderToString(token.value, {
				displayMode: false,
				macros: {
					"\\fn": function (ctx: any) {
						let name = "";
						for (let item of ctx.consumeArgs(1)[0]) {
							name = item.text + name;
						}
						let id = func2id.get(name);
						if (id === undefined) {
							let newId = "FUNC" + crypto.randomUUID().replace(/-/g, "");
							func2id.set(name, newId);
							id = newId;
						}
						return `\\text{${id}}`;
					}
				}
			}) + " ";
			for (let [func, id] of func2id) {
				let dom = func.split('-')
					.map(part => `${(part.at(0) || '').toUpperCase()}<span style="font-size: 0.8em;">${part.slice(1).toUpperCase()}</span>`)
					.join('-');
				str = str.replaceAll(id, `<span>${dom}</span>`);
			}
			result += str;
		} else if (token.kind === "comment") {
			let full = newline;
			if (indent !== 0 && newline) {
				result += `<div style="display: inline-block; width: ${indent * 2.5}em">${line}</div> `;
			}
			if (full) {
				result += `<span style='color: #888888;'># ${escape(token.value)}</span> `;
			} else {
				result += `<span style='color: #888888; margin-left: 2em;'># ${escape(token.value)}</span> `;
			}
		} else {
			if (indent !== 0 && newline) {
				result += `<div style="display: inline-block; width: ${indent * 2.5}em">${line}</div> `;
			}
			result += `<b>${escape(token.value)}</b> `;
		}
		newline = newline && token.kind === "symbol";
		emptyline = token.kind === "symbol" && token.value === "newline";
	}
	return result;
}

function compile(input: string): string {
	return render(tokenize(input));
}

export { compile };