<script lang="ts">
	// Proof of a proposition or correctness/runtime of a program
	// The most common proof, of a proposition, does not have extra information
	export let variant: "proposition" | "correctness" | "time" =
		"proposition";
</script>

<div>
	<i>
		Proof
		{#if variant === "correctness"}
			of Correctness
		{:else if variant === "time"}
			of Time Complexity
		{/if}
	</i>
	<span class="child">
		<slot />
	</span>
	<span class="qed">⯀</span>
</div>

<style>
	i {
		padding-right: 1em;
	}

	div {
		position: relative;
	}

	span.child > :global(:first-child) {
		display: inline;
	}

	.qed {
		font-size: 1.5em;
		position: absolute;
		right: 0;
		bottom: 0;
	}
</style>
