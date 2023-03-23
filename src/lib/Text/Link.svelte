<script lang="ts">
	import type { ReferrerPolicy } from ".";


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
	 * Controls the visibility of an arrow next to the link
	 */
	export let arrow = false;
</script>
<!-- 
	@component Link

	Equivalent to an <a> but allows placing an optional arrow icon to the right
	
	Props:
	- href (string): href property of an `<a>` tag
	- target (string|undefined): target property of an `<a>` tag
	- rel (string|undefined): rel property of an `<a>` tag
	- referrerpolicy (ReferrerPolicy): referrerpolicy property of an `<a>` tag
	- ping (string|undefined): ping property of an `<a>` tag
	- hreflang (string|undefined): hreflang property of an `<a>` tag
	- download (string|undefined): download property of an `<a>` tag
	- arrow (boolean): Controls the visibility of an arrow next to the link

	Slots:
	- default: icon for the link

	CSS Variables:
	- linkArrowBg (default:#99003b): Background of the circle around the arrow
	- linkArrowFg (default:#99003b): Arrow color
	- linkFg (default:#000000): Link Color
	- linkVisitedFg (default:#535ebf): Link Color when visited
	- linkFgFocus (default:#99003b): Link Color when hovered
	
 -->
<a 
	target={target}
	href={href}
	rel={rel}
	referrerpolicy={referrerpolicy}
	ping={ping}
	hreflang={hreflang}
	download={download}>
	<span><slot></slot></span>
	{#if arrow}
		<span class="arrowWrapper">
			<!-- Icon from Phosphor Icons (https://phosphoricons.com/) licensed under an MIT license -->
			<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 256 256"><rect width="256" height="256" stroke="none" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line><polyline points="144 56 216 128 144 200" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></polyline></svg>
		</span>
	{/if}
</a>
<style lang="scss">

	span {
		position: relative;
		width: inherit;
		height: inherit;
	}

	.arrowWrapper {
		height: 0.75em;
		
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		margin-left: 00.4rem;
		padding: 0.25em;

		background-color: var(--linkArrowBg, #99003b);
		border-radius: 5rem;

		aspect-ratio: 1;
		
		transition: all ease-in-out 0.2s;
	}

	svg {
		width: 100%;
		height: inherit;

		fill: var(--linkArrowFg, white);
		stroke: var(--linkArrowFg, white);
	}

	a {
		
		position: relative;

		width:fit-content;
		height: fit-content;

		display: inline-flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		text-decoration: none;

		padding-bottom: 00.1rem;
		
		font-weight: bold;
		color: var(--linkFg, #000000);

		span:not( .arrowWrapper )::after{
			position: absolute;
			bottom: 0rem;
			left: 0%;
			content: "";

			width: 100%;
			height:0.05rem;

			display: inline-block;

			background-color: var(--linkVisitedFg, #535ebf);
			
			transform: translateY(0.2rem);
		}

		&:hover span:not(.arrowWrapper)::after{
			background-color: var(--linkFgFocus, #99003b);
		}

		&:hover .arrowWrapper{
			transform: rotate(-45deg);
		}

		&:hover, &:visited:hover{
			color: var(--linkFgFocus, #99003b);
		}

		&:visited{
			color: var(--linkVisitedFg, #535ebf);
		}
	}
</style>