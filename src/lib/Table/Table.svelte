<script lang="ts">
	import TableCell from "./TableCell.svelte";
	import TableRow from "./TableRow.svelte";
	export let data:any[][]=[[]];
</script>
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
<style lang="scss">
	table {
		font: var(--tableFont, 400 1rem sans-serif);
		border-radius: var(--borderRadius, 0.5rem);
		background-color: var(--tableBg, #f0f0f0);
		border-collapse: collapse;
		width: fit-content;
	}
</style>