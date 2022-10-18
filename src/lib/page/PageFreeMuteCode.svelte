<script lang="ts">
    import { openPage } from "$lib/common";
	import McbbsUserAvatar from "$lib/component/McbbsUserAvatar.svelte";
    import { onDestroy, onMount } from "svelte";
    import PageIndex from "./PageIndex.svelte";
	export const scalable = true;
	export const background = false;
	export const title = "获取免费的MCBBS禁言代码";
	export const back = () => openPage("/", PageIndex);
	onMount(() => document.body.style.minWidth = "800px");
	onDestroy(() => {
		if(typeof document != "undefined")
			document.body.style.minWidth = "";
	});
</script>
<br /><br />
<nobr id="main">
	<div id="top">
		<h3>获取你的免费MCBBS末地旅游代码！限时供应！</h3>
	</div>
	<div id="containar">
		<div id="left">
			<div id="leftheader">
				<div id="leftheaderleft">
					<h1>
						<img
							id="mcbbs-icon"
							src="../assets/freemutecode/block.gif"
							alt="Free Minecraft Gift Codes"
							width="90px"
							height="100px"
						/>
					</h1>
				</div>
				<div id="leftheaderright">
					<h3>从我们这里免费获取MCBBS末地旅游代码！</h3>
					<p>
						申请MCBBS禁言代码是有时间限制的<br />
						在优惠结束之前，现在就加入吧。
						<br />
						<br />
						不要错过 - 这是一个限时优惠。现在就申请!
					</p>
				</div>
			</div>
			<div id="leftheader2">
				<h5>获取MCBBS禁言代码<br /></h5>
				<strong />
				<p>
					<strong>原价：</strong> 多次灌水、版战和其他作死行为<br />
					<strong>优惠：</strong> 100%免除额外作死<br />
					<strong>你花费的：</strong> 没有什么！它是完全免费的！<br />
					在活动过期之前，抓住你的MCBBS禁言代码！
				</p>
			</div>
			<div id="redeemed">
				<p>
					此优惠每个用户只能兑换一次。<br />
					你将不需要任何额外作死，这是一个完全免费的禁言。
				</p>
			</div>
			<div class="c4" id="Features">
				<h4>按照下面的简单步骤来申请你的免费MCBBS禁言代码：</h4>
				<br />
				<span class="c1">Step 1: 点击下面按钮中的两个 &amp; 确认</span>:<br />
				<br />
				<div id="socialmedia">
					<div><!--管理员-->
						<McbbsUserAvatar uid=3038		name="混乱" />
						<McbbsUserAvatar uid=3467		name="sjjklh" />
						<McbbsUserAvatar uid=5367		name="john180" />
						<McbbsUserAvatar uid=36116		name="magicbear" />
						<McbbsUserAvatar uid=66971		name="妖梦的舔狗" />
						<McbbsUserAvatar uid=84901		name="pogox" />
						<McbbsUserAvatar uid=265600		name="rom718" />
						<McbbsUserAvatar uid=564746		name="gamerteam" />
						<McbbsUserAvatar uid=2676420	name="bbsmaster" />
						<br /><!--管理员助理-->
						<McbbsUserAvatar uid=165947		name="凛" />
						<McbbsUserAvatar uid=1350847	name="广药" />
						<McbbsUserAvatar uid=2153967	name="SHEEP_REALMS" />
						<McbbsUserAvatar uid=2999970	name="声名我主宰" />
					</div>
					<br />
					<br />
					<span class="c1">Step 2: 把这个消息发个三个不同的版主。</span><br />
					<br />
					<p />
					<div id="comment">
						<textarea
							id="comment"
							rows="4"
							cols="60"
							>最后！我得到了2-4-R论坛禁言待遇绝对免费！从https://cavenightingale.github.io/freemutecode那里得到你的</textarea
						>
					</div>
					<br />
					<br />
				</div>
				<div id="after">» 完成所有步骤后... 点击下面的按钮。 «</div>
				<div class="c4">
					<input type="button" on:click={() => alert('哎呀! 看来你没有完成步骤2!')} value="申请你的MCBSS禁言代码" />
				</div>
				<br />
				<br />
				<br />
			</div>
		</div>
	</div>
	<div class="separator c6"><span class="c5">一旦你完成了步骤2...</span></div>
	<br />
	<br />
	<div class="c4">
		如果你没有成功进入末地旅游，这里有个替代链接：
		<span class="Apple-style-span c8">
			<a href="https://www.mcbbs.net/thread-968842-1-1.html" target="_blank"><span class="c7">CLICK HERE</span></a>
		</span>
	</div>
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<div class="separator c9" />
	<footer style="text-align: center;">
		本页面使用全部的CSS和部分HTML代码来自原版freegiftcode，本页面为玩梗网页，请勿当真。<br/>
		免费正版礼品码类网站属于诈骗性质，向社交网站发表类似内容可能会导致禁言或禁访，请勿作死。<br/>
		参考<a href="https://www.mcbbs.net/thread-1226924-1-1.html">【残叶杂谈】扒一扒所谓“免 费 正 版 礼 品 码”的背后</a>
	</footer>
