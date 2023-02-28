<script lang="ts">
	export let direction:"row"|"column"="column"
</script>
<div class:row={direction=="row"} class="contentContainer">
	<slot></slot>
</div>
<style lang="scss">
	 .contentContainer {
		width:100%;
        flex-grow: 1;
        flex-basis: 0;
		align-content: space-between;
		justify-content: space-between;

		&.row {
			width:100%;
			flex-basis: unset;
		}
    }
</style>