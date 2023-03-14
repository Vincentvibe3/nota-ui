<script lang="ts">
	import CardImpl from "./CardImpl.svelte";
	export let direction: "row"|"column" = "column"
</script>
<CardImpl bind:direction>
	<slot name="image" slot="image"/>
	<slot/>
</CardImpl>