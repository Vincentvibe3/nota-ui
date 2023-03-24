<script lang="ts">
	import type { ReferrerPolicy } from "$lib/Text";


	/**
	 * href attribute of an <a> tag
	*/
	export let href:string;

	/**
	 * target attribute of an <a> tag
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
</script>
<!-- 
	@component IconLink

	Equivalent to an <a> or <Link> but uses an icon instead of text
	
	Props:
	- href (string): href property of an `<a>` tag
	- target (string|undefined): target property of an `<a>` tag
	- rel (string|undefined): rel property of an `<a>` tag
	- referrerpolicy (ReferrerPolicy): referrerpolicy property of an `<a>` tag
	- ping (string|undefined): ping property of an `<a>` tag
	- hreflang (string|undefined): hreflang property of an `<a>` tag
	- download (string|undefined): download property of an `<a>` tag

	Slots:
	- default: icon for the link

	CSS Variables:
	- iconLinkStroke (default:#161616): Icon color
	- iconLinkFill (default:#161616): Icon color
	- iconLinkStrokeFocus (default:#c0c0c0): Icon color when hovered
	- iconLinkFillFocus (default:#c0c0c0): Icon color when hovered
	
 -->
<a target={target}
	href={href}
	rel={rel}
	referrerpolicy={referrerpolicy}
	ping={ping}
	hreflang={hreflang}
	download={download}
	class="wrapper">
	<slot></slot>
</a>
<style lang="scss">
	.wrapper {
		height: 1rem;
		aspect-ratio: 1;
		padding: 0.5rem;
		background-color: transparent;
		border-radius: 50%;
		cursor: pointer;

		&:hover :global( svg ) {
			stroke: var(--iconLinkStrokeFocus, #c0c0c0);
			fill: var(--iconLinkFillFocus, #c0c0c0);
		}

		& :global( svg ){
			height: auto;
			width: 100%;
			stroke: var(--iconLinkStroke, #161616);
			fill: var(--iconLinkFill, #161616);
			transition: all ease-in-out 0.2s;
		}
	}
</style>