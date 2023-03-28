<script context="module" lang="ts">
	const showStore = writable(false)

	export const toggleSidebar = ()=>{
		showStore.update((current)=>{return !current})
	}
</script>
<script lang="ts">
	import { onMount, setContext } from "svelte";
	import { writable } from "svelte/store";
	import {Backdrop} from "../Backdrop";
	import { ContentContainer } from "$lib/Layout";

	let sidebar:HTMLButtonElement;

	let desktop = false

	onMount(()=>{
		let query = window.matchMedia("(min-width: 1000px)")
		query.addEventListener("change", (query)=>{
			desktop = query.matches
			$showStore = false
		})
		desktop = query.matches
	})

	$:if ($showStore){
		sidebar?.focus()
	}

	setContext("sidebar",{
		show:showStore
	})

	const close = () => {
		$showStore=false
	}

</script>
<!-- 
	@component Sidebar

	Sidebar component that is fixed on desktop sizes and collapses on smaller screen sizes
	Should contain SidebarLink and SidebarSlot components
	The sidebar can be shown or hidden on smaller viewports using the `toggleSidebar` function
	
	Slots:
	- default: Contains the content of the sidebar

	Css Variables:
	- sidebarCloseFont (default: 600 0.875rem sans-serif): Font used on the close button
	- sidebarCloseText (default: #fafafa)): Text color of the close button
	- sidebarCloseBg (default: #303030): Background color of the close button
	- sidebarCloseBgFocus (default: #161616): Background color of the close button when hovered
	- sidebarCloseTextFocus (default: #fafafa): Text color of the close button when hovered
	- sidebarCloseIconFocus (default: #fafafa): Icon color of the close button when hovered
	- sidebarCloseIcon (default: #fafafa): Icon color of the close button
	- sidebarBg (default: #f0f0f0): Background of the sidebar
	
 -->
{#if $showStore &&!desktop}
	<div class="backdropWrapper">
		<Backdrop show={$showStore&&!desktop} on:click={close}/>
	</div>
{/if}
<div class:sidebar={true} class:show={$showStore||desktop}>
	
		<button bind:this={sidebar} on:click={close} class="close" disabled={!$showStore}>
			<div style="height: 40%; width:auto; margin:0rem; margin-right:1rem;">
				<!-- Icon from Phosphor Icons (https://phosphoricons.com/) licensed under an MIT license -->
				<svg style="height:100%; width:auto;" xmlns="http://www.w3.org/2000/svg" width="192" height="192"  viewBox="0 0 256 256"><rect width="256" height="256" fill="none" stroke="none"></rect><line x1="200" y1="56" x2="56" y2="200"  stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="200" y1="200" x2="56" y2="56"  stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
			</div>
			Close
		</button>
	
	<div class="content" class:desktop>
		<ContentContainer --contentContainerGap="0.25rem" --contentContainerPaddingx="1rem" --contentContainerPaddingy="0.2rem" direction="column">
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

		border:none;

		font:var(--sidebarCloseFont, 600 0.875rem sans-serif);
		color: var(--sidebarCloseText, #fafafa);

		background-color: var(--sidebarCloseBg, #303030);

		transition: all ease-in-out 0.2s, display ease-in-out 0.2s 0.2s;

		cursor: pointer;

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

	.backdropWrapper{
		position: fixed;
		z-index: 2;
	}

	.sidebar {
		position: fixed;
		z-index: 3;
		top:0rem;
		width:17.5rem;
		height: 100vh;

		display: flex;
		align-items: center;
		justify-content: start;
		flex-direction: column;
		flex-shrink: 0;
		
		overflow-y: scroll;

		background-color: var(--sidebarBg, #f0f0f0);
		
		transition: all ease 0.2s;

		gap: 1rem;

		transform: translate(-100%);

		&.show{
			transform: translate(0%);
		}

		.content {
			width:100%;
			background-color: var(--sidebarBg, #f0f0f0);
			overflow-y: scroll;

		}

	}

	@media only screen and (min-width: 1000px) {
		.sidebar {
			position:relative;
			z-index: unset;
			left:0rem;
			transform: none;

			&.show {
				transform: none;
			}

			.content {
				padding-top: 4.5rem;
			}
		}

		.close {
			display: none;
		}

	} 

</style>