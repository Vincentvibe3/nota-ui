<script lang="ts">
	import { ContentContainer } from "$lib/Layout";
	
	/**
	 * Sets the direction of the Card's contents 
	 */
	export let direction: "row"|"column" = "column"

	/**
	 * Controls whether the card can be highlighted on hover
	 */
	export let highlightable = false

	/**
	 * Sets the tag necessary for the various Card variations
	 */
	export let tag:"button"|"div"|"a"="div"

	/** 
	 * Configures the <a> when it it a CardLink 
	 * */
	export let anchorConfig:{
		href:string,
		target:string|undefined,
		rel:string|undefined,
		referrerpolicy: "" | "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" ,
		ping:string|undefined,
		hreflang:string|undefined,
		download:string|undefined, 
	}|undefined = undefined
</script>
<!-- Do not insert another anchor in, if tag is <a> it will break -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- 
	@component CardImpl

	Implementation of the various card variants (Card, CardButton, CardLink)

	Props:
	- direction ("row"|"column"): Sets the direction of the Card's contents 
	- highlightable (boolean): Controls whether the card can be highlighted on hover
	- anchorConfig (AnchorConfig|undefined): Configures the `<a>` when it it a CardLink
	- tag ("button"|"div"|"a"): Sets the tag necessary for the various Card variations

	Slots:
	- default: Sets the content of the card
	- image: Sets a header image for the card

	CSS Variables:
	- cardBg(default:#f0f0f0): Sets the card's background color
	- cardBgFocus(default:#c0c0c0): Sets the card's background color on hover/focus
	- borderRadius(default:0.5rem): Sets the border radius of the card
	- cardMargin(default:1rem): Sets the margin for the card

 -->
<svelte:element {...anchorConfig} on:click this={tag} class="bg" class:highlightable>
	<div class="image-wrapper">
		<slot name="image"></slot>
	</div>
	<ContentContainer fillWidth --contentContainerPaddingx="1.5rem" --contentContainerPaddingy="1.5rem" direction={direction}>
		<slot></slot>
	</ContentContainer>
</svelte:element>

<style lang="scss">

	.highlightable {
		transition: all 0.2s ease-in-out;
		cursor: pointer;

		&:hover{
			background-color: var(--cardBgFocus, #c0c0c0);
		}
	}

	a.bg{
		display: block;
		text-decoration: none;
		color: inherit;
	}
	
	.bg {
		position: relative;
		background-color: var(--cardBg, #f0f0f0);
		border-radius: var(--borderRadius, 0.5rem);
		margin: var(--cardMargin, 0rem);
		border: 0px;
		padding: 0px;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
		text-align: start;

		.image-wrapper :global( img ){
			width:100%;
			object-fit: cover;
			border-radius: var(--borderRadius, 0.5rem);
		}
	}
</style>