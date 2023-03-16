<script lang="ts">
	export let reverse = false
	export let alignment="flex-start"
</script>
<div class:reverse style:justify-content={alignment}>
	<slot/>
</div>
<style lang="scss">
	
	div {
		width:100%;
		display: flex;
		flex-direction: row;
		gap:1rem;
		align-items: center;
		flex-wrap: wrap;

		&.reverse{
			flex-direction: row-reverse;
		}
	}
</style>