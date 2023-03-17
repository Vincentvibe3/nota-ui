
<script lang="ts">
	import { Button } from "$lib/Button";
	import { ContentContainer } from "$lib/Layout";
	import { createEventDispatcher, onMount } from "svelte";
	let transparent = true;
	let show=true;
	let lastScrollPosition=0;
	export let alwaysOpaque=true;
	export let navStyle:"shadow"|"border" = "border"
	export let reverse= false

	const dispatch = createEventDispatcher<
		{onTitleClick:void}
	>();

	onMount(()=>{
		lastScrollPosition=window.scrollY
		window.addEventListener("scroll", (_)=>{
			if ((window.scrollY) === 0) {
        		// you're at the top of the page
				show=true
				transparent=true
    		} else {
				transparent=false
				show=lastScrollPosition>window.scrollY
			}
			lastScrollPosition=window.scrollY
		})
	})

	const onTitleClick = () => {
		dispatch("onTitleClick")
	}

</script>
<div class:bar={true} class:transparent={transparent&&!alwaysOpaque} class:show={show}>
	<div class:transparent={transparent&&!alwaysOpaque} class="bg" class:shadow={navStyle === "shadow"}></div>
	<ContentContainer direction="row">
		<button on:click={onTitleClick} class="titleWrapper">
			<div class="iconWrapper" class:iconOnly={!$$slots.default}>
				<slot name="icon"/>
			</div>
			<slot name="title"></slot>
		</button>
		<ContentContainer --contentContainerPaddingx="1rem" bind:reverse direction="row">
			<slot></slot>
		</ContentContainer>
	</ContentContainer>
</div>
<style lang="scss">

	button {
		width: fit-content;
		height: 100%;

		box-sizing: content-box;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap:1rem;		

		padding: 0 1.5rem;

		font: inherit;
		
		white-space: nowrap;

		color: inherit;
		background-color: transparent;
		border: none;

		cursor: pointer;

		transition: all ease-in-out 0.2s;

		&:hover{
			color: var(--navbarTextTitleHover, #f0f0f0);
			background-color: var(--navBgTitleHover, #161616);
		}

		&:hover :global( svg ) {
			fill: var(--navIconHover, #f0f0f0);
			stroke: var(--navIconHover, #f0f0f0);
		}
	}

	.iconWrapper{
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	
		& :global( svg ) {
			height: auto;
			width: 1.5rem;
			fill: var(--navIcon, #f0f0f0);
			stroke: var(--navIcon, #f0f0f0);
			transition: all ease-in-out 0.2s;
		}
		
	}

	.bar {
		position: fixed;

		width: 100vw;
		height: 3.5rem;

		top:0px;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;

		padding-right: 2rem;

		backdrop-filter: blur(10px);

		gap: 1rem;

		z-index: 3;

		color: var(--navText, #f0f0f0);

		transition: all ease 0.2s;

		font: var(--navFont, 400 1rem sans-serif);

		transform: translateY(-100%);

		&.transparent{
			backdrop-filter: unset;
			color: var(--navTextTransparent, #f0f0f0);
			
			.titleWrapper :global( svg ){
				fill: var(--navIconTransparent, #f0f0f0);
				stroke: var(--navIconTransparent, #f0f0f0)
			}
		}

		&.show, &:focus-visible, &:focus-within{
			transform: translateY(0%);
			transform: translateY(0%);
		}
	}

	.bg {
		position: fixed;

		width: 100%;
		height: 100%;

		background-color: var(--navBg, #b3386b);

		opacity: 0.8;

		z-index: -1;

		border-bottom: var(--n400) solid 0.1rem;

		box-sizing: border-box;

		transition: all ease 0.2s;

		&.shadow{
			border-bottom: none;
			box-shadow: #00000021 0.2rem 0.2rem 0.3rem;
		}

		transition: all ease 0.5s;

		&.transparent {
			border-bottom: transparent solid 0.1rem;
			background-color: transparent;
			box-shadow: none;
		}

	}

</style>