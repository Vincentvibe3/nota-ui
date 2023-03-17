<script lang="ts">
	export let reverse = false
	export let alignment="flex-start"
	export let fillWidth = false
</script>
<div class="column" class:fillWidth class:reverse style:align-items={alignment}>
	<slot/>
</div>
<style lang="scss">
	
	.column {
		display: flex;
		flex-direction: column;
		gap:var(--contentContainerGap, 1rem);
		min-width: 300px;
		padding: var(--contentContainerPaddingy, 0rem) var(--contentContainerPaddingx, 0rem);
		box-sizing: border-box;

		&.fillWidth {
			width: 100%;
		}

		&.reverse{
			flex-direction: column-reverse;
		}
	}
</style>