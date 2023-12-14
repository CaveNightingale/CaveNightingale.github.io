<script lang="ts">
	import { onMount } from "svelte";
	import { Point, Graph, normalizePoints, randomizedSolve } from "./graph";
	import { InputReader } from "./input";

	let graph = new Graph(10, [
		[0, 1],
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 0],

		[0, 5],
		[1, 6],
		[2, 7],
		[3, 8],
		[4, 9],

		[5, 7],
		[6, 8],
		[7, 9],
		[9, 6],
		[8, 5],
	]);

	let errorMessage = "";
	let message = "";
	let status = "none";
	let input = 
	`	10 15

		1 2
		2 3
		3 4
		4 5
		5 1
		1 6
		2 7
		3 8
		4 9
		5 10
		6 8
		7 9
		8 10
		10 7
		9 6
	`.replace(/\t/g, "");
	let inputMessage = "";
	function load() {
		status = "pending";
		message = "Pending";
		const canvas = document.getElementById("canvas");
		if (!(canvas instanceof HTMLCanvasElement)) {
			errorMessage = "Canvas not found";
			return;
		}
		const ctx = canvas.getContext("2d");
		if (!ctx) {
			errorMessage = "Canvas not supported";
			return;
		}
		const drawSegment = (p1: Point, p2: Point) => {
			console.log("drawSegment", p1, p2);
			ctx.beginPath();
			ctx.moveTo(p1[0], p1[1]);
			ctx.lineTo(p2[0], p2[1]);
			ctx.stroke();
		};
		const drawVertex = (p: Point) => {
			console.log("drawVertex", p);
			ctx.beginPath();
			ctx.arc(p[0], p[1], 10, 0, 2 * Math.PI);
			ctx.fill();
		};
		let showCount = 0;
		const show = async (locations: number[]) => {
			ctx.clearRect(0, 0, 1200, 1200);
			let points = [];
			console.log("locations", locations);
			for (let i = 0; i < graph.size; i++) {
				points.push(
					Point.from([locations[i * 2], locations[i * 2 + 1]]),
				); // 1200 is the canvas size
			}
			points = normalizePoints(points).map((p) => p.mul(1000).add([100, 100]));
			console.log("points", points);
			for (let [u, v] of graph.edges) {
				drawSegment(points[u], points[v]);
			}
			for (let p of points) {
				drawVertex(p);
			}
			showCount++;
			if (showCount % 64 === 0) {
				message += ".";
			}
			await new Promise((resolve) => setTimeout(resolve, 4));
		};
		randomizedSolve(
			graph.size * 2,
			(x) => graph.loss(x),
			(x) => graph.gradientLoss(x),
			15,
			16000,
			show
		).then(x => {
			show(x);
			message = "Done, loss = " + graph.loss(x).toFixed(2) + "";
			status = "done";
		});
	}

	function submit() {
		inputMessage = "Submitted";
		let inputGraph = InputReader.parseInput(input, reader => {
			const n = reader.readInt(1, 50);
			const m = reader.readInt(0, n * (n - 1) / 2);
			const edges: [number, number][] = [];
			for (let i = 0; i < m; i++) {
				edges.push([reader.readInt(1, n) - 1, reader.readInt(1, n) - 1]);
			}
			return new Graph(n, edges);
		});
		if (inputGraph instanceof Error) {
			message = "";
			errorMessage = "Error: " + inputGraph.message;
			return;
		}
		message = "";
		errorMessage = "";
		graph = inputGraph;
		load();
	}

	

	onMount(load);
</script>

<div id="container">
	<canvas id="canvas" width="1200" height="1200"></canvas>
	<div id="error-message">{errorMessage}</div>
	<div id="message">{message}</div>
	<textarea id="input" bind:value={input}></textarea>
	<button on:click={submit} class={status != "done" ? "disabled" : ""}>提交</button><span id="input-message">{inputMessage}</span>
</div>

<style>
	#container {
		width: 1200px;
		height: 1200px;
		margin: auto;
	}

	@media (max-width: 1200px) {
		#container {
			width: 100%;
			height: 100%;
		}
	}

	#canvas {
		width: 100%;
		height: 100%;
		border: 1px red solid;
	}

	#error-message {
		color: red;
		text-align: center;
		font-size: 2em;
	}

	#input-message {
		color: green;
		margin-left: 1em;
		font-size: 1em;
	}

	#message {
		color: green;
		text-align: center;
		font-size: 2em;
	}

	#input {
		resize: vertical;
		width: 100%;
		height: 10em;
		margin-bottom: 1em;
	}

	button {
		border-width: 1px;
		border-radius: 0.3em;
		border-color: #8f8f8f;
		border-style: solid;
		height: 2em;
		width: 5em;
		font-weight: 500;
		font-size: 20px;
		color: #000000;
		padding: 0em;
		margin: 0px;
		background-color: #00000000;
	}

	button.disabled {
		color: #8f8f8f;
	}
</style>
