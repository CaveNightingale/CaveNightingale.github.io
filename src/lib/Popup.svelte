<div id="outer" class={fade} bind:this={outer}>
	<h2>{title}</h2>
</div>
<script lang="ts">
	import { onMount } from "svelte";

	export let title: string;
	export let top: number;
	let fade: string;
	let outer : HTMLDivElement;
	let interval: number | null;
	export function fadeout() {
		fade = "fadeout";
	}
	onMount(() => {
		outer.style.top = (3.4 + 6 * top) + "em";
	});
	export function move(top1: number) {
		if(interval != null)
			clearInterval(interval);
		interval = <any> setInterval(() => {
			top = Math.max(top - 0.05, top1);
			outer.style.top = (3.4 + 20 * top) + "em";
			if(top == top1) {
				clearInterval(interval!);
			}
		}, 10);
	}
</script>
<style>
	@keyframes fadein {
		from {
			right: -20em;
		}
		to {
			right: 1em;
		}
	}
	@keyframes fadeout {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
	#outer {
		position: fixed;
		background-color: #9495fddf;
		width: 18em;
		height: 3em;
		right: 1em;
		padding: 1em;
		border-radius: 0.2em;
		animation: fadein 0.4s;
		box-shadow: rgba(0, 0, 0, 0.4) 4px 4px 6px 2px;
		-webkit-user-drag: none;
	}
	#outer.fadeout {
		animation: fadeout 0.4s;
		opacity: 0;
	}
	h2 {
		margin: 0px;
	}
</style>