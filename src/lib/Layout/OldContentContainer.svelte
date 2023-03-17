<script lang="ts">
	export let direction:"row"|"column"="column"
	export let reverse=false
	export let fillWidth=true;
	export let fillHeight=true;
	export let alignment="left"
</script>
<div class:row={direction === "row"} class:fillWidth class:fillHeight class:reverse class="contentContainer">
	<slot></slot>
</div>
<style lang="scss">
	 .contentContainer {
		width:100%;
		min-height: fit-content;
        flex-grow: 1;
        flex-basis: 0;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		padding: var(--contentContainerPadding, 0rem);
		gap: var(--contentContainerGap, 1rem);
		flex-wrap: wrap;

		&.fillHeight {
			height:100%;
		}

		&.reverse{
			flex-direction: column-reverse;
		}

		&.row {
			width:100%;
			align-content: center;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;

			&.fillWidth{
				flex-basis: unset;
			}

			&.reverse{
				flex-direction: row-reverse;
			}
		}
    }
</style>