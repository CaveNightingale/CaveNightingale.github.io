<script lang="ts">
	import { pageInfo } from "$lib/common";
	import MainContext from "$lib/component/MainContext.svelte";
	import { onMount } from "svelte";
	export const title = "找不到页面";
	const redirect: any = {
		"/freemutecode/": "/freemutecode",
		"/freegiftcode/": "/freemutecode", // freegiftcode and freegiftcode.html are handled by static pages
		"/creditchart/": "/creditchart",
	};
	function main() {
		let target = redirect[location.pathname];
		if (target) {
			open(target, "_self");
		} else {
			let chartData = /^\/creditchart\/([0-9]+)$/.exec(location.pathname);
			if (chartData) {
				open("/creditchart?uid=" + chartData[1], "_self");
			}
		}
	}
	onMount(() => setTimeout(main, 0));
	pageInfo("找不到页面", "/");
</script>

<MainContext>
	<span
		style="font-size: 100px; color: white; position: relative; font-weight: 1000; user-select: none;"
	>
		找不到页面
	</span>
	<br />
	<span
		style="color: white; position: relative; font-weight: bolder; user-select: none;"
	>
		请仔细检查输入的网址
	</span>
	<br />
</MainContext>
