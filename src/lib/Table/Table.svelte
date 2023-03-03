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
		font: var(--body);
		border-radius: var(--borderRadius);
		background-color: var(--n300);
		border-collapse: collapse;
		width: fit-content;
	}
</style>