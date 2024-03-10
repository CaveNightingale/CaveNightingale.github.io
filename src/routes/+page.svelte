<script lang="ts">
	import { pageInfo } from "$lib/common";
	import MainContext from "$lib/component/MainContext.svelte";
	pageInfo("目录", null, false);
</script>

<svelte:head>
	<!-- Home page has removed since there is only single subpage left -->
	<meta http-equiv="Refresh" content="0;url=/note"/>
</svelte:head>

<MainContext>
</MainContext>
