<script lang="ts">
	import CardImpl from "./CardImpl.svelte";

	/**
	 * Sets the direction of the Card's contents 
	 */
	export let direction: "row"|"column" = "column"

</script>
<!-- 
	@component Card

	Card that contains content

	Props:
	- direction ("row"|"column"): Sets the direction of the Card's contents 

	Slots:
	- default: Sets the content of the card
	- image: Sets a header image for the card

	CSS Variables:
	- cardBg(default:#f0f0f0): Sets the card's background color
	- borderRadius(default:0.5rem): Sets the border radius of the card
	- cardMargin(default:1rem): Sets the margin for the card
 -->
<CardImpl bind:direction>
	<slot name="image" slot="image"/>
	<slot/>
</CardImpl>