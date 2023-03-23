<script lang="ts">
	import CardImpl from "./CardImpl.svelte";
	/**
	 * Sets the direction of the Card's contents 
	 */
	export let direction: "row"|"column" = "column"
</script>
<!-- 
	@component CardButton

	Card that contains content and that can be used as a button

	Props:
	- direction ("row"|"column"): Sets the direction of the Card's contents 

	Slots:
	- default: Sets the content of the card
	- image: Sets a header image for the card

	Events:
	- click: Triggered when the card is clicked

	CSS Variables:
	- cardBg(default:#f0f0f0): Sets the card's background color
	- cardBgFocus(default:#c0c0c0): Sets the card's background color on hover/focus
	- borderRadius(default:0.5rem): Sets the border radius of the card
	- cardMargin(default:1rem): Sets the margin for the card
 -->
<CardImpl on:click bind:direction highlightable tag="button">
	<slot name="image" slot="image" />
	<slot/>
</CardImpl>