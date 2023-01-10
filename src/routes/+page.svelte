<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Checkbox from '$lib/Checkbox.svelte';
	import Dropdown from '$lib/Dropdown.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import PasswordInput from '$lib/PasswordInput.svelte';
	import Radio from '$lib/Radio.svelte';
	import Searchbar from '$lib/Searchbar.svelte';
	import Spinner from '$lib/Spinner.svelte';
	import TextInput from '$lib/TextInput.svelte';
	import Header from '$lib/Header.svelte';
	import Sidebar from '$lib/Sidebar.svelte';

	let button: HTMLButtonElement;
	let input: HTMLInputElement;
	let passwordInput: HTMLInputElement;
	let validInput: Boolean | null = null;
	let text: string;
	let searchText = '';
	let placeholder = 'Enter text here';
	let checked = false;
	let group = 'loading';
	let count = 0;
	let status:string="loading";
	let showPassword = false;
	let searchSuggestAll: string[] = ['abc', 'def', 'abd', 'dec', "a", "add", "assdf", "avsdfksdfjgjdfaf", "aajhagfjhagsfjgajsfgajhfjasgfhjgasfj", "addaf", "aasdafafasf"];
	let searchSuggest: string[] = [];
	let loadButton1=false;
	let openSidebar=false;

	const click = () => {
		count++;
		loadButton1=!loadButton1
	};

	const searchInput = (event: any) => {
		searchSuggest = searchSuggestAll.filter((value) => value.startsWith(event.detail.text));
	};

	$:  if (text==undefined){
		// Do Nothing
	} else if (text?.includes('@')) {
		validInput = true;
	} else {
		validInput = false;
	}

	const clearInput = () => {
		text = '';
	};

	const clearInput2 = () => {
		searchText = '';
	};

	const revealPassword = () => {
		showPassword = !showPassword;
	};

	const toggleSidebar = () =>{
		openSidebar=!openSidebar
	}
</script>
<Sidebar bind:show={openSidebar}></Sidebar>
<Navbar on:onTitleClick={toggleSidebar} alwaysOpaque={false} style="top:0px; left:0px; z-index:2;">
	<div slot="icon" style="height: 40%; width:auto; margin:0rem; margin-right:1rem;">
		<svg style="height:100%; width:auto;" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="40" y1="64" x2="216" y2="64" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="40" y1="192" x2="216" y2="192" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
		<!-- <svg style="height:100%; width:auto;" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="96" y1="128" x2="160" y2="128" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="96" y1="160" x2="160" y2="160" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M56,40H200a8,8,0,0,1,8,8V200a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24V48A8,8,0,0,1,56,40Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="80" y1="24" x2="80" y2="56" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="128" y1="24" x2="128" y2="56" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="176" y1="24" x2="176" y2="56" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg> -->
	</div>
