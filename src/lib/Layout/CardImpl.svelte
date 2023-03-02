<script lang="ts">
	import ContentContainer from "./ContentContainer.svelte";

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
	export let margin:string
</script>
<!-- Do not insert another anchor in if tag is <a> it will break -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<svelte:element {...anchorConfig} style:margin on:click this={tag} class="bg" class:highlightable>
	<slot name="image"></slot>
		<ContentContainer --margin="1.5rem" direction={direction}>
			<slot></slot>
		</ContentContainer>
</svelte:element>

<style lang="scss">

	.highlightable {
		transition: all 0.2s ease-in-out;
		cursor: pointer;

		&:hover{
			background-color: var(--n400);
		}
	}

	a.bg{
		display:block;
		text-decoration: none;
		color: inherit;
	}
	
	.bg {
		background-color: var(--n300);
		border-radius: 0.5rem;
		margin: var(--cardMargin, 1rem);
		border: 0px;
		padding: 0px;
		width: calc(100% - var(--cardMargin, 1rem));
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
		

		:global( img ){
			width:100%;
			object-fit: cover;
			border-radius: 0.5rem;
		}
	}
</style>