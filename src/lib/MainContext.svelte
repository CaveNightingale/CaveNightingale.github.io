<div>
	<slot></slot>
</div>
<style>
	div {
		padding-left: 0.8em;
		padding-right: 0.8em;
		padding-top: 2.4em;
		color: white;
	}
	@media screen and (min-width: 900px) {
		div {
			padding-top: 2.4em;
			border-radius: 10px;
			width: 900px;
			margin: auto;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			word-wrap: break-word;
		}
	}
</style>