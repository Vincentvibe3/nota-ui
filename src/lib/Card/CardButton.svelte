<script>
	import CardImpl from "./CardImpl.svelte";
</script>
<CardImpl on:click highlightable tag="button">
	<slot name="image" slot="image" />
	<slot/>
</CardImpl>