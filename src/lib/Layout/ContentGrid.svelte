<script lang="ts">
	export let noPadding = false;
</script>
<slot name="header"></slot>
<section class:noPadding class="container">
	<slot></slot>
</section>
<style lang="scss">
	.container {
		width: calc(100% - 6rem);
		display: flex;
		flex-direction: row;
		padding: var(--contentPadding, 3rem);
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 3rem;

		&.noPadding{
			padding: 0px;
		}
	}
</style>