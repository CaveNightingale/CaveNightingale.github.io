<div class="outer">
	<div class="inner">
		<slot></slot>
	</div>
</div>
<style>
	.outer {
		width: 100%;
		background-color: white;
		border-radius: 0.2em;
		box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 4px 0px;
		color: black;
		opacity: 0.9;
		align-items: center;
		display: flex;
		margin-top: 0.5em;
	}
	.inner {
		padding: 1em;
		width: 100%;
	}
</style>
