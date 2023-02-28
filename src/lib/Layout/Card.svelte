<script lang="ts">
	import ContentContainer from "./ContentContainer.svelte";
	import ContentGrid from "./ContentGrid.svelte";

	export let direction: "row"|"column" = "column"
</script>
<div class="bg">
	<slot name="image"></slot>
	<ContentGrid --contentPadding="1.5rem">
		<ContentContainer direction={direction}>
			<slot></slot>
		</ContentContainer>
	</ContentGrid>
</div>
<style lang="scss">
	
	.bg {
		background-color: var(--n300);
		border-radius: 0.5rem;
		margin: var(--cardMargin, 1rem);

		:global( img ){
			width:100%;
			object-fit: cover;
			border-radius: 0.5rem;
		}
	}
</style>