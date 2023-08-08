<script lang="ts">
	import NoteLink from "./NoteLink.svelte";
	import { topics } from "./topic-list";
</script>

<div class="main">
	<slot />
</div>
<div class="sidebar">
	{#each topics as note}
		<NoteLink {note} />
	{/each}
</div>

<style>
	.main {
		padding-left: 1.2em;
		padding-right: 0.8em;
		padding-top: 2.4em;
		background-color: white;
	}
	.sidebar {
		display: none;
		background-color: #f5f5f5;
	}
	@media screen and (min-width: 1200px) {
		.main {
			padding-top: 2.4em;
			border-radius: 10px;
			width: calc(100% - 400px - 2em);
			margin: auto;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			word-wrap: break-word;
		}

		.sidebar {
			padding-top: 2.4em;
			display: block;
			position: fixed;
			top: 0;
			left: 0;
			bottom: 0;
			width: 398px;
			border-right-style: dotted;
			border-right-width: 2px;
			border-right-color: #a5a5a5;
			overflow-y: auto;
		}
	}
	@media screen and (max-width: 1199px) {
		.sidebar {
			padding-top: 1.2em;
			padding-bottom: 1.2em;
			display: block;
			width: 100%;
			border-top-style: solid;
			border-top-width: 2px;
			border-right-color: #a5a5a5;
			overflow-y: auto;
		}
	}
</style>
