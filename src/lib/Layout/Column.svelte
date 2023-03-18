<script lang="ts">
	export let reverse = false
	export let alignment="flex-start"
	export let fillWidth = false
</script>
<div class="column" class:fillWidth class:reverse style:align-items={alignment}>
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
	
	.column {
		display: flex;
		flex-direction: column;
		gap:var(--contentContainerGap, 1rem);
		flex-grow: 1;
		min-width: 200px;
		max-width: 100%;
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