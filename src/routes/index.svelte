<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import MainContext from '$lib/MainContext.svelte';
	import MenuEntry from '$lib/MenuEntry.svelte';
	import Nav from '$lib/Nav.svelte';
</script>
<Nav title="目录" background />
<MainContext>
	<MenuEntry href="/freemutecode" content="免费禁言代码" />
	<MenuEntry href="/creditchart" content="MCBBS积分分析" />
	<Footer>
		本网站是洞穴夜莺的整活网站，背景图片来自<a href="https://klpbbs.com" target="_blank" style="color: white;">klpbbs.com</a>，freemutecode页面中css（assets/freemutecode/style.css）来自freegiftcode，其余内容以CC-0协议开源于<a href="https://github.com/CaveNightingale/CaveNightingale.github.io" target="_blank" style="color: white;">github</a>。
	</Footer>
</MainContext>
