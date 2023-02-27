<script lang="ts">
	import Button from '$lib/Other/Button.svelte';
	import Checkbox from '$lib/Input/Checkbox.svelte';
	import Dropdown from '$lib/Input/Dropdown.svelte';
	import PasswordInput from '$lib/Input/PasswordInput.svelte';
	import Radio from '$lib/Input/Radio.svelte';
	import Searchbar from '$lib/Input/Searchbar.svelte';
	import ProgressRing from '$lib/Other/ProgressRing.svelte';
	import TextInput from '$lib/Input/TextInput.svelte';
	import Header from '$lib/Other/Header.svelte';
	import Modal from '$lib/Other/Modal.svelte';
	import BackToTop from '$lib/Navigation/BackToTop.svelte';
	import Separator from '$lib/Other/Separator.svelte';
	import TextArea from '$lib/Input/TextArea.svelte';
	import Footer from '$lib/Other/Footer.svelte';
	import Link from '$lib/Other/Link.svelte';
	import Slider from '$lib/Input/Slider.svelte';

	let button: HTMLButtonElement;
	let input: HTMLInputElement;
	let passwordInput: HTMLInputElement;
	let validInput: boolean | undefined = undefined;
	let text: string;
	let searchText = '';
	let placeholder = 'Enter text here';
	let checked = false;
	let count = 0;
	let status="loading";
	let showPassword = false;
	let searchSuggestAll: string[] = ['Option 1','abc', 'def', 'abd', 'dec', "a", "add", "assdf", "avsdfksdfjgjdfaf", "aajhagfjhagsfjgajsfgajhfjasgfhjgasfj", "addaf", "aasdafafasf"];
	let searchSuggest: string[] = [];
	let loadButton1=false;
	let modalOpen=false;

	const click = () => {
		count++;
		loadButton1=!loadButton1
	};

	const searchInput = (event: CustomEvent<{text:string}>) => {
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

</script>
<!-- <Header 
	class="mainheader"
	position="left"
	img="https://images.unsplash.com/photo-1673247463250-835991994a3d?ixlib=rb-4.0.3&dl=pramod-tiwari-Ivz2wREpKO0-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
	>
	Component Preview
</Header> -->
<Header style="width:100%;" video="/video2.mp4">
	Component Preview
</Header>
<!-- <Header>Component Preview</Header> -->
<main>
	<label for="label">Input</label>
	<TextInput
		style="width:100%;"
		name="input"
		bind:text
		bind:placeholder
		bind:htmlElement={input}
		bind:valid={validInput}
		on:iconRightClick={clearInput}>
		<svg slot="iconleft" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="var(--inputIconColor)" viewBox="0 0 256 256" ><rect width="256" height="256" fill="none" /><circle cx="116" cy="116" r="84" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
		<svg  slot="iconright" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="var(--inputIconColor)" viewBox="0 0 256 256" ><rect width="256" height="256" fill="none" /><line x1="200" y1="56" x2="56" y2="200" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><line x1="200" y1="200" x2="56" y2="56" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
	</TextInput>
	<label for="label">Password</label>
	<PasswordInput
		name="password"
		style="width:100%;"
		bind:showText={showPassword}
		bind:text
		placeholder="Password"
		bind:htmlElement={passwordInput}
		on:iconRightClick={revealPassword}
		bind:valid={validInput}>
		<svelte:fragment slot="iconright">
			{#if passwordInput != null && passwordInput.type == 'password'}
				<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="var(--inputIconColor)" viewBox="0 0 256 256" ><rect width="256" height="256" fill="none" /><path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><circle cx="128" cy="128" r="40" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
			{:else if passwordInput != null && passwordInput.type == 'text'}
				<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="var(--inputIconColor)" viewBox="0 0 256 256" ><rect width="256" height="256" fill="none" /><line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
			{/if}
		</svelte:fragment>
	</PasswordInput>
	<label for="radio">Button</label>
	<div style="display: flex; flex-direction:row;">
		<Button class="preview-primary" style="height:3rem; margin-right: 1rem;" type="primary" on:click={click} bind:htmlElement={button}>
			<div slot="icon" style="display:flex; flex-direction:row; align-items:center; justify-content:center; heigth:100%;">
				{#if loadButton1}
					<ProgressRing bind:status={status} style="--spinnerBgError:var(--p800);--spinnerBgComplete:var(--p800); --spinnerIcon:var(--n100);"></ProgressRing>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="#ffffff" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"></circle><line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="128" y1="88" x2="128" y2="168" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
				{/if}
			</div>
			I was pressed {count} times
		</Button>
		<Button style="height:3rem; margin-right:1rem;" type="secondary" on:click={click} bind:htmlElement={button}>
			<ProgressRing bind:status={status} slot="icon" size="1.5rem" ></ProgressRing>
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
	<Separator></Separator>
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
		<ProgressRing bind:status id="mainspinner"/>
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
		id="search"
		on:submit={() => {
			alert(`submitted ${searchText}`);
		}}
		on:iconRightClick={clearInput2} 
		bind:text={searchText}
		on:input={searchInput}
		placeholder="Search"
		bind:suggestions={searchSuggest}>
		<svg slot="iconleft" xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 256 256"><rect width="256" height="256" stroke="none" fill="none" /><circle cx="116" cy="116" r="84" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
		<svg slot="iconright" xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 256 256"><rect width="256" height="256" stroke="none" fill="none" /><line x1="200" y1="56" x2="56" y2="200" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><line x1="200" y1="200" x2="56" y2="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
	</Searchbar>
	<label for="modal">Separator</label>
	<Separator></Separator>
	<label for="modal">Modal</label>
	<Modal bind:open={modalOpen}>
		<svelte:fragment slot="title">
			Modal Title
		</svelte:fragment>
		<p>Hello from the modal!</p>
		<TextInput style="width:30rem;" text=""></TextInput>
		<div style="display:flex; flex-direction:row; justify-content:space-between; margin-top:1rem;">
			<Button type="secondary" on:click={()=>{modalOpen=false}}>
				Cancel
			</Button>
			<Button on:click={()=>{modalOpen=false}}>
				Complete
			</Button>
		</div>
	</Modal>
	<Button 
		type="primary" 
		on:click={()=>{
			modalOpen=!modalOpen
		}} 
		bind:htmlElement={button}>
		Open Modal
	</Button>
	<label for="modal">TextArea</label>
	<TextArea placeholder="Placeholder" bind:text={text}></TextArea>
	<Slider min={0} max={1000000} value={10}></Slider>
	<BackToTop style="height:3rem;"></BackToTop>
	<p>This is a paragraph with a link to the 
		<Link href="/components" arrow>components</Link>
		here.
	</p>
</main>
<Footer>

	<h1>Copyright Info</h1>

</Footer>
<style>

	main label {
		font: var(--caption);
		margin: 0.75rem 0rem;
	}

	main {
		display: flex;
		flex-direction: column;
		/* align-items: flex-start; */
		/* width: fit-content; */
		padding: 3rem;
		justify-content: center;
	}
</style>
