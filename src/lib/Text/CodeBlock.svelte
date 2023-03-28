<!-- 
	@component CodeBlock
	
	Code block meant to be used inline

	Slots:
	- default: text to be displayed

	CSS Variables:
	- codeblockBg (default:#c0c0c0): BAckground color of the block
	
 -->
<span><slot></slot></span>
<style lang="scss">
	span{
		background-color: var(--codeblockBg, #c0c0c0);
		padding: 00.2rem 0.3rem;
		border-radius: 0.2rem;
		font-family: monospace;
		white-space:pre;
	}
</style>