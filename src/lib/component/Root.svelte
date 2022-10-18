<script lang="ts">
    import { setRoot } from '$lib/common';
	import Nav from '$lib/component/Nav.svelte';
    import PageCreditChart from '$lib/page/PageCreditChart.svelte';
    import PageFreeMuteCode from '$lib/page/PageFreeMuteCode.svelte';
    import PageIndex from '$lib/page/PageIndex.svelte';
    import PageNotFound from '$lib/page/PageNotFound.svelte';
    import { onMount } from 'svelte';
	export let component: any;
	let title: string;
	let background: boolean;
	let back: () => void;
	let reload: (() => void) | undefined;
	let URL_TABLE: any = {
		'/': PageIndex,
		'/creditchart': PageCreditChart,
		'/freemutecode': PageFreeMuteCode
	};
	export function changeContent(content: any) {
		component = content;
	}
	onMount(() => {
		setRoot((component: any) => changeContent(component));
	});
	function onPopState(event: PopStateEvent) {
		let target = URL_TABLE[location.pathname]
		if(target) {
			changeContent(target);
			if(reload) {
				reload();
			}
		} else {
			changeContent(PageNotFound);
		}
	}
</script>
<Nav {back} {title} {background} />
<svelte:component this={component} bind:background={background} bind:title={title} bind:back={back} bind:reload={reload}/>
<svelte:window on:popstate={onPopState} />