<script lang="ts">
	import { pageInfo } from "$lib/common";
	import { onMount } from "svelte";
	import main from "./main";
	pageInfo("WebGL 样例", "/", false, true);

	let errorMessage = "";
	function load() {
		let canvas = document.getElementById("canvas");
		if (!(canvas instanceof HTMLCanvasElement)) {
			errorMessage = "Canvas not found";
			return;
		}
		let gl = canvas.getContext("webgl");
		if (!gl) {
			errorMessage = "WebGL not supported";
			return;
		}
		main(gl as WebGLRenderingContext & { canvas: HTMLCanvasElement }, {
			error: (msg) => {
				errorMessage = msg;
			},
		});
	}

	onMount(load);
</script>

<div id="container">
	<canvas id="canvas" width="800" height="600"></canvas>
	<div>{errorMessage}</div>
</div>

<style>
	#container {
		width: 800px;
		height: 600px;
		margin: auto;
		margin-top: 5em;
	}
	#canvas {
		width: 100%;
		height: 100%;
		border: 1px red solid;
	}
</style>
