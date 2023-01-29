<script lang="ts">
	import Searchbar from "$lib/Input/Searchbar.svelte";
	import Navbar from "$lib/Navigation/Navbar.svelte";
	import Sidebar from "$lib/Navigation/Sidebar.svelte";
	import SidebarLink from "$lib/Navigation/SidebarLink.svelte";
	import SidebarSlot from "$lib/Navigation/SidebarSlot.svelte";
	import Button from "$lib/Other/Button.svelte";
	import { sidebarState } from "$lib/stores";
	import { writable } from "svelte/store";

	let button: HTMLButtonElement;
	let searchText = '';
	let searchSuggestAll: string[] = ['abc', 'def', 'abd', 'dec', "a", "add", "assdf", "avsdfksdfjgjdfaf", "aajhagfjhagsfjgajsfgajhfjasgfhjgasfj", "addaf", "aasdafafasf"];
	let searchSuggest: string[] = [];
	let openSidebar=false;
	let modalOpen=false;

	$:sidebarState.update(_=>openSidebar)
	$:openSidebar=$sidebarState


	const searchInput = (event: any) => {
		searchSuggest = searchSuggestAll.filter((value) => value.startsWith(event.detail.text));
	};

	const clearInput2 = () => {
		searchText = '';
	};

	const toggleSidebar = () =>{
		openSidebar=!openSidebar
	}

</script>
<svelte:head>
	{#if import.meta.env.DEV}
		<link rel="stylesheet" href="/src/global.css">
	{/if}
</svelte:head>
<Sidebar bind:show={openSidebar}>
	<SidebarSlot>
		<div style="width:100%; display:flex;flex-direction:row;align-items:center;justify-content:start;">
			<span><b>Preset Entries</b></span>
		</div>
	</SidebarSlot>
	<SidebarLink href="/">Home</SidebarLink>
	<SidebarLink href="#search">Search</SidebarLink>
	<SidebarLink href="/components">Components</SidebarLink>
	<SidebarLink href="/typography">Typography</SidebarLink>
	<SidebarLink href="/color">Color</SidebarLink>
	<SidebarLink href="/hero">Hero</SidebarLink>
	<SidebarSlot>
		<div style="width:100%; display:flex;flex-direction:row;align-items:center;justify-content:start;">
			<span><b>Dynamic Entries</b></span>
		</div>
	</SidebarSlot>
	{#each [...Array(5).keys()] as i}
		<SidebarLink href="/page_{i}">Page {i}</SidebarLink>
	{/each}
	<SidebarLink href="#multi" multiline>multiline aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa b</SidebarLink>
	<SidebarLink href="#a">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa b</SidebarLink>
	<SidebarSlot>
		<div style="width:100%; display:flex;flex-direction:row;align-items:center;justify-content:start;">
			<span><b>Extra slot</b></span>
		</div>
	</SidebarSlot>
	<SidebarSlot>
		<p>This is a container in the sidebar</p>
		<Button on:click={()=>{
			modalOpen=!modalOpen
		}}>Hello World</Button>
		<Searchbar
			on:submit={() => {
				alert(`submitted ${searchText}`);
			}}
			style="margin-top:1rem;"
			on:iconRightClick={clearInput2} 
			bind:text={searchText}
			on:input={searchInput}
			placeholder="Search"
			bind:suggestions={searchSuggest}>
			<svg slot="iconleft" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><circle cx="116" cy="116" r="84" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
			<svg slot="iconright" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><line x1="200" y1="56" x2="56" y2="200" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><line x1="200" y1="200" x2="56" y2="56" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
		</Searchbar>
	</SidebarSlot>
	
</Sidebar>
<slot></slot>