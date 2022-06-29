<script lang="ts">
	export let title: string;
	export let background: boolean;
</script>

<svelte:head>
	<title>夜莺洞穴 - {title}</title>
</svelte:head>

<div id="topbar">
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
		background-color: rgb(255, 163, 192);
		display: flex;
		align-items: center;
		box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 5px 1px;
	}

	#topbar-title {
		font-size: large;
		position: absolute;
		left: 1em;
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