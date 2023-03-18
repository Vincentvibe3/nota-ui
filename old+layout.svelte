<script lang="ts">
	import {ContentContainer, Link, Navbar, Scaffold, Searchbar, type SearchInputEvent} from "$lib";
	import Sidebar from "$lib/Navigation/Sidebar.svelte";
	import SidebarLink from "$lib/Navigation/SidebarLink.svelte";
	import SidebarSlot from "$lib/Navigation/SidebarSlot.svelte";
	import { writable } from "svelte/store";
	import Button from "$lib/Button/Button.svelte";
	import { isNavTransparent } from "./src/routes/stores";
	import IconButton from "$lib/Button/IconButton.svelte";
	import IconLink from "$lib/Links/IconLink.svelte";
	
	const sidebarState = writable(false)

	let searchText = '';
	let searchSuggestAll: string[] = ['abc', 'def', 'abd', 'dec', "a", "add", "assdf", "avsdfksdfjgjdfaf", "aajhagfjhagsfjgajsfgajhfjasgfhjgasfj", "addaf", "aasdafafasf"];
	let searchSuggest: string[] = [];
	let openSidebar=false;
	let modalOpen=false;

	$:sidebarState.update(_=>openSidebar)
	$:openSidebar=$sidebarState


	const searchInput = (event: CustomEvent<SearchInputEvent>) => {
		searchSuggest = searchSuggestAll.filter((value) => value.startsWith(event.detail.text));
	};

	const clearInput2 = () => {
		searchText = '';
	};

	const toggleSidebar = () =>{
		$sidebarState = !$sidebarState
	}
</script>
<Sidebar fixed={true} bind:show={openSidebar}>
	<SidebarSlot>
		<div style="width:100%; display:flex;flex-direction:row;align-items:center;justify-content:start;">
			<!-- <span><b>Preset Entries</b></span> -->
		</div>
	</SidebarSlot>
	<SidebarLink href="/">Home</SidebarLink>
	<SidebarLink href="#search">Search</SidebarLink>
	<SidebarLink href="/components">Components</SidebarLink>
	<SidebarLink href="/typography">Typography</SidebarLink>
	<SidebarLink href="/color">Color</SidebarLink>
	<SidebarLink href="/hero">Hero</SidebarLink>
</Sidebar>
<Navbar on:onTitleClick={toggleSidebar} reverse alwaysOpaque={!$isNavTransparent}>
	<!-- Icon from Phosphor Icons (https://phosphoricons.com/) licensed under an MIT license -->
	<svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 256 256"><rect width="256" height="256" stroke="none" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="40" y1="64" x2="216" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="40" y1="192" x2="216" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
	<svelte:fragment slot="title">Nota-ui</svelte:fragment>
	<IconLink href="https://github.com/Vincentvibe3/nota-ui">
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path></svg>
	</IconLink>
</Navbar>
<slot></slot>
