<div class:container={true}>
	<slot></slot>
</div>
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