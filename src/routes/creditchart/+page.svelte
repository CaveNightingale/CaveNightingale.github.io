<script lang="ts">
	import { pageInfo, title } from "$lib/common";
	import CreditChartUserScript from "$lib/component/CreditChartUserScript.svelte";
	import Footer from "$lib/component/Footer.svelte";
	import MainContext from "$lib/component/MainContext.svelte";
	import McbbsCreditChart from "$lib/component/McbbsCreditChart.svelte";
	import Section from "$lib/component/Section.svelte";
	import { onMount } from "svelte";
	let back = () => {
		if (renderingUser != "none") {
			renderingUser = "none";
			history.pushState({}, "", "/creditchart");
		} else {
			open("/", "_self");
		}
	};
	let uidInput: string = "";
	let renderingUser: any | "pending" | "error" | "none" = "none";
	$: {
		switch (renderingUser) {
			case "none":
			case "pending":
			case "error":
				$title = "MCBBS积分分析";
				break;
			default:
				$title = "MCBBS积分分析 - " + renderingUser.username;
		}
	}

	const FUNCTION_URL_BACKUP =
		"https://service-90k6etn2-1312710079.gz.apigw.tencentcs.com/release/get-mcbbs-userstat?uid=";
	const FUNCTION_URL =
		"https://master--cavenightingale.netlify.app/.netlify/functions/get-mcbbs-credit?uid=";

	async function getUserInfo(uid: number): Promise<any> {
		let result,
			retryCount = 0;
		while (!result && retryCount++ < 3) {
			// AutoRetry
			try {
				result = await (await fetch(FUNCTION_URL + uid)).json();
			} catch {}
		}
		if (!result) {
			throw new Error("Cannot connect to proxy");
		} else if (result.error) {
			throw new Error(result.error);
		} else if (!result.username) {
			throw new Error("Function returns improper data");
		} else {
			return result;
		}
	}
	async function load(_ignore: any, pushstate: boolean = true) {
		let uid = parseInt(uidInput);
		if (isFinite(uid) && uid > 0) {
			renderingUser = "pending";
			try {
				renderingUser = await getUserInfo(uid);
				if (pushstate) {
					history.pushState(
						{},
						"",
						location.pathname + "?uid=" + uid
					);
				}
			} catch {
				renderingUser = "error";
			}
		} else {
			renderingUser = "error";
		}
	}
	function setup() {
		uidInput = new URLSearchParams(location.search).get("uid") || "";
		if (uidInput != "") {
			load(0, false);
		} else {
			renderingUser = "none";
		}
	}
	onMount(setup);
	pageInfo("MCBBS积分分析", back);
</script>

<MainContext>
	<Section>
		输入用户的UID：
		<input type="number" bind:value={uidInput} /><button on:click={load}
			>确定</button
		>
	</Section>
	{#if renderingUser === "error"}
		<Section>
			<span style="color: red;">找不到这个用户</span>
		</Section>
	{:else if renderingUser === "pending"}
		<Section>加载中。。。</Section>
	{:else if renderingUser === "none"}
		<CreditChartUserScript />
	{:else}
		<McbbsCreditChart {renderingUser} />
	{/if}
	<Footer>
		说明：等级判定与排位有关，前150名判为A级，前400名判为B级，前1000名判为C级，除此之外大于等于零的判D级，小于零的判E级。采用2022年4月xmdhs统计数据。页面使用的跨域代理为https://master--cavenightingale.netlify.app/.netlify/functions/get-mcbbs-credit?uid=，Netlify超时时间长达10秒而且访问MCBBS速度较慢，故可能出现长时间加载的情况，可以尝试再次点击“确定”。
	</Footer>
</MainContext>

<style>
	input {
		width: 8em;
		border-width: 1px;
		border-radius: 0.2em;
		border-style: solid;
		border-color: #8f8f8f;
		padding-left: 0.4em;
		padding-right: 0.4em;
		padding-top: 0.2em;
		padding-bottom: 0.2em;
		outline: none;
		-moz-appearance: textfield;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}

	input:focus {
		border-width: 1px;
		border-color: #000000;
	}

	input:hover {
		background-color: #0000000f;
	}

	button {
		border-width: 1px;
		border-radius: 0.3em;
		border-color: #8f8f8f;
		border-style: solid;
		height: 2em;
		width: 5em;
		float: right;
		font-weight: 500;
		color: #000000;
		padding: 0px;
		margin: 0px;
		background-color: #00000000;
		outline: none;
	}

	button:hover {
		background-color: #0000000f;
	}
</style>
