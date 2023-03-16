<script lang="ts">
	export let direction:"row"|"column"="column"
	export let reverse=false
</script>
<div class:row={direction === "row"} class:reverse class="contentContainer">
	<slot></slot>
</div>
<style lang="scss">
	 .contentContainer {
		width:100%;
        flex-grow: 1;
        flex-basis: 0;
		display: flex;
		align-content: flex-start;
		flex-direction: column;
		box-sizing: border-box;
		padding: var(--contentContainerPadding, 0rem);
		gap: var(--contentContainerGap, 1rem);
		flex-wrap: wrap;

		&.reverse{
			flex-direction: column-reverse;
		}

		&.row {
			width:100%;
			flex-basis: unset;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;

			&.reverse{
				flex-direction: row-reverse;
			}
		}
    }
</style>