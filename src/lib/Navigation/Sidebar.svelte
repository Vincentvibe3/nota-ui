<script lang="ts">
	import Backdrop from "../Other/Backdrop.svelte";

	export let show:boolean=true;

	const close = () => {
		show=false
	}

</script>

<div id={$$restProps.id} class="wrapper">
	<Backdrop on:click={close} bind:show={show} style="z-index:inherit;"></Backdrop>
	<div style={$$restProps.style} class:content={true} class={$$restProps.class} class:show={show}>
		<button on:click={close} class="close">
			<div style="height: 40%; width:auto; margin:0rem; margin-right:1rem;">
				<svg style="height:100%; width:auto;" xmlns="http://www.w3.org/2000/svg" width="192" height="192"  viewBox="0 0 256 256"><rect width="256" height="256" fill="none" stroke="none"></rect><line x1="200" y1="56" x2="56" y2="200"  stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="200" y1="200" x2="56" y2="56"  stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
			</div>
			Close
		</button>
		<slot></slot>
	</div>
</div>


<style>

	.close{
		position: sticky;
		top:0px;
		width: 100%;
		height: 3.5rem;
		border:none;
		background-color: var(--sidebarCloseBg, #303030);
		font:var(--sidebarCloseFont, 600 0.875rem sans-serif);
		color: var(--sidebarCloseText, #fafafa);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
		padding-left: 1rem;
		transition: all ease-in-out 0.2s;
		cursor: pointer;
		z-index: 2;
		transition: all ease-in-out 0.2s;
	}

	.close:hover{
		background-color: var(--sidebarCloseBgFocus, #161616);
		color: var(--sidebarCloseTextFocus, #fafafa);
	}

	.wrapper {
		z-index: 3;
	}

	.content {
		position: fixed;
		top: 0px;
		left:0px;
		width:20rem;
		height: 100vh;
		z-index: inherit;
		background-color: var(--sidebarBg, #f0f0f0);
		transform: translateX(-100%);
		transition: all ease 0.2s;
		overflow-y: scroll;
	}

	.content.show{
		transform: translateX(0%);
	}

	.close:hover svg {
		fill: var(--sidebarCloseIconFocus, #fafafa);
		stroke: var(--sidebarCloseIconFocus, #fafafa);
	}

	svg {
		transition: all ease-in-out 0.2s;
		fill: var(--sidebarCloseIcon, #fafafa);
		stroke: var(--sidebarCloseIcon, #fafafa);
	}
</style>