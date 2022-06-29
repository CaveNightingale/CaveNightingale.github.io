<script lang="ts">
	import MainContext from '$lib/MainContext.svelte';
	import MenuEntry from '$lib/MenuEntry.svelte';
	import Nav from '$lib/Nav.svelte'
	function e() {
		alert();
	}
</script>
<Nav title="目录" background />
<MainContext>
	<MenuEntry href="/freemutecode" content="免费禁言代码"/>
</MainContext>
