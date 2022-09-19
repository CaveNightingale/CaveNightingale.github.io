<script lang="ts">
	import PlainTextView from '$lib/view/PlainTextView.svelte';
	import JsonView from '$lib/view/JsonView.svelte';
	import MainContext from '$lib/component/MainContext.svelte';
	import Nav from '$lib/component/Nav.svelte';
	import Section from '$lib/component/Section.svelte';
	import MultiFileView from '$lib/view/MultiFileView.svelte';
</script>
<Nav title="UI测试" background />
<MainContext>
	<Section>
		<PlainTextView data={"hi\n  hey"}/>
		aaaaaaaaaaaaaaaaaaaaaaa
		<MultiFileView data={[{ name: "hi", view: PlainTextView, data: "hello" }, { name: "qq", view: JsonView, data: "{\n\t\"key111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\": 3.1415926,\"hello\": \"world\",\n\t\"tt\":[\"xxx\"]}" }]}/>
	</Section>
</MainContext>