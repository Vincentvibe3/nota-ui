<script lang="ts">
	import Card from "$lib/Card/Card.svelte";
	import { ContentContainer } from "$lib/Layout";
	import { fly } from "svelte/transition";
	import {Backdrop} from "../Backdrop";
	import { dismissModal } from "./ModalController.svelte";

	export let open=false;
	export let strict=false;

	const checkEsc = (event:KeyboardEvent)=>{
		if (event.key=="Escape"&&!strict){
			dismissModal()
		}
	}

</script>
<svelte:window on:keyup={checkEsc}></svelte:window>
<div class="wrapper" class:show={open}>
	<Backdrop 
		show={open} 
		on:click={()=> {if (!strict) {dismissModal()}}}>
	</Backdrop>
	{#if open}
		<div transition:fly="{{ y: 100, duration: 500 }}" class="cardWrapper">
			<Card --cardBg="var(--modalBg)" --contentContainerGap="0rem" direction="column">
				{#if !strict}
					<ContentContainer --contentContainerPaddingx="0rem" --contentContainerPaddingy="0rem" reverse direction="row">
						<button class="closeButton" on:click={dismissModal}>
							<!-- Icon from Phosphor Icons (https://phosphoricons.com/) licensed under an MIT license -->
							<svg style="height:1rem; width:auto;" xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 256 256"><rect width="256" height="256" stroke="none" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="200" y1="200" x2="56" y2="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
							<span>Close</span>
						</button>
					</ContentContainer>
				{/if}
				<ContentContainer --contentContainerPaddingx="0rem" --contentContainerPaddingy="0rem" fillWidth direction="column">
					<h4><slot name="title"></slot></h4>
					<slot></slot>
				</ContentContainer>
			</Card>
		</div>
	{/if}
</div>

<style lang="scss">

	.cardWrapper{
		// To adjust size and fix stacking context
		position: absolute;
		width: 50%;
		min-width: 300px;
		margin-top: 0.5rem;
		margin-left: 0.5rem;
		font:var(--modalFont, 400 1rem sans-serif);
		color:var(--modalText, #161616)
	}

	.closeButton {
		width: fit-content;
		height: 2rem;

		display: flex;
		align-items: center;
		justify-content: start;
		align-self: flex-end;
		
		padding: 00.5rem;

		font: var(--modalCloseFont, 400 0.75rem sans-serif);
		color: var(--modalCloseText,#161616);
		background-color: transparent;

		border: none;
		border-radius: var(--borderRadius, 0.2rem);

		transition: all ease-in-out 0.2s;

		cursor: pointer;

		svg{
			fill:var(--modalCloseText,#161616);
			stroke:var(--modalCloseText,#161616);
		}

		&:hover span::after{
			width:100%;
		}

		& span::after{
			position: relative;
			display: block;
			content: "";
			width:0%;
			border-bottom: var(--modalCloseText,#161616) 00.1rem solid;
			transition: all ease-in-out 0.2s;
		}
	}

	h4 {
		margin: 0px;
		color:var(--modalTitleText, #161616);
		font:var(--modalTitleFont, 300 1.25rem sans-serif);	
	}

	.wrapper {
		position: fixed;
		top:0px;
		left:0px;
		z-index: 3;

		width: 100vw;
		height: 100vh;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		overflow: scroll;

		opacity: 0;

		pointer-events: none;
		
		transition: all ease-in-out 0.2s;
		

		&.show {
			opacity: 1;
			pointer-events: unset;
		}
	}

</style>