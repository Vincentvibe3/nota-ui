<script lang="ts">
	import TableCell from "./TableCell.svelte";
	import TableRow from "./TableRow.svelte";

	/**
	 *  2D array of data to be rendered into the table
	 */
	export let data:unknown[][]=[[]];
</script>
<!-- 
	@component Table
	
	Creates a table from a 2D array or by manually adding `TableRow` components

	Props:
	- data (unknown[][]): 2D array of data to be rendered into the table

	Slots:
	- default: For additional manual `TableRow` components. 
	These will be placed under the rows rendered from data
	- header: For placing a `TableHeader`

	Css Variables:
	- tableBg (default: #f0f0f0): background color for the table
	- others: See `TableCell`, `TableHeader` and `TableRow`
	
 -->
<div class="wrapper">
	<table>
		<slot name="header"></slot>
		{#each data as row}
			<TableRow>
				{#each row as cell}
					<TableCell>{cell}</TableCell>
				{/each}
			</TableRow>
		{/each}
		<slot></slot>
	</table>
</div>
<style lang="scss">
	.wrapper{
		overflow-x:scroll;
		max-width:100%;
		border-radius: var(--borderRadius, 0.2rem);
	}

	table {
		font: var(--tableFont, 400 1rem sans-serif);
		background-color: var(--tableBg, #f0f0f0);
		border-collapse: collapse;
		width: fit-content;
	}
</style>