<script lang="ts">
	import { fade } from "svelte/transition";


	/**
	 * controls the visibility of the backdrop
	 */
	export let show=false;
</script>
<!-- 
	@component Backdrop

	Used to project a colored background over the screen
		
	Props:
	- show(boolean): controls the visibility of the backdrop

	CSS variables:
	- backdropColor(default: #000000): controls the color of the backdrop
	
 -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if show}
	<div transition:fade|global="{{duration:300}}" on:click class:show={show}></div>
{/if}
<style lang="scss">
	div {
		position: fixed;
		top:0px;
		left:0px;

		width: 100vw;
		height: 100vh;

		display: block;

		background-color: var(--backdropColor, #000000);
		opacity: 0;

		transition: opacity ease-in-out 0.2s;
		
		pointer-events: none;
		
		&.show{
			opacity: 0.7;
			pointer-events: unset;
		}
	}

</style>