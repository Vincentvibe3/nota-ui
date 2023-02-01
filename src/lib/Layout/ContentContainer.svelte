<script lang="ts">
	export let type:"row"|"column"="column"
</script>
<div class:row={type=="row"} class="contentContainer">
	<slot></slot>
</div>
<style lang="scss">
	 .contentContainer {
		width:100%;
        flex-grow: 1;
        flex-basis: 0;

		&.row {
			width:100%;
			flex-basis: unset;
		}
    }
</style>