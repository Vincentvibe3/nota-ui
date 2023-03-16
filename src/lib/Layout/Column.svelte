<script lang="ts">
	export let reverse = false
	export let alignment="flex-start"
</script>
<div class:reverse style:align-items={alignment}>
	<slot/>
</div>
<style lang="scss">
	
	div {
		display: flex;
		flex-direction: column;
		gap:1rem;
		flex-grow: 1;
		min-width: 300px;

		&.reverse{
			flex-direction: column-reverse;
		}
	}
</style>