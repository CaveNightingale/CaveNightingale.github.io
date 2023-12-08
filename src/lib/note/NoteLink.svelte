<script lang="ts">
	import { url, type Note, type Category } from "./note";
	export let note: Note | Category;
	let expanded = false;
	let active = false;
	$: {
		let dfs = (note: Note | Category): boolean => {
			if (note.url === $url) {
				return true;
			}
			if (typeof note.sub !== "undefined") {
				for (let child of note.sub) {
					if (dfs(child)) {
						return true;
					}
				}
			}
			return false;
		};
		expanded = dfs(note);
		active = note.url === $url;
	}
</script>

<div class="root">
	<div class="self" class:active>
		<div
			class="expand"
			class:expanded
			class:expandable={note.sub}
			on:click={() => (expanded = !expanded)}
			on:keypress={() => (expanded = !expanded)}
		/>
		<a
			href={note.url || "javascript:;"}
			on:click={() => (expanded = !expanded)}>{note.title}</a
		>
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
	.active {
		font-weight: bold;
	}
	.active > a {
		color: #bb3989;
	}
</style>
