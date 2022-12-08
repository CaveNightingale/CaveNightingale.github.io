<script lang="ts">
	import MainContext from '$lib/component/MainContext.svelte';
	import Nav from '$lib/component/Nav.svelte';
	import Section from '$lib/component/Section.svelte';
	import { HTMLImpl } from '$lib/text/library';
    import { escape } from 'html-escaper';

	let data = "";
	try {
	let optionalResult = HTMLImpl.compile("Hello\\color(red){\\format(obfuscated){world!}}");
		data = optionalResult instanceof Error ? escape(optionalResult.toString()) : HTMLImpl.execute(optionalResult);
	} catch (ex) {
	}
</script>
<Nav title="UI测试" background />
<MainContext>
	<Section>
		{@html data}
	</Section>
</MainContext>