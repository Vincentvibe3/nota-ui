<script lang="ts">
	export let direction:"row"|"column"="column"
	export let reverse=false
</script>
<div class:row={direction=="row"} class:reverse class="contentContainer">
	<slot></slot>
</div>
<style lang="scss">
	 .contentContainer {
		width:100%;
        flex-grow: 1;
        flex-basis: 0;
		display: flex;
		align-content: space-between;
		justify-content: space-between;
		align-items: start;
		justify-items: start;
		flex-direction: column;
		box-sizing: border-box;
		padding: var(--margin, 0rem);

		&.reverse{
			flex-direction: column-reverse;
		}

		&.row {
			width:100%;
			flex-basis: unset;
			flex-direction: row;

			&.reverse{
				flex-direction: row-reverse;
			}
		}
    }
</style>