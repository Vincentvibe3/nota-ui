<script lang="ts">
	import { onMount } from "svelte";

	export let htmlElement:HTMLAnchorElement|null=null
	export let href:string;
	export let multiline:boolean = false;
	let currentPage=false;
	onMount(()=>{
		currentPage=document.location.href==htmlElement?.href
		window.addEventListener("hashchange", (e:HashChangeEvent)=>{
			currentPage=document.location.href==htmlElement?.href
		})
	})
</script>
<a id={$$restProps.id} style={$$restProps.style} class={$$restProps.class} bind:this={htmlElement} href={href}>
	<span class:currentPage class:multiline><slot></slot></span>
</a>
<style>
	a{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
		padding: 1rem;
		height: fit-content;
		background-color: var(--sidebarLinkBg, #f0f0f0);
		width: calc(100% - 2rem);
		border-bottom: var(--sidebarLinkBorderBottom, #c0c0c0) solid 0.1rem;
		text-decoration: none;
		color: var(--sidebarLinkText, #161616);
		font: var(--sidebarLinkFont, 400 1rem sans-serif);
		transition: all ease-in-out 0.2s;
	} 

	span{
		height: 100%;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		padding-bottom: 00.2rem;
	}

	span.multiline{
		white-space:normal;
	}

	span.currentPage::after{
		width: 100%;
	}

	span::after{
		position: relative;
		top: 0.2rem;
		display: block;
		content: "";
		width:0.6rem;
		border-bottom: var(--sidebarLinkText, #161616) 00.1rem solid;
		transition: all ease-in-out 0.2s;
	}

	a:hover span::after{
		border-color: var(--sidebarLinkTextFocus, #161616);
	}

	a:hover {
		color: var(--sidebarLinkTextFocus, #161616);
		background-color: var(--sidebarLinkBgFocus, #c0c0c0);
		border-bottom: var(--sidebarLinkBorderBottomFocus, #909090) solid 0.1rem;
	}
</style>