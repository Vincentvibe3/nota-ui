<script>

	import ContentContainer from "./ContentContainer.svelte";

	export let highlightable = true;
</script>
<a class:bg={true} class:highlightable href="/">
	<slot name="image"></slot>
	<ContentContainer --margin=1.5rem>
		<slot/>
	</ContentContainer>
</a>
<style lang="scss">

	.highlightable {
		transition: all 0.2s ease-in-out;
		cursor: pointer;

		&:hover{
			background-color: var(--n400);
		}
	}

	a.bg{
		display:block;
		text-decoration: none;
		color: inherit;
	}
	
	.bg {
		background-color: var(--n300);
		border-radius: 0.5rem;
		margin: var(--cardMargin, 1rem);
		border: 0px;
		padding: 0px;
		width: calc(100% - var(--cardMargin, 1rem));
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
		

		:global( img ){
			width:100%;
			object-fit: cover;
			border-radius: 0.5rem;
		}
	}
</style>