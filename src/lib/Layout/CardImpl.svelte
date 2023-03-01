<script lang="ts">
	import ContentContainer from "./ContentContainer.svelte";
	import ContentGrid from "./ContentGrid.svelte";

	export let direction: "row"|"column" = "column"
	export let highlightable = false

</script>
<div class="bg" class:highlightable>
	<slot name="image"></slot>
	<ContentGrid --contentPadding="1.5rem">
		<ContentContainer direction={direction}>
			<slot></slot>
		</ContentContainer>
	</ContentGrid>
</div>
<style lang="scss">

	.highlightable {
		transition: all 0.2s ease-in-out;
		cursor: pointer;

		&:hover{
			background-color: var(--n400);
		}
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