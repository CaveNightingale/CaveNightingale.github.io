<script lang="ts">
	import PlainTextView from '$lib/view/PlainTextView.svelte';
	import JsonView from '$lib/view/JsonView.svelte';
	import MainContext from '$lib/MainContext.svelte';
	import Nav from '$lib/Nav.svelte';
	import Section from '$lib/Section.svelte';
	import MultiFileView from '$lib/view/MultiFileView.svelte';
	import Popup from '$lib/Popup.svelte';
</script>
<Nav title="UI测试" background />
<MainContext>
	<Section>
		<PlainTextView data={"hi\n  hey"}/>
		aaaaaaaaaaaaaaaaaaaaaaa
		<MultiFileView data={[{ name: "hi", view: PlainTextView, data: "hello" }, { name: "qq", view: JsonView, data: "{\n\t\"key111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\": 3.1415926,\"hello\": \"world\",\n\t\"tt\":[\"xxx\"]}" }]}/>
		<Popup title="hello" top={1} />
	</Section>
</MainContext>