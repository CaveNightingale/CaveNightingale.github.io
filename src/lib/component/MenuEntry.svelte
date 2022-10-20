<div class="outer" on:click={handleClick}>
	<div class="inner">
		{content}
	</div>
</div>
<style>
	@keyframes hover {
		from {
			filter: brightness(1.0);
		}
		to {
			filter: brightness(0.9);
		}
	}
	.outer {
		width: 100%;
		height: 2.8em;
		background-color: white;
		border-radius: 0.2em;
		color: black;
		opacity: 0.9;
		align-items: center;
		display: flex;
		user-select: none;
		margin-top: 0.5em;
	}
	.outer:hover {
		filter: brightness(0.9);
		animation-name: hover;
		animation-duration: 0.4s;
	}
	.inner {
		padding: 1em;
	}
</style>
<script lang="ts">
	export let href: (() => void) | string;
	export let content: string;
	function handleClick() {
		if (typeof href === 'string') {
			open(href, '_self');
		} else {
			href();
		}
	}
</script>