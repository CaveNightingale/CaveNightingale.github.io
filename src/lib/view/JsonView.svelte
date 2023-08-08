<script lang="ts">
	import AbstractTextView from "./class/AbstractTextView.svelte";
	import KeywordContantElement from "./element/KeywordContantElement.svelte";
	import NumbericConstantElement from "./element/NumbericConstantElement.svelte";
	import ObjectContantElement from "./element/ObjectContantElement.svelte";
	import PlainTextElement from "./element/PlainTextElement.svelte";
	import SymbolNameElement from "./element/SymbolNameElement.svelte";

	export let data: string;
	$: content = prepare(data) as any;
	interface TokenContext {
		source: string;
		index: number;
	}
	interface Token {
		data: string;
		type: "whitespace" | "symbol" | "number" | "string" | "reference";
	}
	function tokenize(ctx: TokenContext): Token | null {
		// mark the end of tokenize
		if (ctx.index >= ctx.source.length) return null;
		switch (ctx.source[ctx.index]) {
			case "{":
			case "}":
			case "[":
			case "]":
			case ",":
			case ":":
				ctx.index++;
				return { type: "symbol", data: ctx.source[ctx.index - 1] };
			case '"':
				const begin = ctx.index++;
				for (; ctx.index < ctx.source.length; ctx.index++) {
					if (ctx.source[ctx.index] == '"') {
						ctx.index++;
						break;
					}
					if (ctx.source[ctx.index] == "\\") ctx.index++;
				}
				return {
					type: "string",
					data: ctx.source.substring(begin, ctx.index),
				};
			case "-":
			case "0":
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
				const begin1 = ctx.index;
				for (
					;
					ctx.index < ctx.source.length &&
					ctx.source[ctx.index].match(/[0-9|\.|e|+|-]/);
					ctx.index++
				);
				return {
					type: "number",
					data: ctx.source.substring(begin1, ctx.index),
				};
			case "\t":
			case "\n":
			case "\r":
			case " ":
				const begin2 = ctx.index;
				for (
					;
					ctx.index < ctx.source.length &&
					ctx.source[ctx.index].match(/\s/);
					ctx.index++
				);
				return {
					type: "whitespace",
					data: ctx.source.substring(begin2, ctx.index),
				};
			default:
				const begin3 = ctx.index;
				for (
					;
					ctx.index < ctx.source.length &&
					ctx.source[ctx.index].match(/[a-z|A-Z]/);
					ctx.index++
				);
				return {
					type: "reference",
					data: ctx.source.substring(begin3, ctx.index),
				};
		}
	}
	function prepare(data: string) {
		let context = { source: data, index: 0 };
		const lines = [];
		let elements = [];
		let stack = [];
		let status:
			| "value"
			| "key"
			| "propseperator"
			| "keyvalueseperator"
			| "end" = "value";
		let tok;
		let isFirst = false;
		try {
			while ((tok = tokenize(context))) {
				console.log(JSON.stringify(tok));
				switch (tok.type) {
					case "whitespace":
						const innerLines = tok.data.split("\n");
						const first = innerLines.shift();
						if (first != "")
							elements.push({
								text: first,
								type: PlainTextElement,
							});
						for (let line of innerLines) {
							lines.push(elements);
							elements = [];
							if (line != "")
								elements.push({
									text: line,
									type: PlainTextElement,
								});
						}
						break;
					case "symbol":
						switch (tok.data) {
							case "{":
								if (status != "value")
									throw (
										"Unexpected { at line " +
										(lines.length + 1)
									);
								stack.push("{");
								status = "key";
								isFirst = true;
								break;
							case "}":
								if (
									(status != "propseperator" &&
										!(isFirst && status == "key")) ||
									stack.pop() != "{"
								)
									throw (
										"Unexpected } at line " +
										(lines.length + 1)
									);
								status = "propseperator";
								isFirst = false;
								break;
							case "[":
								if (status != "value")
									throw (
										"Unexpected [ at line " +
										(lines.length + 1)
									);
								status = "value";
								stack.push("[");
								isFirst = true;
								break;
							case "]":
								if (
									(status != "propseperator" &&
										!(isFirst && status == "value")) ||
									stack.pop() != "["
								)
									throw (
										"Unexpected ] at line " +
										(lines.length + 1)
									);
								status = "propseperator";
								isFirst = false;
								break;
							case ",":
								if (status != "propseperator")
									throw (
										"Unexpected , at line " +
										(lines.length + 1)
									);
								status =
									stack[stack.length - 1] == "{"
										? "key"
										: "value";
								break;
							case ":":
								if (status != "keyvalueseperator")
									throw (
										"Unexpected : at line " +
										(lines.length + 1)
									);
								status = "value";
								break;
						}
						elements.push({
							text: tok.data,
							type: PlainTextElement,
						});
						break;
					case "string":
						if (status != "key" && status != "value")
							throw (
								"Unexpected string constant at line " +
								(lines.length + 1)
							);
						switch (status) {
							case "key":
								elements.push({
									text: tok.data,
									type: SymbolNameElement,
								});
								status = "keyvalueseperator";
								break;
							case "value":
								elements.push({
									text: tok.data,
									type: ObjectContantElement,
								});
								status = "propseperator";
								break;
						}
						break;
					case "number":
						if (status != "value")
							throw (
								"Unexpected number constant at line " +
								(lines.length + 1)
							);
						JSON.parse(tok.data);
						elements.push({
							text: tok.data,
							type: NumbericConstantElement,
						});
						status = "propseperator";
						break;
					case "reference":
						if (status != "value")
							throw (
								"Unexpected referrence constant at line " +
								(lines.length + 1)
							);
						if (!["null", "true", "false"].includes(tok.data))
							throw (
								"Unexpected referrence constant at line " +
								(lines.length + 1)
							);
						elements.push({
							text: tok.data,
							type: KeywordContantElement,
						});
						status = "propseperator";
				}
			}
			if (elements.length) lines.push(elements);
		} catch (ex) {
			context.index -= (<Token>tok).data.length;
			const innerLines = context.source
				.substring(context.index)
				.split("\n");
			const first = innerLines.shift();
			if (first != null)
				elements.push({ text: first, type: PlainTextElement });
			for (let line of innerLines) {
				lines.push(elements);
				elements = [];
				if (line != null)
					elements.push({ text: line, type: PlainTextElement });
			}
			if (elements.length) lines.push(elements);
			console.warn(ex);
		}
		console.log(lines);
		return lines;
	}
</script>

<AbstractTextView {content} />
