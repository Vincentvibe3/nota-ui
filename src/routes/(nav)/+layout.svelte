<script>
	import { Sidebar, SidebarLink } from "$lib";
	import Footer from "$lib/Layout/Footer.svelte";
	import SiteLayout from "$lib/Layout/SiteLayout.svelte";
	import IconLink from "$lib/Links/IconLink.svelte";
	import ModalController from "$lib/Modal/ModalController.svelte";
	import Navbar from "$lib/Navigation/Navbar.svelte";
	import { toggleSidebar } from "$lib/Navigation/Sidebar.svelte";

</script>
<ModalController></ModalController>
<SiteLayout>
	<Navbar on:onTitleClick={toggleSidebar} slot="navbar" reverse>
		<!-- Icon from Phosphor Icons (https://phosphoricons.com/) licensed under an MIT license -->
		<svg slot="menuIcon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
		<svg slot="icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clip-path="url(#clip0_921_10)">
			<rect x="6.85" y="6.85" width="19.3" height="19.3" rx="1.15" fill="#F0F0F0" stroke="#C0C0C0" stroke-width="0.3"/>
			<path d="M13.952 20L11.527 13.945C11.5303 14.0217 11.537 14.15 11.547 14.33C11.5603 14.5067 11.5736 14.7183 11.587 14.965C11.6036 15.2083 11.617 15.4667 11.627 15.74C11.637 16.0133 11.642 16.2833 11.642 16.55V20H10.837V13.115H12.012L14.477 19.195C14.4736 19.0983 14.462 18.9217 14.442 18.665C14.422 18.405 14.4036 18.0917 14.387 17.725C14.3703 17.3583 14.362 16.97 14.362 16.56V13.115H15.167V20H13.952Z" fill="black"/>
			<path d="M19.9245 9.3675V11.2325C19.9245 11.4058 19.9603 11.5308 20.032 11.6075C20.1036 11.6842 20.2153 11.7225 20.367 11.7225C20.512 11.7225 20.6486 11.6817 20.777 11.6C20.907 11.5167 21.0078 11.4183 21.0795 11.305V9.3675H21.4995V12H21.142L21.107 11.645C21.0036 11.7783 20.8761 11.8808 20.7245 11.9525C20.5728 12.0225 20.4195 12.0575 20.2645 12.0575C20.0095 12.0575 19.8186 11.99 19.692 11.855C19.567 11.7183 19.5045 11.5275 19.5045 11.2825V9.3675H19.9245ZM23.835 9.3675V11.6675H24.5775V12H22.6025V11.6675H23.415V9.7H22.6275V9.3675H23.835ZM23.5 8.135C23.5933 8.135 23.6675 8.16333 23.7225 8.22C23.7792 8.27667 23.8075 8.34583 23.8075 8.4275C23.8075 8.5125 23.7792 8.58417 23.7225 8.6425C23.6675 8.69917 23.5933 8.7275 23.5 8.7275C23.4117 8.7275 23.3392 8.69917 23.2825 8.6425C23.2258 8.58417 23.1975 8.5125 23.1975 8.4275C23.1975 8.34583 23.2258 8.27667 23.2825 8.22C23.3392 8.16333 23.4117 8.135 23.5 8.135Z" fill="black"/>
			<rect x="6" y="22" width="13" height="1" rx="0.5" fill="#A31C54"/>
			<rect x="6" y="10" width="3" height="1" rx="0.5" fill="#A31C54"/>
			<rect x="6" y="16" width="3" height="1" rx="0.5" fill="#A31C54"/>
			</g>
			<defs>
			<clipPath id="clip0_921_10">
			<rect width="32" height="32" fill="white"/>
			</clipPath>
			</defs>
		</svg>
			
		<svelte:fragment slot="title">Nota-ui</svelte:fragment>
		<IconLink href="https://github.com/Vincentvibe3/nota-ui">
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path></svg>
		</IconLink>
	</Navbar>
	<Sidebar slot="leftSidebar">
		<SidebarLink href="/">Home</SidebarLink>
		<SidebarLink href="#search">Search</SidebarLink>
		<SidebarLink href="/components">Components</SidebarLink>
		<SidebarLink href="/typography">Typography</SidebarLink>
		<SidebarLink href="/color">Color</SidebarLink>
		<SidebarLink href="/hero">Hero</SidebarLink>
	</Sidebar>
	<slot/>
	<Footer slot="footer">

	</Footer>
</SiteLayout>