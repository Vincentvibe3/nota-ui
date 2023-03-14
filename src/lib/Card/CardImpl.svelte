<script lang="ts">
	import ContentContainer from "../Layout/ContentContainer.svelte";

	export let direction: "row"|"column" = "column"
	export let highlightable = false
	export let tag:"button"|"div"|"a"="div"
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
<svelte:element {...anchorConfig} on:click this={tag} class="bg" class:highlightable>
	<div class="image-wrapper">
		<slot name="image"></slot>
	</div>
	<ContentContainer --margin="1.5rem" direction={direction}>
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
		display:block;
		text-decoration: none;
		color: inherit;
	}
	
	.bg {
		position: relative;
		background-color: var(--cardBg, #f0f0f0);
		border-radius: 0.5rem;
		margin: var(--cardMargin, 1rem);
		border: 0px;
		padding: 0px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
		

		.image-wrapper :global( img ){
			width:100%;
			object-fit: cover;
			border-radius: 0.5rem;
		}
	}
</style>