</Navbar>
<Header img="https://images.unsplash.com/photo-1673247463250-835991994a3d?ixlib=rb-4.0.3&dl=pramod-tiwari-Ivz2wREpKO0-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb"></Header>
<!-- <Header></Header> -->
<main>
	<label for="label">Input</label>
	<TextInput
		style="width:100%;"
		bind:text
		bind:placeholder
		bind:htmlElement={input}
		bind:valid={validInput}>
		<svg slot="iconleft" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="var(--inputIconColor)" viewBox="0 0 256 256" ><rect width="256" height="256" fill="none" /><circle cx="116" cy="116" r="84" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
		<svg on:click={clearInput} slot="iconright" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="var(--inputIconColor)" viewBox="0 0 256 256" ><rect width="256" height="256" fill="none" /><line x1="200" y1="56" x2="56" y2="200" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><line x1="200" y1="200" x2="56" y2="56" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
	</TextInput>
	<label for="label">Password</label>
	<PasswordInput
		style="width:100%;"
		bind:showText={showPassword}
		bind:text
		placeholder="Password"
		bind:htmlElement={passwordInput}
		bind:valid={validInput}>
		<div slot="iconright">
			{#if passwordInput != null && passwordInput.type == 'password'}
				<svg on:click={revealPassword} xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="var(--inputIconColor)" viewBox="0 0 256 256" ><rect width="256" height="256" fill="none" /><path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><circle cx="128" cy="128" r="40" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
			{:else if passwordInput != null && passwordInput.type == 'text'}
				<svg on:click={revealPassword} xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="var(--inputIconColor)" viewBox="0 0 256 256" ><rect width="256" height="256" fill="none" /><line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
			{/if}
		</div>
	</PasswordInput>
	<label for="radio">Button</label>
	<div style="display: flex; flex-direction:row;">
		<Button style="height:3rem; margin-right: 1rem;" type="primary" on:click={click} bind:htmlElement={button}>
			<div slot="icon" style="display:flex; flex-direction:row; align-items:center; justify-content:center; heigth:100%;">
				{#if loadButton1}
					<Spinner bind:status={status} size="1.5rem" style="--spinnerBgError:var(--p800);--spinnerBgComplete:var(--p800); --spinnerBg:var(--n100);"></Spinner>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="#ffffff" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"></circle><line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="128" y1="88" x2="128" y2="168" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
				{/if}
			</div>
			I was pressed {count} times
		</Button>
		<Button style="height:3rem; margin-right:1rem;" type="secondary" on:click={click} bind:htmlElement={button}>
			<Spinner bind:status={status} slot="icon" size="1.5rem" ></Spinner>
			Secondary
		</Button>
		<Button style="height:3rem; margin-right:1rem;" type="tertiary" on:click={click} bind:htmlElement={button}>
			Tertiary
		</Button>
		<Button style="height:3rem; margin-right:1rem;" type="danger" on:click={click} bind:htmlElement={button}>
			Danger
		</Button>
		<Button disabled style="height:3rem; margin:0rem;" type="danger" on:click={click} bind:htmlElement={button}>
			Disabled
		</Button>
		<!-- <Button style="height:3rem; margin:0rem;" type="icon" on:click={click} bind:htmlElement={button}>
			<div slot="icon" style="display:flex; flex-direction:row; align-items:center; justify-content:center; heigth:100%;">
				{#if loadButton1}
					<Spinner bind:loading size="1.5rem"></Spinner>
				{:else}
					<svg style="width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="#ffffff" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"></circle><line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="128" y1="88" x2="128" y2="168" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
				{/if}
			</div>
		</Button> -->
	</div>
	<label for="radio">Dropdown</label>
	<Dropdown class="dropdown">
		<option value="0">Select an option:</option>
		<option value="1">Option 1</option>
		<option value="2">Option 2</option>
		<option value="3">Option 3</option>
		<option value="4">Option 4</option>
		<option value="5">Option 5</option>
		<option value="6">Option 6</option>
		<option value="7">Option 7</option>
		<option value="8">Option 8</option>
		<option value="9">Option 9</option>
		<option value="10">Option 10</option>
		<option value="11">Option 10</option>
		<option value="12">Option 12 very longgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg</option>
	</Dropdown>
	<label for="radio">Checkbox</label>
	<Checkbox bind:checked>
		<label style="margin-left: 0.5rem;" for="radio">{checked}</label>
	</Checkbox>
	<label for="radio">Radio Buttons</label>
	<form>
		<Radio bind:group={status} name="hello" value="loading">
			<label style="margin-left: 0.5rem;" for="radio">Loading</label>
		</Radio>
		<Radio bind:group={status} name="hello" value="error">
			<label style="margin-left: 0.5rem;" for="radio">Error</label>
		</Radio>
		<Radio bind:group={status} name="hello" value="complete">
			<label style="margin-left: 0.5rem;" for="radio">Complete</label>
		</Radio>
	</form>
	<label for="radio">Spinner</label>
	<div style="display: flex; flex-direction:row; align-items:center;">
		<Spinner bind:status />
		<Button 
			style="margin-left: 1rem;"
			type="primary" 
			on:click={()=>{
				status="loading"
			}} 
			disabled={status=="loading"}
			bind:htmlElement={button}>
			Set Loading
		</Button>
		<Button 
			style="margin-left: 1rem;"
			type="primary" 
			on:click={()=>{
				status="error"
			}} 
			disabled={status=="error"}
			bind:htmlElement={button}>
			Set Error
		</Button>
		<Button 
			style="margin-left: 1rem;"
			type="primary" 
			on:click={()=>{
				status="complete"
			}} 
			disabled={status=="complete"}
			bind:htmlElement={button}>
			Set Complete
		</Button>
	</div>
	<label for="radio">Search Bar</label>
	<Searchbar
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
	<p style="font:var(--body);">Text</p>
</main>

<style>

	label {
		font: var(--caption);
		margin: 0.75rem 0rem;
	}

	main {
		display: flex;
		flex-direction: column;
		width: 50vw;
		min-width: 50rem;
		margin: 2rem;
		justify-content: center;
		/* margin-top: 5rem; */
	}
</style>
