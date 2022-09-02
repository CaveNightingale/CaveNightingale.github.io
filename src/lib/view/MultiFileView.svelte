<script lang="ts">
	export let data: { name: string, view: any, data: any}[];
	export let selected: number = 0;
</script>
<div class="top-bar">
	{#each data as entry, i}
		<div class="tab {selected == i ? 'tab-selected' : ''}" title={entry.name} on:click={() => { selected = i; }}>{entry.name}</div>
	{/each}
</div>
{#if data[selected]}
	<svelte:component this={data[selected].view} data={data[selected].data}/>
{/if}
<style>
	.tab {
		font-family: monospace;
		border-color: #d0d0d0;
		border-style: solid;
		border-radius: 0.2em;
		border-width: 1px;
		border-style: solid;
		display: inline-block;
		padding-top: 0.3em;
		padding-bottom: 0.3em;
		padding-left: 1em;
		padding-right: 1em;
		user-select: none;
		margin-right: 0.5em;
	}

	.tab-selected {
		border-bottom-width: 0.3em;
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px;
		border-color: #005cbe;
	}

	.tab:hover {
		background-color: #0000000f;
	}

	.top-bar {
		border-width: 1px;
		border-color: #d0d0d0;
		border-top-style: solid;
	}
</style>