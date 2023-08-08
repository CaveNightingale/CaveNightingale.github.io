<script>
	import Nav from "$lib/component/Nav.svelte";
	import { title, back, background, scable } from "$lib/common";
</script>

<svelte:head>
	<title>夜莺洞穴 - {$title}</title>
	{#if !$scable}
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
		/>
	{/if}
</svelte:head>
<Nav title={$title} back={$back} background={$background} />
<slot />
