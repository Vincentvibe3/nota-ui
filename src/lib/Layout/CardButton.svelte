<script>
	import CardImpl from "./CardImpl.svelte";
	export let margin = ""
</script>
<CardImpl margin={margin} on:click highlightable tag="button">
	<slot name="image" slot="image" />
	<slot/>
</CardImpl>