<script context="module">
	import Embedding from "@mlarocca/jsgraphs/src/graph/embedding/embedding.mjs";
	import { UndirectedGraph } from "@mlarocca/jsgraphs/src/graph/graph.mjs";
	import Graph from "@mlarocca/jsgraphs/src/graph/graph.mjs";
	import Point2D from "@mlarocca/jsgraphs/src/geometric/point2d.mjs";
	import { evaluate } from "./graph";
	import katex from "katex";

	const GRAPH_COMMON = `<style>
		circle {
			fill: white;
			stroke: black;
		}
		.text > circle { /* Text-only fake vertex */
			fill: #f9f9f9;
			stroke: none;
		}
		.light > circle {
			fill: lightgray;
		}
		.dark > circle {
			fill: gray;
		}
		path {
			fill: none;
			stroke: black;
		}
		</style>`;
	const KATEX_COMMON = `	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
		integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ"
		crossorigin="anonymous"
	/>
	<link rel="stylesheet" href="/assets/common.css" />`;

	if (typeof HTMLDivElement !== "undefined") {
		class HTMLGraphInnerElement extends HTMLDivElement {
			constructor() {
				super();
				this.root = this.attachShadow({ mode: "closed" });
			}

			connectedCallback() {
				this.recompile();
				new MutationObserver(() => this.recompile()).observe(this, {
					childList: true,
					subtree: true,
				});
				new ResizeObserver(() => this.recompile()).observe(this);
			}

			get directed() {
				return (
					this.hasAttribute("directed") &&
					this.getAttribute("directed") !== "false"
				);
			}

			get height() {
				return Number(this.getAttribute("height"));
			}

			get width() {
				return Math.min(this.getAttribute("width"), this.clientWidth);
			}

			recompile() {
				if (this.pending) {
					return;
				}
				this.pending = true;
				if (
					this.textContent === this.prevCode &&
					this.width === this.prevWidth &&
					this.height === this.prevWidth &&
					this.directed === this.prevDirected
				) {
					return;
				}
				this.prevCode = this.textContent || "";
				this.prevWidth = this.width;
				this.prevHeight = this.height;
				this.prevDirected = this.directed;
				let graph = this.directed ? new Graph() : new UndirectedGraph();
				let [vertices, edges] = evaluate(
					this.prevCode,
					this.prevWidth,
					this.prevHeight,
				);
				let numeric = 1;
				for (let v of vertices) {
					v.label = v.label || `${numeric++}`;
					v._inner = graph.createVertex(v.label);
				}
				for (let e of edges) {
					if (e.label) {
						e._inner = graph.createEdge(e.u._inner, e.v._inner, {
							label: e.label,
						});
					} else {
						e._inner = graph.createEdge(e.u._inner, e.v._inner);
					}
				}
				let emb = Embedding.forGraph(graph);
				for (let v of vertices) {
					emb.setVertexPosition(v._inner, new Point2D(v.x, v.y));
				}
				for (let e of edges) {
					emb.setEdgeControlPoint(e._inner, e.control ?? 0);
				}
				let verticesClasses = {};
				for (let v of vertices) {
					verticesClasses[v._inner] = v.class ? [v.class] : [];
				}
				this.root.innerHTML =
					emb.toSvg(this.prevWidth, this.prevHeight, {
						graphCss: [],
						verticesCss: verticesClasses,
						displayEdgesWeight: false,
						displayEdgesLabel: true,
						drawEdgesAsArcs: true,
					}) + GRAPH_COMMON + KATEX_COMMON;
				// Post-process
				// Double line
				let doubleCircle = this.root.querySelectorAll(".double circle");
				for (let c of [...doubleCircle]) {
					let newCircle = c.cloneNode();
					newCircle.setAttribute(
						"r",
						Number(c.getAttribute("r")) + 2,
					);
					c.parentNode.insertBefore(newCircle, c);
				}
				let text = this.root.querySelectorAll("text");
				for (let t of [...text]) {
					const size = (content) => {
						let div = document.createElement("div");
						div.style.display = "inline-block";
						div.innerHTML = content;
						this.root.appendChild(div);
						let size = div.getBoundingClientRect();
						let ret = { width: size.width, height: size.height };
						this.root.removeChild(div);
						return ret;
					};
					let dom = document.createElementNS(
						"http://www.w3.org/2000/svg",
						"foreignObject",
					);
					let content = katex.renderToString(t.textContent.replaceAll("'", "\\").replaceAll("$", ""));
					let { width, height } = size(content);
					dom.setAttribute("x", t.getAttribute("x") - width / 2);
					dom.setAttribute("y", t.getAttribute("y") - height / 2);
					dom.setAttribute("width", width);
					dom.setAttribute("height", height);
					dom.setAttribute(
						"text-anchor",
						t.getAttribute("text-anchor"),
					);
					dom.setAttribute(
						"dominant-baseline",
						t.getAttribute("dominant-baseline"),
					);
					dom.innerHTML = `${content}`;
					t.parentNode.replaceChild(dom, t);
				}
				this.pending = false;
			}
		}
		customElements.define("graph-inner", HTMLGraphInnerElement, {
			extends: "div",
		});
	}
</script>

<script>
	/**
	 * @type {boolean}
	 */
	export let directed = false;
	/**
	 * @type {number}
	 */
	export let height = 300;
	/**
	 * @type {number}
	 */
	export let width = 500;
</script>

<div class="graph-container">
	<!-- svelte-ignore avoid-is -->
	<div class="inner" is="graph-inner" {directed} {height} {width}>
		<slot></slot>
	</div>
</div>

<style>
	.inner {
		line-height: 1em;
	}
</style>
