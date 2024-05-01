<script lang="ts">
	export let variant: string = "proposition";
	export let name = "";
	export let number: number = -1;
</script>

<div>
	<strong>
		{variant.at(0)?.toUpperCase() + variant.slice(1)}
		{#if number > 0}
			{number}
		{/if}
		{#if name}
			({name})
		{/if}
	</strong>
	<span>
		<slot />
	</span>
</div>

<style>
	strong {
		padding-right: 1em;
	}

	span > :global(:first-child) {
		display: inline;
	}
</style>
