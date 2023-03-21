<script lang="ts">
	export let noPadding = false;
</script>
<div class="wrapper">
	<slot name="header"></slot>
	<div class:noPadding class="container">
		<slot></slot>
	</div>
</div>

<style lang="scss">

	.wrapper {
		flex-grow: 1;
		flex-shrink: 1;
		width:100%;
		min-width: 0;
	}

	.container {
		width: 100%;
		min-width: 0;
		display: flex;
		flex-direction: column;
		padding: var(--scaffoldPadding, 3rem);
		justify-content: space-between;
		flex-wrap: wrap;
		gap: var(--scaffoldGap, 3rem);
		box-sizing: border-box;

		&.noPadding{
			padding: 0px;
		}
	}
</style>