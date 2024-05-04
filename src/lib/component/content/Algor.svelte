<!--
	Algorithm component
	- This component is used to render algorithm code in a nice way
	- It uses the `algorithm` component to render the code
	- It uses the `katex` library to render the math expressions
	- It uses ' instead of \ for katex macros to avoid conflicts with markdown
-->
<script lang="ts" context="module">
	import { compile } from "./algotithm";
	const KATEX_COMMON = `	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
		integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ"
		crossorigin="anonymous"
	/>
	<link rel="stylesheet" href="/assets/common.css" />`;

	if (typeof HTMLElement !== "undefined") {
		class HTMLAlgorithmInnerElement extends HTMLElement {
			private root: ShadowRoot;
			private code: string;

			constructor() {
				super();
				this.root = this.attachShadow({ mode: "closed" });
				this.code = "";
			}

			recompile() {
				const code = this.textContent || "";
				if (code === this.code) {
					return;
				}
				console.log(code);
				const compiled = compile(code);
				this.code = code;
				this.root.innerHTML = compiled + KATEX_COMMON;
			}

			connectedCallback() {
				this.recompile();
				let observer = new MutationObserver(() => this.recompile());
				observer.observe(this, { childList: true, subtree: true });
			}
		}

		customElements.define("algorithm-inner", HTMLAlgorithmInnerElement);
	}
</script>

<div class="algorithm-container">
	<algorithm-inner>
		<slot></slot>
	</algorithm-inner>
</div>
