<script lang="ts">
	import Column from "./Column.svelte";
	import Row from "./Row.svelte";

	let components={
		"row":Row,
		"column":Column
	}

	export let direction:"row"|"column"="row"
	export let alignment="flex-start"

</script>
<svelte:component this={components[direction]} bind:alignment>
	<slot></slot>
</svelte:component>

