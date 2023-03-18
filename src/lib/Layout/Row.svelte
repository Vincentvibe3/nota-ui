<script lang="ts">
	export let reverse = false
	export let alignment="flex-start"
</script>
<div class="row" class:reverse style:justify-content={alignment}>
	<!-- Resets variables so nested containers arent affected -->
	<div 
	style:display= "contents" 
	style:--contentContainerGap="initial"
	style:--contentContainerPaddingx="initial"
	style:--contentContainerPaddingy="initial">
		<slot/>
	</div>
</div>
<style lang="scss">
	
	.row {
		display: flex;
		flex-direction: row;
		gap:var(--contentContainerGap, 1rem);
		flex-grow: 1;
		align-items: center;
		flex-wrap: wrap;
		max-width: 100%;
		align-self: stretch;
		padding: var(--contentContainerPaddingy, 0rem) var(--contentContainerPaddingx, 0rem);
		box-sizing: border-box;

		&.reverse{
			flex-direction: row-reverse;
		}
	}
</style>