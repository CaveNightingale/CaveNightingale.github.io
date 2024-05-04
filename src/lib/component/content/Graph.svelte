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

	if (typeof HTMLElement !== "undefined") {
		class HTMLGraphInnerElement extends HTMLElement {
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

			get _directed() {
				return (
					this.hasAttribute("directed") &&
					this.getAttribute("directed") !== "false"
				);
			}

			get _height() {
				return +this.getAttribute("height");
			}

			get _width() {
				return Math.min(+this.getAttribute("width"), this.clientWidth);
			}

			recompile() {
				if (this.pending) {
					return;
				}
				this.pending = true;
				if (
					this.textContent === this.prevCode &&
					this._width === this.prevWidth &&
					this._height === this.prevWidth &&
					this._directed === this.prevDirected
				) {
					return;
				}
				this.prevCode = this.textContent || "";
				this.prevWidth = this._width;
				this.prevHeight = this._height;
				this.prevDirected = this._directed;
				let graph = this._directed
					? new Graph()
					: new UndirectedGraph();
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
					}) +
					GRAPH_COMMON +
					KATEX_COMMON;
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
				let textGroup = document.createElementNS(
					"http://www.w3.org/2000/svg",
					"g",
				);
				textGroup.setAttribute("class", "text");
				this.root.querySelector("svg").appendChild(textGroup);
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
					let content = katex.renderToString(
						t.textContent.replaceAll("'", "\\").replaceAll("$", ""),
					);
					let { width, height } = size(content);
					let x = +t.getAttribute("x") - width / 2;
					let y = +t.getAttribute("y") - height / 2;
					let p = t.parentNode;
					while (p.tagName !== "svg") {
						let transform = /translate\(([^,]+),([^,]+)\)/.exec(p.getAttribute("transform"));
						if (transform) {
							x += +transform[1];
							y += +transform[2];
						}
						p = p.parentNode;
					}
					let span = document.createElement("span");
					span.innerHTML = content;
					span.style.position = "absolute";
					span.style.left = `${x}px`;
					span.style.top = `${y}px`;
					span.style.width = `${width}px`;
					span.style.height = `${height}px`;
					span.style.display = "inline-block";
					span.style.whiteSpace = "nowrap";
					t.parentNode.removeChild(t);
					this.root.appendChild(span);
				}
				this.style.position = "relative";
				this.pending = false;
			}
		}
		customElements.define("graph-inner", HTMLGraphInnerElement);
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
	<graph-inner {directed} {height} {width}>
		<slot></slot>
	</graph-inner>
</div>
