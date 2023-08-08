<script lang="ts">
	import { onDestroy, onMount } from "svelte";

	import Section from "./Section.svelte";
	interface UserInfo {
		username: string;
		credits: any;
		userGroup: string;
		adminGroup?: string;
		userGroupEx?: string[];
		posts: number;
		threads: number;
	}
	// 四个分别是颜色，名称，权重，等级
	// 等级划分A:前150名，B:前400名，C:前1000名，D:自然数分，E:负分
	// 采用2022年4月xmdhs数据，其中发帖数以回帖数代替
	const totalCreditLevel = [12564, 7348, 4827];
	const creditTable: [string, string, number, number[]][] = [
		["#2dc6c8", "人气", 3, [1770, 829, 395]],
		["#5daf7a", "金粒", 0, [23372, 14581, 9110]],
		["#9c3a4b", "金锭", 0, [72, 40, 23]],
		["#3866b9", "宝石", 0, [20, 9, 5]],
		["#82de76", "下界之心", 0, [8, 4, 1]],
		["#b6a2dd", "贡献", 10, [61, 21, 6]],
		["#5ab1ee", "爱心", 4, [139, 51, 18]],
		["#d7797f", "钻石", 2, [2641, 2014, 1531]],
		["#e6399b", "发帖数", 1 / 3, [6677, 3504, 1911]],
		["#9f3ed5", "主题数", 2, [262, 166, 103]],
		["#ff4040", "精华数", 45, [20, 3, 0]],
	];

	export let renderingUser: UserInfo;
	let canvasParent: HTMLDivElement;
	let canvas: HTMLCanvasElement;
	let canvasWidth = 600;
	let totalCredit: number = 0;
	let credits: any = {};
	let expandProgress = 0;
	let selectedAngle: number | undefined = undefined;
	let selectedArea: string = "";
	let interval: number;

	$: {
		totalCredit = renderingUser.credits["积分"];
		let creditsTemp: any = {};
		let sum = 0;
		for (let dt of creditTable) {
			let n;
			switch (dt[1]) {
				case "发帖数":
					n = renderingUser.posts + renderingUser.threads;
					break;
				case "主题数":
					n = renderingUser.threads;
					break;
				case "精华数": // 精华最后出现，从个人主页看不到精华量
					n = (totalCredit - sum) / 45;
					break;
				default:
					n = renderingUser.credits[dt[1]];
			}
			creditsTemp[dt[1]] = n;
			sum += Math.floor(n * dt[2] + 0.5); // 四舍五入
		}
		credits = creditsTemp;
	}

	function setup() {
		let widthStr = getComputedStyle(canvasParent).width;
		canvasWidth = Math.min(
			parseInt(/^([\s\S]+)px$/.exec(widthStr)![1]) - 48,
			600
		);
		render();
		interval = <any>setInterval(render, 30);
	}
	function render(updateSelectedArea: boolean = false) {
		if (!canvas) return;
		if (updateSelectedArea) selectedArea = "";
		if (expandProgress === 1) {
			clearInterval(interval);
			interval = 0;
		}
		expandProgress += 0.03;
		if (expandProgress >= 1) {
			expandProgress = 1;
		}
		let ctx = canvas.getContext("2d")!;
		let sum = 0;
		let xy = canvasWidth / 2;
		ctx.clearRect(0, 0, canvasWidth, canvasWidth);
		for (let [color, name, weight] of creditTable) {
			if (weight == 0 || credits[name] == 0) {
				// Skip unused
				continue;
			}
			ctx.fillStyle = color;
			ctx.strokeStyle = color;
			ctx.lineWidth = 2;
			ctx.font = "400 " + canvasWidth / 60 + "px serif";
			let absTotal = Math.abs(totalCredit); // make sure negative credit has a negtive angle
			let startA =
				2 * Math.PI * ((sum / absTotal) * expandProgress - 1 / 4);
			let endA =
				2 *
				Math.PI *
				(((sum += credits[name] * weight) / absTotal) * expandProgress -
					1 / 4);
			if (startA > endA) {
				[startA, endA] = [endA, startA]; // handle negetive credits
			}
			let midA = (startA + endA) / 2;
			if (
				updateSelectedArea &&
				selectedAngle! > startA &&
				selectedAngle! < endA
			) {
				selectedArea = name;
			}
			let r =
				name === selectedArea ? canvasWidth / 2.7 : canvasWidth / 3.0; // tsc bug
			let lineEndX = xy + (Math.cos(midA) * canvasWidth) / 2.5;
			let lineEndY = xy + (Math.sin(midA) * canvasWidth) / 2.5;
			let percent =
				((100 * credits[name] * weight) / totalCredit).toFixed(2) + "%";
			ctx.beginPath();
			ctx.moveTo(xy, xy);
			ctx.arc(xy, xy, r, startA, endA);
			ctx.closePath();
			ctx.fill();
			ctx.moveTo(xy, xy);
			ctx.lineTo(lineEndX, lineEndY);
			ctx.stroke();
			if (simplifyA(midA) > Math.PI / 2) {
				let x = lineEndX - canvasWidth / 10;
				ctx.lineTo(x, lineEndY);
				ctx.fillText(
					name + credits[name],
					x,
					lineEndY - canvasWidth / 120
				);
				ctx.fillText(percent, x, lineEndY + canvasWidth / 40);
				ctx.stroke();
			} else {
				let x = lineEndX + canvasWidth / 10;
				ctx.lineTo(x, lineEndY);
				ctx.fillText(
					name + credits[name],
					lineEndX,
					lineEndY - canvasWidth / 120
				);
				ctx.fillText(percent, lineEndX, lineEndY + canvasWidth / 40);
				ctx.stroke();
			}
		}
	}
	function handleCanvasClick(e: MouseEvent) {
		let xy = canvasWidth / 2;
		let x = e.offsetX - xy,
			y = e.offsetY - xy;
		let len = (x ** 2 + y ** 2) ** 0.5;
		if (len <= canvasWidth / 2.6) {
			let cosA = x / len,
				sinA = y / len;
			selectedAngle =
				sinA >= 0 ? Math.acos(cosA) : 2 * Math.PI - Math.acos(cosA);
			selectedAngle =
				selectedAngle >= (3 * Math.PI) / 2
					? selectedAngle - 2 * Math.PI
					: selectedAngle;
			render(true);
		} else {
			selectedAngle = undefined;
			render(true);
		}
	}
	function selectArea(name: string) {
		selectedArea = name;
		render();
	}
	function rank(amount: number, data: number[]) {
		if (amount >= data[0]) {
			return "A";
		} else if (amount >= data[1]) {
			return "B";
		} else if (amount >= data[2]) {
			return "C";
		} else if (amount >= 0) {
			return "D";
		} else {
			return "E";
		}
	}
	function simplifyA(a: number) {
		// make sure -pi/2 <= a < 3pi/2
		let tmp = (a + Math.PI / 2) % (Math.PI * 2);
		if (tmp < 0) {
			tmp += Math.PI * 2;
		}
		return tmp - Math.PI / 2;
	}
	onMount(setup);
	onDestroy(() => (interval != 0 ? clearInterval(interval) : 0));
