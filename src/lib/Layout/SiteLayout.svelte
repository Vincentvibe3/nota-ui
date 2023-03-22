<!-- 
	@component SiteLayout
	
	Responsive Site-wide layout with 4 zones(Navbar, Left Sidebar, Footer, Content)

	Slots:
	- default: Contains a page's content
	- navbar: Slot for placing a navbar
	- leftSidebar: Slot for placing a Sidebar on the left
	- footer: Slot for placing a footer at the bottom of the site
	
 -->
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