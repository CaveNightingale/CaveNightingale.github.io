<script lang="ts">
    import { openPage } from '$lib/common';
	import MainContext from '$lib/component/MainContext.svelte';
	import { onMount } from 'svelte';
    import PageCreditChart from './PageCreditChart.svelte';
    import PageFreeMuteCode from './PageFreeMuteCode.svelte';
    import PageIndex from './PageIndex.svelte';
	export const scalable = false;
	export const background = true;
	export const title = "找不到页面";
	export const back = () => openPage("/", PageIndex);
	const redirect: any = {
		'/freemutecode/': ['/freemutecode', PageFreeMuteCode],
		'/freegiftcode/': ['/freemutecode', PageFreeMuteCode], // freegiftcode and freegiftcode.html are handled by static pages
		'/creditchart/': ['/creditchart', PageCreditChart],
	};
	function main() {
		let target = redirect[location.pathname];
		if (target) {
			openPage(target[0], target[1]);
		} else {
			let chartData = /^\/creditchart\/([0-9]+)$/.exec(location.pathname);
			if(chartData) {
				openPage('/creditchart?uid=' + chartData[1], PageCreditChart);
			}
		}
	}
	onMount(() => setTimeout(main, 0));
</script>
<MainContext>
	<span style="font-size: 100px; color: white; position: relative; font-weight: 1000; user-select: none;">
		找不到页面
	</span>
	<br/>
	<span style="color: white; position: relative; font-weight: bolder; user-select: none;">
		请仔细检查输入的网址
	</span>
	<br/>
</MainContext>