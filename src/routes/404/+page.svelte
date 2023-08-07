<svelte:head>
	<title>夜莺洞穴 - 找不到页面</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
</svelte:head>
<script lang="ts">
	import MainContext from '../../lib/component/MainContext.svelte';
	import { onMount } from 'svelte';
    import Nav from '../../lib/component/Nav.svelte';
	export const title = "找不到页面";
	const redirect: any = {
		'/freemutecode/': '/freemutecode',
		'/freegiftcode/': '/freemutecode', // freegiftcode and freegiftcode.html are handled by static pages
		'/creditchart/': '/creditchart',
	};
	function main() {
		let target = redirect[location.pathname];
		if (target) {
			open(target, '_self');
		} else {
			let chartData = /^\/creditchart\/([0-9]+)$/.exec(location.pathname);
			if(chartData) {
				open('/creditchart?uid=' + chartData[1], '_self');
			}
		}
	}
	onMount(() => setTimeout(main, 0));
</script>
<Nav title="找不到页面" back="/" background={true}/>
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