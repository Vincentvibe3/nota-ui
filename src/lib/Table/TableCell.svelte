<script lang="ts">
	export let isHeader = false
</script>
{#if isHeader}
	<th>
		<slot></slot>
	</th>
{:else}
	<td>
		<slot></slot>
	</td>
{/if}
<style lang="scss">
	th, td {
		text-align: start;
		padding: 1rem;
		font-weight: 400;
		
	}
	
</style>