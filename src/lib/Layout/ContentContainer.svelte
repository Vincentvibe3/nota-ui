<script lang="ts">
	import Column from "./Column.svelte";
	import Row from "./Row.svelte";

	let components={
		"row":Row,
		"column":Column
	}

	/**
	 * controls the alignment of the flexbox, defaults to a row
	 */
	export let direction:"row"|"column"="row"

	/**
	 * controls the flexbox alignment
	 */
	export let alignment="flex-start"

	/**
	 * reverses the flex direction
	*/
	export let reverse=false

	/**
	 * make a column full width
	*/
	export let fillWidth=false

</script>
<!-- 
	@component ContentContainer

	Used for creating a row or column layout
	
	Props:
	- direction ("row"|"column"): controls the alignment of the flexbox, defaults to a row
	- alignment (string): controls the flexbox alignment
	- reverse (boolean): reverses the flex direction
	- fillWidth (boolean): make a column full width

	Slots:
	- default: contents of the ContentContainer

	Css Variables:
	- contentContainerPaddingx (default:1rem)
	- contentContainerPaddingy (default:0rem)
	- contentContainerPaddingGap (default:0rem)

 -->
<svelte:component this={components[direction]} bind:fillWidth bind:reverse bind:alignment>
	<slot></slot>
</svelte:component>

