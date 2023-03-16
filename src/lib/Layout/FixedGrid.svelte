<script lang="ts">
	export let rows:number
	export let columns:number
</script>
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