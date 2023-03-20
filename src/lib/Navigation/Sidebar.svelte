<script lang="ts">
	import { onMount, setContext } from "svelte";
	import { writable } from "svelte/store";
	import {Backdrop} from "../Backdrop";
	import { fade, slide } from "svelte/transition";
	import { ContentContainer } from "$lib/Layout";

	export let show=false;

	let sidebar:HTMLButtonElement;

	const showStore = writable(show)

	let desktop = false

	onMount(()=>{
		let query = window.matchMedia("(min-width: 1000px)")
		query.addEventListener("change", (query)=>{
			desktop = query.matches
			show=false
		})
		desktop = query.matches
	})

	$:showStore.update(_=>show)
	$:show = $showStore

	$:if (show){
		sidebar?.focus()
	}

	setContext("sidebar",{
		show:showStore
	})

	const close = () => {
		show=false
	}

</script>
{#if show &&!desktop}
<div class="backdropWrapper">
	<Backdrop show={show&&!desktop} on:click={close}/>
</div>
{/if}
<div class:sidebar={true} class:show={$showStore||desktop}>
	{#if !desktop}
		<button out:fade="{{duration:300}}" bind:this={sidebar} on:click={close} class="close" disabled={!show}>
			<div style="height: 40%; width:auto; margin:0rem; margin-right:1rem;">
				<!-- Icon from Phosphor Icons (https://phosphoricons.com/) licensed under an MIT license -->
				<svg style="height:100%; width:auto;" xmlns="http://www.w3.org/2000/svg" width="192" height="192"  viewBox="0 0 256 256"><rect width="256" height="256" fill="none" stroke="none"></rect><line x1="200" y1="56" x2="56" y2="200"  stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="200" y1="200" x2="56" y2="56"  stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
			</div>
			Close
		</button>
	{/if}
	<div class="content" class:desktop>
		<ContentContainer --contentContainerGap="0.25rem" --contentContainerPaddingx="1rem"  direction="column">
			<slot></slot>
		</ContentContainer>
	</div>
</div>


<style lang="scss">

	.close{
		position: sticky;
		top:0px;

		width: 100%;
		height: 3.5rem;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;

		padding-left: 1rem;

		z-index: 4;

		border:none;

		font:var(--sidebarCloseFont, 600 0.875rem sans-serif);
		color: var(--sidebarCloseText, #fafafa);

		background-color: var(--sidebarCloseBg, #303030);

		transition: all ease-in-out 0.2s;

		cursor: pointer;

		transition: all ease-in-out 0.2s;

		&:hover{
			background-color: var(--sidebarCloseBgFocus, #161616);
			color: var(--sidebarCloseTextFocus, #fafafa);

			svg {
				fill: var(--sidebarCloseIconFocus, #fafafa);
				stroke: var(--sidebarCloseIconFocus, #fafafa);
			}
		}

		svg {
			fill: var(--sidebarCloseIcon, #fafafa);
			stroke: var(--sidebarCloseIcon, #fafafa);
			transition: all ease-in-out 0.2s;
		}
	}

	.sidebar{
		position: fixed;
		z-index: 3;
		left:-20rem;
	}

	.backdropWrapper{
		position: fixed;
		z-index: 2;
	}
	
	@media only screen and (min-width: 1000px) {
		.sidebar {
			z-index: unset;
			min-width:20rem;
			height: 100%;
			flex: 0 0 20rem;
			left:0rem;

			.content {
				padding-top: 4.5rem;
			}
		}

		.close {
			display: none;
		}

	} 

	.sidebar {
		top:0rem;
		width:20rem;
		height: 100vh;

		display: flex;
		align-items: center;
		justify-content: start;
		flex-direction: column;
		
		overflow-y: scroll;

		background-color: var(--sidebarBg, #f0f0f0);
		
		transition: all ease 0.2s;

		gap: 1rem;

		&.show{
			left:0rem;
		}

		.content {
			width:100%;
			background-color: var(--sidebarBg, #f0f0f0);
			overflow-y: scroll;

		}

	}

</style>