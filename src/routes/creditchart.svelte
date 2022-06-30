<script lang="ts">
	import Footer from "$lib/Footer.svelte";
	import MainContext from "$lib/MainContext.svelte";
	import McbbsCreditChart from "$lib/McbbsCreditChart.svelte";
	import Nav from "$lib/Nav.svelte";
	import Section from "$lib/Section.svelte";
	import { onMount } from "svelte";
	let uidInput: string = '';
	let title = 'MCBBS积分分析';
	let renderingUser: any | 'pending' | 'error' | 'none' = 'none';
	$: {
		switch(renderingUser) {
			case 'none':
			case 'pending':
			case 'error':
				title = 'MCBBS积分分析'
				break
			default:
				title = 'MCBBS积分分析 - ' + renderingUser.username
		}
	};

	const FUNCTION_URL = "https://service-90k6etn2-1312710079.gz.apigw.tencentcs.com/release/get-mcbbs-userstat?uid="

	async function getUserInfo(uid: number): Promise<any> {
		let result = await (await fetch(FUNCTION_URL + uid)).json()
		if(result.error)
			throw new Error(result.error)
		else
			return result
	}
	async function load() {
		let uid = parseInt(uidInput);
		if(isFinite(uid) && uid > 0) {
			renderingUser = 'pending';
			try {
				renderingUser = await getUserInfo(uid);
				history.pushState({}, '', location.pathname + '?uid=' + uid);
			} catch {
				renderingUser = 'error'
			}
		} else {
			renderingUser = 'error'
		}
	}
	function setup() {
		uidInput = new URLSearchParams(location.search).get('uid') || ''
		if(uidInput != '')
			load();
	}
	onMount(setup);
</script>
<Nav title={title} background />
<MainContext>
	<Section>
		输入用户的UID：
		<input type="text" bind:value={uidInput} /><button on:click={load}>确定</button>
	</Section>
	{#if renderingUser === 'error'}
		<Section>
			<span style="color: red;">找不到这个用户</span>
		</Section>
	{:else if renderingUser === 'pending'}
		<Section>
			加载中。。。
		</Section>
	{:else if renderingUser !== 'none'}
		<McbbsCreditChart {renderingUser} />
	{/if}
	<Footer>
		说明：等级判定与排位有关，前150名判为A级，前400名判为B级，前1000名判为C级，除此之外大于等于零的判D级，小于零的判E级。采用2022年4月xmdhs统计数据。
	</Footer>
</MainContext>
<style>
	input {
		width: 8em;
	}

	button {
		border: 0px;
		border-radius: 0.1em;
		height: 2em;
		float: right;
	}
</style>