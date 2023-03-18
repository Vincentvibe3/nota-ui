<script context="module" lang="ts">
	export const currentHref = writable()
</script>
<script lang="ts">
	import { getContext, onMount } from "svelte";
	import { writable, type Writable } from "svelte/store";

	export let htmlElement:HTMLAnchorElement|null=null
	export let href:string;
	export let multiline = false;
	export let closeOnClick = true;

	const sidebarContext:{[key:string]:Writable<boolean>}= getContext("sidebar")
	const sidebarStore = sidebarContext["show"]

	const onClick = () => {
		
		if (closeOnClick){
			sidebarStore.update(_=>false)
			// currentHref = window.location.href
			setTimeout(()=>{$currentHref = window.location.href}, 100)
		}
	}

	onMount(()=>{
		$currentHref = window.location.href
	})

	let currentPage=false;
	$: currentPage=$currentHref === htmlElement?.href

</script>
<!-- <svelte:window on:click={(_)=>{console.log("hash vhanges");currentHref = window.location.href}}></svelte:window> -->
<a on:click={onClick} bind:this={htmlElement} href={href} class:currentPage>
	<div class="indicator" class:show={currentPage}></div>
	<span class:currentPage class:multiline><slot></slot></span>
</a>
<style lang="scss">

	.indicator {
		width: 0.3rem;
		height: 0.3rem;
		display: none;
		background-color: var(--p600);
		border-radius: 1rem;
		margin-right: 0.5rem;
	}

	.show {
		display: block;
	}

	a{
		width: 100%;
		height: fit-content;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;

		padding: 0.75rem;
		margin: 0px;

		box-sizing: border-box;
	
		
		border-radius: var(--borderRadius);

		font: var(--sidebarLinkFont, 600 0.875rem sans-serif);
		text-decoration: none;
		color: var(--sidebarLinkText, #161616);
		
		transition: all ease-in-out 0.2s;

		&.currentPage{
			background-color: var(--sidebarLinkBgFocus, #c0c0c0);
		}

		&:hover {
			color: var(--sidebarLinkTextFocus, #161616);
			background-color: var(--sidebarLinkBgFocus, #c0c0c0);
		}
	} 

	span{
		height: 100%;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		
		&.multiline{
			white-space:normal;
		}

		&.currentPage {
			color: var(--p600);
		}
	}

</style>