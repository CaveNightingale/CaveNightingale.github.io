<script lang="ts">
    import { setRoot } from '$lib/common';
	import Nav from '$lib/component/Nav.svelte';
    import { onMount } from 'svelte';
	export let component: any;
	let title: string;
	let background: boolean;
	let scalable: boolean;
	let back: () => void;
	export function changeContent(content: any) {
		component = content;
	}
	onMount(() => setRoot((component: any) => changeContent(component)));
</script>
<Nav {back} {title} {background} {scalable} />
<svelte:component this={component} bind:background={background} bind:title={title} bind:scalable={scalable} bind:back={back}/>