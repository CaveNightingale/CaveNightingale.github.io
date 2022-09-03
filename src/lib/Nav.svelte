<script lang="ts">
	export let title: string;
	export let background: boolean = false;
	export let parent: string = "/";
	export let scalable: boolean = false;
	function back() {
		open(parent, "_self");
	}
</script>

<svelte:head>
	<title>夜莺洞穴 - {title}</title>
	{#if !scalable}
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
	{/if}
</svelte:head>

<div id="topbar">
	<img on:click={back} id="back-button" alt="返回" title="返回" src="assets/icon/parent.svg" />
	<div id="topbar-title"><b>{title}</b></div>
</div>
<style>
	#topbar {
		position: absolute;
		top: 0px;
		left: 0px;
		border: 0px;
		width: 100%;
		height: 2.4em;
		background-color: rgb(247, 169, 195);
		display: flex;
		align-items: center;
		box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 5px 1px;
		-webkit-user-drag: none;
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

	:global(*) {
		/* disable the outline on mobile phones*/
		outline: none;
	}
</style>
{#if background}
	<div class="klpbg"></div>
	<style>
		.klpbg {
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
	</style>
{/if}