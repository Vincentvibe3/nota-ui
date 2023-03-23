<script lang="ts">
	import CardImpl from "./CardImpl.svelte";
	import type { ReferrerPolicy } from "../Text";

	/**
	 * href attribute of an <a> tag
	*/
	export let href:string
	/**
	 * target  attribute of an <a> tag
	 */
	export let target:string|undefined = undefined

	/**
	 * rel attribute of an <a> tag
	 */
	export let rel:string|undefined = undefined

	/**
	 * referrerpolicy attribute of an <a> tag
	 */
	export let referrerpolicy: ReferrerPolicy
		= ""

	/**
	 * ping attribute of an <a> tag
	 */
	export let ping:string|undefined = undefined

	/**
	 * hreflang attribute of an <a> tag
	 */
	export let hreflang:string|undefined = undefined

	/**
	 * download attribute of an <a> tag
	 */
	export let download:string|undefined = undefined

	/**
	 * Sets the direction of the Card's contents
	*/
	export let direction:"row"|"column" = "column"
	
</script>
<!-- 
	@component CardLink

	Card that contains content and that can be used as an anchor(`<a>`)
	Do not nest an `<a>` tag or a <Link> component in the CardLink

	Props:
	- direction ("row"|"column"): Sets the direction of the Card's contents 
	- href (string): href property of an `<a>` tag
	- target (string|undefined): target property of an `<a>` tag
	- rel (string|undefined): rel property of an `<a>` tag
	- referrerpolicy (ReferrerPolicy): referrerpolicy property of an `<a>` tag
	- ping (string|undefined): ping property of an `<a>` tag
	- hreflang (string|undefined): hreflang property of an `<a>` tag
	- download (string|undefined): download property of an `<a>` tag


	Slots:
	- default: Sets the content of the card
	- image: Sets a header image for the card

	CSS Variables:
	- cardBg(default:#f0f0f0): Sets the card's background color
	- cardBgFocus(default:#c0c0c0): Sets the card's background color on hover/focus
	- borderRadius(default:0.5rem): Sets the border radius of the card
	- cardMargin(default:1rem): Sets the margin for the card
 -->
<CardImpl anchorConfig={{
	href:href,
	target:target,
	rel:rel,
	referrerpolicy:referrerpolicy,
	ping:ping,
	hreflang:hreflang,
	download:download}} 
	bind:direction
	highlightable tag="a">
		<slot name="image" slot="image" />
		<slot/>
</CardImpl>
