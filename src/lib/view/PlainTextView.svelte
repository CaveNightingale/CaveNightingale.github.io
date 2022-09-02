<script lang="ts">
	import AbstractTextView from "./class/AbstractTextView.svelte";
	import PlainTextElement from "./element/PlainTextElement.svelte";

	export let data: string;
	$: content = prepare(data);
	function prepare(data: string) {
		return data.split('\n').map(text => ([{ text, type: PlainTextElement }]));
	}
</script>
<AbstractTextView {content}/>