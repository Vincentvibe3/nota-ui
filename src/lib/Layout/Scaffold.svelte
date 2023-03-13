<script lang="ts">
	export let noPadding = false;
</script>
<slot name="header"></slot>
<div class:noPadding class="container">
	<slot></slot>
</div>
<style lang="scss">
	.container {
		width: 100%;
		display: flex;
		flex-direction: row;
		padding: var(--contentPadding, 3rem);
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 3rem;
		box-sizing: border-box;

		&.noPadding{
			padding: 0px;
		}
	}
</style>