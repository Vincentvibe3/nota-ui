<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Checkbox from '$lib/Checkbox.svelte';
	import Dropdown from '$lib/Dropdown.svelte';
	import PasswordInput from '$lib/PasswordInput.svelte';
	import Radio from '$lib/Radio.svelte';
	import Searchbar from '$lib/Searchbar.svelte';
	import Spinner from '$lib/Spinner.svelte';
	import TextInput from '$lib/TextInput.svelte';

	let button: HTMLButtonElement;
	let input: HTMLInputElement;
	let passwordInput: HTMLInputElement;
	let validInput: Boolean | null = null;
	let text: string;
	let searchText = '';
	let placeholder = 'Enter text here';
	let checked = false;
	let group = 'a';
	let count = 0;
	let loading = true;
	let showPassword = false;
	let searchSuggestAll: string[] = ['abc', 'def', 'abd', 'dec'];
	let searchSuggest: string[] = [];

	const click = () => {
		count++;
	};

	const searchInput = (event: any) => {
		searchSuggest = searchSuggestAll.filter((value) => value.startsWith(event.detail.text));
	};

	const checkInput = (event: Event) => {
		if (text?.includes('@')) {
			validInput = true;
		} else {
			validInput = false;
		}
	};

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

<h1>Component preview</h1>
<div>
	<label for="label">Input</label>
	<TextInput
		style="width:100%;"
		bind:text
		on:input={checkInput}
		bind:placeholder
		bind:htmlElement={input}
		bind:valid={validInput}>
		<svg slot="iconleft" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256" ><rect width="256" height="256" fill="none" /><circle cx="116" cy="116" r="84" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
		<svg on:click={clearInput} slot="iconright" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256" ><rect width="256" height="256" fill="none" /><line x1="200" y1="56" x2="56" y2="200" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><line x1="200" y1="200" x2="56" y2="56" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
	</TextInput>
	<label for="label">Password</label>
	<PasswordInput
		style="width:100%;"
		bind:showText={showPassword}
		bind:text
		on:input={checkInput}
		placeholder="Password"
		bind:htmlElement={passwordInput}
		bind:valid={validInput}>
		<div slot="iconright">
			{#if passwordInput != null && passwordInput.type == 'password'}
				<svg on:click={revealPassword} xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256" ><rect width="256" height="256" fill="none" /><path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><circle cx="128" cy="128" r="40" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
			{:else if passwordInput != null && passwordInput.type == 'text'}
				<svg on:click={revealPassword} xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256" ><rect width="256" height="256" fill="none" /><line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
			{/if}
		</div>
	</PasswordInput>
	<label for="radio">Button</label>
	<div style="display: flex; flex-direction:row;">
		<Button style="height:3rem;" type="primary" on:click={click} bind:htmlElement={button}>I was pressed {count} times</Button>
		<Button style="height:3rem;" type="secondary" on:click={click} bind:htmlElement={button}>I was pressed {count} times</Button>
	</div>
	<label for="radio">Dropdown</label>
	<Dropdown class="dropdown">
		<option value="0">Select car:</option>
		<option value="1">Audi</option>
		<option value="2">BMW</option>
		<option value="3">Citroen</option>
		<option value="4">Ford</option>
		<option value="5">Honda</option>
		<option value="6">Jaguar</option>
		<option value="7">Land Rover</option>
		<option value="8">Mercedes</option>
		<option value="9">Mini</option>
		<option value="10">Nissan</option>
		<option value="11">Toyota</option>
		<option value="12"
			>Volvo asjdghafasdasdasdadasdadasdasdasdjhgafjghasjfghajhgasfjhagsfafghashfgasf</option>
	</Dropdown>
	<label for="radio">Checkbox</label>
	<Checkbox bind:checked>
		<label for="radio">{checked}</label>
	</Checkbox>
	<label for="radio">Radio Buttons</label>
	<form>
		<Radio bind:group name="hello" value="a">
			<label for="radio">1</label>
		</Radio>
		<Radio bind:group name="hello" value="b">
			<label for="radio">2</label>
		</Radio>
		<Radio bind:group name="hello" value="c">
			<label for="radio">3</label>
		</Radio>
	</form>
	<label for="radio">Spinner</label>
	<div style="display: flex; flex-direction:row; align-items:center;">
		<Spinner bind:loading />
		<Button 
			type="primary" 
			on:click={()=>{
				loading=!loading
			}} 
			bind:htmlElement={button}>
			Toggle loading
		</Button>
	</div>
	<label for="radio">Search</label>
	<Searchbar
		on:submit={() => {
			alert(`submitted ${searchText}`);
		}}
		bind:text={searchText}
		on:input={searchInput}
		placeholder="Search"
		bind:suggestions={searchSuggest}>
		<svg slot="iconleft" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><circle cx="116" cy="116" r="84" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
		<svg on:click={clearInput2} slot="iconright" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><line x1="200" y1="56" x2="56" y2="200" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><line x1="200" y1="200" x2="56" y2="56" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
	</Searchbar>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&display=swap');

	:global(span) {
		font-family: 'Work Sans', sans-serif;
	}

	:global(p) {
		font-family: 'Work Sans', sans-serif;
	}

	:global(input) {
		font-family: 'Work Sans', sans-serif;
	}

	:global(button) {
		font-family: 'Work Sans', sans-serif;
	}

	h1 {
		font-family: 'Work Sans', sans-serif;
	}

	label {
		font-family: 'Work Sans', sans-serif;
		font-size: small;
		margin: 00.5rem;
	}

	div {
		display: flex;
		flex-direction: column;
		width: fit-content;
	}
</style>
