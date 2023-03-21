<div class="siteContent">
	<slot name="navbar"></slot>
	<div class="contentMiddle" class:hasSidebar={$$slots.leftSidebar}>
		{#if $$slots.leftSidebar}
			<slot name="leftSidebar"></slot>
		{/if}
		<slot></slot>
	</div>
	<slot name="footer"></slot>
</div>
<style lang="scss">

	@media only screen and (min-width: 1000px) {
		.contentMiddle {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
		}

		.contentMiddle:not( .hasSidebar ){
			display: flex;
		}
	}

	.contentMiddle {
		min-height: 100vh;
	}

	.siteContent {
		display: flex;
		flex-direction: column;
		height: fit-content;
	}
</style>