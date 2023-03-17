<script lang="ts">
	export let reverse = false
	export let alignment="flex-start"
</script>
<div class:reverse style:justify-content={alignment}>
	<slot/>
</div>
<style lang="scss">
	
	div {
		display: flex;
		flex-direction: row;
		gap:var(--contentContainerGap, 1rem);
		flex-grow: 1;
		align-items: center;
		flex-wrap: wrap;
		align-self: stretch;
		padding: var(--contentContainerPaddingy, 0rem) var(--contentContainerPaddingx, 0rem);
		box-sizing: border-box;

		&.reverse{
			flex-direction: row-reverse;
		}
	}
</style>