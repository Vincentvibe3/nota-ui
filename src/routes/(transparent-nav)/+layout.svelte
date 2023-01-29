<script lang="ts">
	import Searchbar from "$lib/Input/Searchbar.svelte";
	import Navbar from "$lib/Navigation/Navbar.svelte";
	import Sidebar from "$lib/Navigation/Sidebar.svelte";
	import SidebarLink from "$lib/Navigation/SidebarLink.svelte";
	import SidebarSlot from "$lib/Navigation/SidebarSlot.svelte";
	import Button from "$lib/Other/Button.svelte";
	import { sidebarState } from "$lib/stores";


	let button: HTMLButtonElement;
	let searchText = '';
	let searchSuggestAll: string[] = ['abc', 'def', 'abd', 'dec', "a", "add", "assdf", "avsdfksdfjgjdfaf", "aajhagfjhagsfjgajsfgajhfjasgfhjgasfj", "addaf", "aasdafafasf"];
	let searchSuggest: string[] = [];
	let openSidebar=false;
	let modalOpen=false;


	const searchInput = (event: any) => {
		searchSuggest = searchSuggestAll.filter((value) => value.startsWith(event.detail.text));
	};

	const clearInput2 = () => {
		searchText = '';
	};

	const toggleSidebar = () =>{
		$sidebarState = !$sidebarState
	}

</script>
<Navbar on:onTitleClick={toggleSidebar} alwaysOpaque={false} style="top:0px; left:0px;">
	<div slot="icon" style="height: 40%; width:auto; margin:0rem; margin-right:1rem;">
		<svg style="height:100%; width:auto;" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="40" y1="64" x2="216" y2="64" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="40" y1="192" x2="216" y2="192" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
		<!-- <svg style="height:100%; width:auto;" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="96" y1="128" x2="160" y2="128" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="96" y1="160" x2="160" y2="160" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M56,40H200a8,8,0,0,1,8,8V200a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24V48A8,8,0,0,1,56,40Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="80" y1="24" x2="80" y2="56" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="128" y1="24" x2="128" y2="56" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="176" y1="24" x2="176" y2="56" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg> -->
	</div>
	<svelte:fragment slot="title">Nota-ui</svelte:fragment>
	<div style="margin:0rem 1.5rem 0rem 1rem; width:100%; display: flex; flex-direction:row; align-items:center; justify-content:space-between;">
		<Searchbar
			style="width:20rem;"
			on:submit={() => {
				alert(`submitted ${searchText}`);
			}}
			on:iconRightClick={clearInput2} 
			bind:text={searchText}
			on:input={searchInput}
			placeholder="Search"
			bind:suggestions={searchSuggest}>
			<svg slot="iconleft" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><circle cx="116" cy="116" r="84" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
			<svg slot="iconright" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><line x1="200" y1="56" x2="56" y2="200" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><line x1="200" y1="200" x2="56" y2="56" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
		</Searchbar>
		<Button style="height:2rem;" type="primary" bind:htmlElement={button}>
			Login
		</Button>
	</div>
</Navbar>
<div class="contentWrapper">
	<slot></slot>
</div>

<style>
	.contentWrapper {
		position: absolute;
		top:3.5rem;
		width: 100%;
		height: fit-content;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
</style>
