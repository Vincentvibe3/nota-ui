<script lang="ts">
	import CardImpl from "./CardImpl.svelte";
	export let direction: "row"|"column" = "column"
</script>
<CardImpl on:click bind:direction highlightable tag="button">
	<slot name="image" slot="image" />
	<slot/>
</CardImpl>