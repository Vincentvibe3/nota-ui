<div class="siteContent">
	<slot name="navbar"></slot>
	<slot name="leftSidebar"></slot>
	<slot></slot>
	<slot name="footer"></slot>
</div>
<style lang="scss">
	.siteContent {
		display: grid;
		grid-template-rows: 3.5rem 1fr 1fr;
		grid-template-columns: 20rem 1fr;
	}
</style>