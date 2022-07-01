<script lang="ts">
	import MainContext from '$lib/MainContext.svelte';
	import Nav from '$lib/Nav.svelte';
</script>
<Nav title="找不到页面" background />
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