</script>

<svelte:window on:resize={setup} />
<Section>
	<!--Tables are awful. Use div instead.-->
	<div class="parent">
		<a
			style="font-size: 24px; color: black;"
			href={"https://www.mcbbs.net/home.php?mod=space&username=" +
				renderingUser.username}
			target="_blank"
		>
			{renderingUser.username}
		</a>
		(
		{@html renderingUser.userGroup}{#if renderingUser.userGroupEx}
			{#each renderingUser.userGroupEx as group}
				，{@html group}
			{/each}
		{/if}
		)
		<div
			class="lines"
			on:click={() => selectArea("")}
			on:keypress={() => {}}
		>
			<div class="color" />
			<div class="name">总积分</div>
			<div class="count">{totalCredit}</div>
			<div class="percent">100.00%</div>
			<div class="rank">{rank(totalCredit, totalCreditLevel)}</div>
		</div>
		{#each creditTable as credit}
			<div
				class="lines"
				style={selectedArea === credit[1] ? "background: #d8d8d8;" : ""}
				on:click={() => selectArea(credit[1])}
				on:keypress={() => {}}
			>
				<div class="color">
					<div
						class="color-example"
						style="background-color: {credit[0]};"
					/>
				</div>
				<div class="name">
					{credit[1]}
				</div>
				<div class="count">
					{credits[credit[1]]}
				</div>
				<div class="percent">
					{(
						(100 * credits[credit[1]] * credit[2]) /
						totalCredit
					).toFixed(2)}%
				</div>
				<div class="rank">
					{rank(credits[credit[1]], credit[3])}
				</div>
			</div>
		{/each}
	</div>
</Section>
<Section>
	<div
		class="canvas-parent"
		bind:this={canvasParent}
		on:click={handleCanvasClick}
		on:keypress={() => {}}
	>
		<canvas width={canvasWidth} height={canvasWidth} bind:this={canvas}>
			请更新浏览器！
		</canvas>
	</div>
</Section>

<style>
	.color-example {
		width: 2em;
		height: 1em;
	}
	.parent {
		width: 100%;
	}
	.lines {
		width: 100%;
		border-top: solid 1px grey;
		height: 2.1em;
		align-items: center;
		display: flex;
	}
	.lines > div {
		display: inline-block;
		align-items: center;
	}
	.color {
		width: 4em;
	}
	.name {
		width: 100%;
	}
	.count {
		width: 7em;
	}
	.percent {
		width: 7em;
	}
	.rank {
		width: 1em;
	}
	.canvas-parent {
		text-align: center;
	}
</style>
