<script lang="ts">
	import { getStores } from "$app/stores";
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";

	export let htmlElement:HTMLAnchorElement|null=null
	export let href:string;
	export let multiline = false;
	export let closeOnClick = true;

	const {page} = getStores()

	const sidebarContext:{[key:string]:Writable<boolean>}= getContext("sidebar")
	const sidebarStore = sidebarContext["show"]

	const onClick = () => {

		if (closeOnClick){
			sidebarStore.update(_=>false)
		}
	}

	let currentPage=false;
	$: currentPage=$page.url.href==htmlElement?.href

</script>
<a on:click={onClick} bind:this={htmlElement} href={href}>
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
		width: calc(100% - 5rem);
		height: fit-content;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;

		margin: 0rem 1rem 1rem 1rem;
		padding: 1rem;
		
		background-color: var(--sidebarLinkBg, #f0f0f0);
		
		border-radius: var(--borderRadius);

		font: var(--sidebarLinkFont, 400 1rem sans-serif);
		text-decoration: none;
		color: var(--sidebarLinkText, #161616);
		
		transition: all ease-in-out 0.2s;

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
	}

</style>