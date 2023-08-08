<script lang="ts">
	import type { Note } from "./topic-list";
	export let note: Note;
	let expanded = false;
</script>

<div class="root">
	<div class="self">
		<div
			class="expand"
			class:expanded={expanded}
			class:expandable={note.sub}
			on:click={() => (expanded = !expanded)}
			on:keypress={() => (expanded = !expanded)}
		/>
		<a href={note.url}>{note.title}</a>
	</div>
	{#if note.sub && expanded}
		{#each note.sub as child}
			<svelte:self note={child} />
		{/each}
	{/if}
</div>

<style>
	.expand {
		width: 1em;
		height: 1em;
		display: inline-block;
	}
	a {
		color: black;
		padding-left: 1em;
	}
	.root {
		padding: 0.5em 0em 0.5em 1em;
	}
	.self {
		align-items: center;
		display: flex;
	}
	.expandable {
		background-image: url(/assets/icon/subtree.svg);
		background-repeat: no-repeat;
		background-size: contain;
	}
	.expanded {
		rotate: 90deg;
	}
</style>
