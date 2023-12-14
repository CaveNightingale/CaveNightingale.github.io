<script lang="ts">
    import { page } from "$app/stores";
	import NoteLink from "./NoteLink.svelte";
    import { getTitle, noteInfo, topics } from "./note";
	// Setup note info
	let path = $page.url.pathname;
	let split = path.lastIndexOf('/');
	noteInfo(getTitle(path), path.substring(0, split), path.substring(split + 1));
</script>

<svelte:head>
	<!-- Katex Default -->
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
		integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ"
		crossorigin="anonymous"
	/>
	<link rel="stylesheet" href="/assets/common.css" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/PrismJS/prism-themes/themes/prism-ghcolors.css" />
</svelte:head>
<div class="md-main">
	<slot />
</div>
<div class="sidebar">
	{#each topics as note}
		<NoteLink {note} />
	{/each}
</div>

<style>
	.md-main {
		padding-left: 2.4em;
		padding-right: 2.4em;
		padding-top: 2.4em;
		margin-bottom: 10em;
		background-color: white;
	}
	.sidebar {
		display: none;
		background-color: #f5f5f5;
	}
	@media screen and (min-width: 1200px) {
		.md-main {
			padding-top: 2.4em;
			border-radius: 10px;
			width: calc(100% - 400px - 4.6em);
			margin: auto;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			word-wrap: break-word;
		}

		.sidebar {
			padding-top: 2.7em;
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
