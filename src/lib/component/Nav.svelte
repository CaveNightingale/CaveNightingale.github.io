<script lang="ts">
    import Popup from "./Popup.svelte";

	export let title: string;
	export let background: boolean = false;
	export let back: string | (() => void) | null;
	function back0() {
		if (typeof back == 'string') {
			open(back, '_self');
		} else if (typeof back == 'function') {
			back();
		}
	}
</script>

<div id="topbar">
	<img on:click={back0} on:keypress={back0} id="back-button" class:empty={!back} alt="返回" title="返回" src="/assets/icon/parent.svg" hidden={!back} />
	<div id="topbar-title"><b>{title}</b></div>
	<Popup />
	<Popup />
</div>
<style>
	#topbar {
		position: fixed;
		top: 0px;
		left: 0px;
		border: 0px;
		width: 100%;
		height: 2.4em;
		background-color: #65a1ee;
		display: flex;
		align-items: center;
		-webkit-user-drag: none;
		z-index: 1000;
		border-bottom: 2px;
		border-style: solid;
		border-color: #a37a877f;
	}

	#topbar-title {
		font-size: large;
		/* position: absolute; */
		padding-left: 1em;
	}

	#back-button {
		height: 1.2em;
		padding-left: 1em;
		user-select: none;
	}

	#back-button.empty {
		opacity: 0;
	}

	:global(*) {
		/* disable the outline on mobile phones*/
		outline: none;
	}
	
	#klpbg {
		background: url(https://api.klpbbs.com/api/img/acg/) no-repeat;
		background-size: cover;
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0px;
		top: 0px;
		filter: brightness(0.75);
		z-index: -100;
	}

	#klpbg.hide {
		display: none;
	}
</style>
<div id="klpbg" class:hide={!background}></div>