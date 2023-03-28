<script context="module" lang="ts">
	export const currentHref = writable()
</script>
<script lang="ts">
	import { getContext, onMount } from "svelte";
	import { writable, type Writable } from "svelte/store";

	/**
	 * Native <a> element
	 */
	export let htmlElement:HTMLAnchorElement|null=null

	/**
	 * href for the link
	 */
	export let href:string;

	/**
	 *  allows wrapping when true
	 */
	export let multiline = false;

	/**
	 * controls whether the sidebar containing it will be closed when the link is clicked
	 */
	export let closeOnClick = true;

	const sidebarContext:{[key:string]:Writable<boolean>}= getContext("sidebar")
	const sidebarStore = sidebarContext["show"]

	const onClick = () => {
		
		if (closeOnClick){
			sidebarStore.update(_=>false)
			setTimeout(()=>{$currentHref = window.location.href}, 100)
			setTimeout(()=>{$currentHref = window.location.href}, 500)
		}
	}

	onMount(()=>{
		$currentHref = window.location.href
	})

	let currentPage=false;
	$: currentPage=$currentHref === htmlElement?.href

</script>
<!-- 
	@component SidebarLink
	
	Props:
	- htmlElement (HTMLAnchorElement|null): Native `<a>` element
	- href (string): href for the link
	- multiline (boolean): allows wrapping when true
	- closeOnClick (boolean): controls whether the sidebar containing it will be closed when the link is clicked

	Slots:
	- default: text to be displayed in the the link

	Css Variables:
	- sidebarCurrent (default:#bf5383): Color of text and indicator when on the page matched by href
	- sidebarLinkFont (default:  600 0.875rem sans-serif): Font for the link
	- sidebarLinkText (default: #161616): Color for the link text
	- sidebarLinkBgFocus (default: #c0c0c0): Bacground color of the link when focused
	- sidebarLinkTextFocus (default: #161616): Text color for the link text when focused
	
 -->
<svelte:window on:popstate={(event)=>{console.log(event.state);$currentHref = window.location.href}} on:hashchange={(event)=>{console.log(event);$currentHref = window.location.href}}></svelte:window>
<a on:click={onClick} bind:this={htmlElement} href={href} class:currentPage>
	<div class="indicator" class:show={currentPage}></div>
	<span class:currentPage class:multiline><slot></slot></span>
</a>
<style lang="scss">

	.indicator {
		width: 0.3rem;
		height: 0.3rem;
		display: none;
		background-color: var(--sidebarCurrent, #bf5383);
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
			color: var(--sidebarCurrent, #bf5383);
		}
	}

</style>