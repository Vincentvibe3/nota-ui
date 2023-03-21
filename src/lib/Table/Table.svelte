<script lang="ts">
	import TableCell from "./TableCell.svelte";
	import TableRow from "./TableRow.svelte";
	export let data:any[][]=[[]];
</script>
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