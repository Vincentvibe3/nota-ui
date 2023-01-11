<div id={$$restProps.id} style={$$restProps.style} class:container={true} class={$$restProps.class}>
	<slot></slot>
</div>
<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: start;
		padding: 1rem;
		height: fit-content;
		background-color: #f0f0f0;
		width: calc(100% - 2rem);
		border:none;
		border-bottom: #c0c0c0 solid 0.1rem;
		text-decoration: none;
		color: #161616;
		font: var(--body);
		transition: all ease-in-out 0.2s;
	} 
</style>