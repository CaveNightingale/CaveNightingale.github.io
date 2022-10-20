<script lang="ts">
    import { openPage } from '$lib/common';
	import Footer from '$lib/component/Footer.svelte';
	import MainContext from '$lib/component/MainContext.svelte';
	import MenuEntry from '$lib/component/MenuEntry.svelte';
    import PageCreditChart from './PageCreditChart.svelte';
    import PageFreeMuteCode from './PageFreeMuteCode.svelte';
	export const scalable = false;
	export const background = true;
	export const title = "目录";
	export const back = null;
</script>
<MainContext>
	<MenuEntry href={() => openPage("/freemutecode", PageFreeMuteCode)} content="免费禁言代码" />
	<MenuEntry href={() => openPage("/creditchart", PageCreditChart)} content="MCBBS积分分析" />
	<Footer>
		本网站是洞穴夜莺的整活网站，背景图片来自<a href="https://klpbbs.com" target="_blank" style="color: white;">klpbbs.com</a>，freemutecode页面中css（assets/freemutecode/style.css）来自freegiftcode，其余内容以CC-0协议开源于<a href="https://github.com/CaveNightingale/CaveNightingale.github.io" target="_blank" style="color: white;">github</a>。
	</Footer>
</MainContext>
