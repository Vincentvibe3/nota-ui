<script lang="ts">
	import { setContext } from "svelte";
	import { writable } from "svelte/store";
	import Backdrop from "../Other/Backdrop.svelte";
	import { fade } from "svelte/transition";

	export let show=true;

	let sidebar:HTMLButtonElement;

	const showStore = writable(show)

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

<div id={$$restProps.id} class="wrapper" class:show={show}>
	<Backdrop on:click={close} bind:show={$showStore} style="z-index:inherit;"></Backdrop>
	<div style={$$restProps.style} class:sidebar={true}  class={$$restProps.class} class:show={$showStore}>
		{#if show}
			<button out:fade="{{duration:300}}" bind:this={sidebar} on:click={close} class="close" disabled={!show}>
				<div style="height: 40%; width:auto; margin:0rem; margin-right:1rem;">
					<svg style="height:100%; width:auto;" xmlns="http://www.w3.org/2000/svg" width="192" height="192"  viewBox="0 0 256 256"><rect width="256" height="256" fill="none" stroke="none"></rect><line x1="200" y1="56" x2="56" y2="200"  stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="200" y1="200" x2="56" y2="56"  stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
				</div>
				Close
			</button>
			<div out:fade="{{duration:300}}" class="content">
				<slot></slot>
			</div>
		{/if}
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

	.wrapper {
		z-index: 4;
	}

	.sidebar {
		position: fixed;
		top: 0px;
		left:0px;

		width:20rem;
		height: 100vh;

		display: flex;
		align-items: center;
		justify-content: start;
		flex-direction: column;

		z-index: inherit;
		
		overflow-y: scroll;

		background-color: var(--sidebarBg, #f0f0f0);

		transform: translateX(-100%);
		
		transition: all ease 0.2s;

		.content {
			width:100%;
			background-color: var(--sidebarBg, #f0f0f0);
			overflow-y: scroll;
		}

		&.show{
			transform: translateX(0%);
		}
	}



</style>