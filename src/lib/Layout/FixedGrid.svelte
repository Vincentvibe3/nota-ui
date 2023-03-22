<script lang="ts">
	/**
	 * Number of rows in the grid
	 */
	export let rows:number

	/**
	 * Number of columns in the grid
	 */
	export let columns:number
</script>
<!-- 
	@component FixedGrid

	Used for creating a row x column grid
	
	Props:
	- rows: (number): number of rows in the grid
	- column (number): number of columns in the grid

	Slots:
	- default: contents of the FixedGrid

	Css Variables:
	- fixedGridGap (default: 2rem): Gap between elements in the grid

 -->
<div 
	class="fixedGrid" 
	style:grid-template-columns="repeat({columns}, 1fr)"
	style:grid-template-rows="repeat({rows}, 1fr)">
	<slot></slot>
</div>
<style lang="scss">
	.fixedGrid {
		display: grid;
		width: 100%;
		flex-grow: 1;
		gap: var(--fixedGridGap, 2rem);
	}
</style>