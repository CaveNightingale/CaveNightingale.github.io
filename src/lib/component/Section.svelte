<div class="outer">
	<div class="middle">
		<div class="inner">
			<slot></slot>
		</div>
	</div>
</div>
<style>
	.outer {
		width: 100%;
		background-color: white;
		border-radius: 5px;
		color: black;
		opacity: 0.9;
		align-items: center;
		display: flex;
		margin-top: 0.5em;
	}
	.middle {
		width: 100%;
		margin: 1em;
		width: calc(100% - 2em);
	}
	.inner {
		width: 100%;
	}
</style>
