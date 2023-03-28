<div class:container={true}>
	<slot></slot>
</div>
<!-- 
	@component SidebarSlot
	
	Space for non-link elements to be placed in a `Sidebar`

	Css Variables:
	- sidebarSlot (default: 400 1rem sans-serif): Font in the slot
	- sidebarSlotText (default: #161616): Text color in the slot
	
 -->
<style lang="scss">
	.container {
		width: calc(100% - 3rem);
		height: fit-content;
		
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: start;

		padding: 1.5rem;
		
		border:none;

		font: var(--sidebarSlotFont, 400 1rem sans-serif);
		text-decoration: none;
		color: var(--sidebarSlotText, #161616);
		
		transition: all ease-in-out 0.2s;
	} 
</style>