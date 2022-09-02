<script lang="ts">
	export let content: { type: any, text: string }[][];
</script>
<div class="view">
	<div class="content">
		{#each content as line, i}
			<div class="lineno">{i + 1}</div>
			{#each line as element}
				<div class="line"><svelte:component this={element.type} text={element.text}/></div>
			{/each}
			<br/>
		{/each}
	</div>
</div>
<style>
	.view {
		font-family: monospace;
		border-color: #d0d0d0;
		border-style: solid;
		border-radius: 0.2em;
		border-width: 1px;
		user-select: none;
		outline: none;
	}
	.lineno {
		width: 3em;
		text-align: end;
		background-color: #e0e0e0;
		display: inline-block;
		color: #707070;
		padding-top: 0.1em;
		padding-bottom: 0.1em;
	}
	.content {
		display: inline-block;
		white-space: pre;
		outline: none;
		overflow-x: auto;
		display: block;
		line-height: 1em;
	}
	.line {
		padding-top: 0.1em;
		user-select: text;
		display: inline;
	}
</style>