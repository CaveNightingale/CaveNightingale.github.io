<div id="outer" class={status}>
	<h2>{title0}</h2><br/>
	{content0}
</div>
<script lang="ts">
    import { notifyNext, providePopup } from "../common";

	let title0: string;
	let content0: string;
	let status: 'hide' | 'fadein' | 'fadeout' | 'show' = "hide";
	function show(title: string, content: string = "", timeMS: number = 2000, callback: () => void = () => undefined) {
		if(status != "hide") {
			console.error("Too many popup");
			return;
		}
		title0 = title;
		content0 = content;
		status = "fadein";
		setTimeout(() => {
			status = "show";
			setTimeout(() => {
				status = "fadeout";
				notifyNext();
				setTimeout(() => {
					status = "hide";
					callback();
				}, 400);
			}, timeMS);
		}, 400);
	}
	providePopup({
		run: (title, content, timeMS, callback)=> { show(title, content, timeMS, callback);},
		status: () => status
	});
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
			scale: 1.0;
		}
		to {
			opacity: 0;
			scale: 0.8;
		}
	}
	#outer.hide {
		position: fixed;
		display: none;
	}
	#outer {
		position: fixed;
		background-color: #ebdaffdf;
		width: 18em;
		height: 3em;
		right: 1em;
		top: 3.4em;
		padding: 1em;
		border-radius: 0.3em;
		border-width: 2px;
		border-style: solid;
		border-color: #9e87bbdf;
		-webkit-user-drag: none;
		z-index: 100;
		user-select: none;
	}
	#outer.fadein {
		animation: fadein 0.4s;
	}
	#outer.fadeout {
		animation: fadeout 0.4s;
		opacity: 0;
	}
	#outer:hover {
		background-color: #dbbeff;
	}
	h2 {
		margin: 0px;
	}
</style>