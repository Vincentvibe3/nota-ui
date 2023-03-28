<script lang="ts">
	/**
	 * For changing the tag from <td> to <th> if its in a TableHeader
	 */
	export let isHeader = false
</script>
<!-- 
	@component TableCell
	
	Cell in a table. Intended to be used in a `TableRow` or a `TableHeader`

	Props:
	- isHeader: For changing the tag from `<td>` to `<th>` if its in a `TableHeader`

	Slots:
	- default: Cell content
	
 -->
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