</nobr>

<style>
	div.c9 {
		clear: both;
		text-align: center;
	}

	span.c8 {
		border-width: 0px;
		font-family: "lucida grande", tahoma, verdana, arial, sans-serif;
		font-size: 1px;
		list-style-type: none;
		margin: 0px;
		outline-width: 0px;
		padding: 0px;
	}

	span.c7 {
		font-size: small;
	}

	div.c6 {
		clear: both;
		text-align: center;
	}

	span.c5 {
		font-weight: bold;
	}

	div.c4 {
		text-align: center;
	}

	span.c1 {
		text-decoration: underline;
	}

	* {
		margin: 0;
		padding: 0
	}

	#top {
		width: 700px;
		height: 30px;
		background-position: top left;
		margin: 0 auto;
		font-size: 18px;
		color: #000
	}

	#top h3 {
		width: 700px;
		height: 30px;
		padding-left: 55px;
		padding-top: 4px;
		font-weight: 700;
		font-family: comic sans ms, cursive
	}

	#containar {
		margin: 0 auto;
		width: 700px;
		height: 868px;
		background-color: #fff;
		margin-top: 30px;
		border: solid;
		border-width: thin;
		border-color: #ccc
	}

	#left {
		width: 680px;
		height: 847px;
		margin: 0 auto;
		background-color: #fff;
		float: left;
		border: solid;
		border-width: thin;
		border-color: #ccc;
		margin-left: 9px;
		margin-right: 10px;
		margin-top: 10px
	}

	#leftheader {
		width: 680px;
		height: 115px;
		margin: 0 auto;
		background-color: transparent;
		border-bottom: dotted;
		border-width: thin;
		border-color: #ccc;
		margin-top: 20px;
		margin-bottom: 10px
	}

	#leftheaderleft {
		width: 120px;
		height: 125px;
		float: left;
		background-color: transparent;
		margin-left: 5px
	}

	#leftheaderright {
		width: 500px;
		height: 125px;
		float: right;
		background-color: transparent;
		margin-right: 40px;
		margin-left: 15px
	}

	#leftheaderright h3 {
		font-family: Verdana, Geneva, sans-serif;
		font-weight: 700;
		font-size: 17px
	}

	#leftheaderright p {
		font-family: Verdana, Geneva, sans-serif;
		font-size: 13px
	}

	#leftheader2 {
		width: 500px;
		height: 105px;
		margin: 0 auto;
		margin-left: 70px;
		background-color: #fff9d7;
		margin-top: 10px;
		border: solid;
		border-color: #e0c51a;
		border-width: thin
	}

	#leftheader2 h5 {
		font-family: Verdana, Geneva, sans-serif;
		font-weight: 700;
		font-size: 14px;
		padding-top: 10px;
		padding-left: 50px
	}

	#leftheader2 p {
		font-family: Verdana, Geneva, sans-serif;
		line-height: 150%;
		font-size: 11px;
		color: #666;
		padding-left: 50px
	}

	#redeemed {
		width: 540px;
		height: 35px;
		margin: 0 auto;
		margin-top: 20px;
		background-color: transparent;
		font-size: 11px;
		font-family: Verdana, Geneva, sans-serif
	}

	#Features {
		width: 500px;
		height: 370px;
		margin: 0 auto;
		margin-top: 20px;
		margin-left: 70px;
		background-color: #edecec;
		border: solid;
		border-color: #c4c3c3;
		border-width: thin;
		font-size: 14px;
		font-family: arial
	}

	#Features h4 {
		width: 455px;
		height: 26px;
		font-family: Arial;
		font-size: 12px;
		margin: 0 auto;
		padding-bottom: 5px;
		padding-top: 10px;
		border-bottom: solid;
		border-bottom-color: #c4c3c3;
		border-bottom-width: thin
	}

	#Features p {
		width: auto
	}

	#comment {
		width: 480px;
		height: 80px;
		margin: 0 auto
	}

	#after {
		margin-top: 8px;
		margin-bottom: 8px
	}

	#mcbbs-icon {
		float: right;
		transform: scale(0.75);
	}

	@media (max-width: 800px) {
		#main {
			scale: 0.6;
		}
	}
</style>