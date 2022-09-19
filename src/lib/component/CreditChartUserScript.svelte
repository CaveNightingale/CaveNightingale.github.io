<script lang="ts">
	import Section from "./Section.svelte";
	import { applyPatch } from "diff";
	import MenuEntry from "./MenuEntry.svelte";
	import PlainTextView from "../view/PlainTextView.svelte";
	import { showPopup } from "../common";
	
	const BASE_URL = 'https://greasyfork.org/scripts/407846-mcbbs-creditanalysis/code/MCBBS%20CreditAnalysis.user.js';
	const PATCH_URL = '/assets/creditchart/userscript.patch';
	let state: 'none' | 'confirm' | 'pending' | 'data' | 'error' = 'none';
	let text = '';

	function install() {
		state = 'pending';
		return Promise.all([
			fetch(BASE_URL).then(res => res.text()),
			fetch(PATCH_URL).then(res => res.text())
		]).then(([base, patch]) => {
			text = applyPatch(base, patch);
			state = 'data';
		}).catch(error => {
			state = 'error';
			text = error.stack;
		});
	}

	function copy() {
		navigator.clipboard.writeText(text);
		showPopup("已复制脚本");
	}
</script>
{#if state == 'none'}
	<MenuEntry content="安装用户脚本" href={() => state = 'confirm'} />
{:else if state == 'confirm'}
	<Section>
		<p>快乐小方编写的MCBBS CreditAnalysis是闭源软件，因此无法直接提供带洞穴夜莺补丁的MCBBS CreditAnalysis。</p>
		<p>如果选择继续，则本页面会分别下载<a href={BASE_URL}>MCBBS CreditAnalysis</a>和<a href={PATCH_URL}>洞穴夜莺补丁</a>，然后将补丁打到MCBBS CreditAnalysis上。</p>
		<p>需要<a href="https://www.tampermonkey.net/">TamperMonkey</a>浏览器插件才能使用MCBBS CreditAnalysis。由于技术原因，此类由网页生成的脚本无法打开TamperMonkey的安装界面。因此，在下载完成后需要您手动将脚本复制粘贴到TamperMonkey的“添加新脚本”页面（可在TamperMonkey主菜单中找到）中去安装。</p>
		<button on:click={install}>确定</button>
		<button on:click={() => state = 'none'}>取消</button>
	</Section>
{:else if state == 'pending'}
	<Section>下载中。。。</Section>
{:else if state == 'data'}
	<Section>
		<p>将以下内容复制到TamperMonkey的“添加新脚本’页面中，然后保存。</p>
		<p>
		<button on:click={copy}>复制</button>
		<button on:click={() => state = 'none'}>取消</button>
		</p>
		<p><PlainTextView data={text} /></p>
	</Section>
{:else if state == 'error'}
	<Section>
		<p>出现了一个错误：</p>
		{text}
	</Section>
{/if}
<style>
	button {
		border-width: 1px;
		border-radius: 0.3em;
		border-color: #8f8f8f;
		border-style: solid;
		height: 2em;
		width: 5em;
		font-weight: 500;
		color: #000000;
		padding: 0px;
		margin: 0px;
		background-color: #00000000;
	}

	button:hover {
		background-color: #0000000f;
	}

	a {
		color: black !important;
	}
	p {
		user-select: none;
	}
</style>