<script>
	import CardImpl from "./CardImpl.svelte";

</script>
<button on:click>
	<CardImpl highlightable>
		<slot name="image" slot="image"></slot>
		<slot></slot>
	</CardImpl>
</button>
<style lang="scss">
	button {
		border: 0px;
		width: 100%;
		background-color: transparent;
	}
</style>
