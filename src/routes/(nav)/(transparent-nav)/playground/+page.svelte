<script lang="ts">
	import Button from '$lib/Button/Button.svelte';
	import Checkbox from '$lib/Checkbox/Checkbox.svelte';
	import Dropdown from '$lib/Dropdown/Dropdown.svelte';
	import PasswordInput from '$lib/TextInput/PasswordInput.svelte';
	import Radio from '$lib/Radio/Radio.svelte';
	import {TextInput, Searchbar, BackToTop, Separator, TextArea, Header, ContentContainer, Scaffold, Text, queueModal} from '$lib';
	import ProgressRing from '$lib/ProgressRing/ProgressRing.svelte';
	import Link from '$lib/Text/Link.svelte';
	import Slider from '$lib/Slider/Slider.svelte';
	import IconButton from '$lib/Button/IconButton.svelte';
	import type { SearchInputEvent } from '$lib';
	import ModalContent from '../../(app)/ModalContent.svelte';
	import ColorPicker from '$lib/ColorPicker/ColorPicker.svelte';

	let color = "#ff0000"
	let button: HTMLButtonElement;
	let input: HTMLInputElement;
	let passwordInput: HTMLInputElement;
	let validInput: boolean | undefined = undefined;
	let text: string;
	let searchText = '';
	let placeholder = 'Enter text here';
	let checked = false;
	let count = 0;
	let status:"loading"|"complete"|"error"="loading";
	let showPassword = false;
	let searchSuggestAll: string[] = ['Option 1','abc', 'def', 'abd', 'dec', "a", "add", "assdf", "avsdfksdfjgjdfaf", "aajhagfjhagsfjgajsfgajhfjasgfhjgasfj", "addaf", "aasdafafasf"];
	let searchSuggest: string[] = [];
	let loadButton1=false;
	let modalOpen=false;

	$:console.log(color)

	const click = () => {
		count++;
		loadButton1=!loadButton1
	};

	const searchInput = (event: CustomEvent<SearchInputEvent>) => {
		searchSuggest = searchSuggestAll.filter((value) => value.startsWith(event.detail.text));
	};

	//TODO refactor if
	$:  if (text === undefined){
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
<Scaffold>
	<Header slot="header" video="/video.mp4">
		Component Preview
	</Header>
	<ContentContainer direction="column">
		<Text tag="label" caption attributes={{"for":"input"}}>TextInput</Text>
		<TextInput
			name="input"
			bind:text
			bind:placeholder
			bind:htmlElement={input}
			bind:valid={validInput}
			captureEnter={true}
			on:enterPressed={
				()=>{
					alert("enter pressed")
				}
			}
			on:iconRightClick={clearInput}>
			<!-- Icon from Phosphor Icons (https://phosphoricons.com/) licensed under an MIT license -->
			<svg slot="iconleft" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="var(--inputIconColor)" viewBox="0 0 256 256" ><rect width="256" height="256" fill="none" /><circle cx="116" cy="116" r="84" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
			<svg  slot="iconright" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="var(--inputIconColor)" viewBox="0 0 256 256" ><rect width="256" height="256" fill="none" /><line x1="200" y1="56" x2="56" y2="200" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><line x1="200" y1="200" x2="56" y2="56" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
		</TextInput>
		<Text tag="label" caption attributes={{"for":"password"}}>Password</Text>
		<!-- <PasswordInput
			name="password"
			bind:showText={showPassword}
			bind:text
			placeholder="Password"
			bind:htmlElement={passwordInput}
			on:iconRightClick={revealPassword}
			bind:valid={validInput}>
			<svelte:fragment slot="iconright"> -->
				<!-- Icon from Phosphor Icons (https://phosphoricons.com/) licensed under an MIT license -->
				<!-- {#if passwordInput !== undefined && passwordInput.type === 'password'}
					<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="var(--inputIconColor)" viewBox="0 0 256 256" ><rect width="256" height="256" fill="none" /><path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><circle cx="128" cy="128" r="40" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
				{:else if passwordInput !== undefined && passwordInput.type === 'text'}
					<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="var(--inputIconColor)" viewBox="0 0 256 256" ><rect width="256" height="256" fill="none" /><line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
				{/if}
			</svelte:fragment>
		</PasswordInput> -->
		<Text tag="label" caption attributes={{"for":"Button"}}>Button</Text>
		<ContentContainer direction="row">
			<div style="flex-grow:1;">
				<TextInput placeholder="hello" bind:text></TextInput>
			</div>
			<Button>Test</Button>
		</ContentContainer>
		<Separator/>
		<ContentContainer direction="row">
			<Button buttonStyle="primary" on:click={click} bind:htmlElement={button}>
				<div slot="icon" style="display:flex; flex-direction:row; align-items:center; justify-content:center; heigth:100%;">
					{#if loadButton1}
						<ProgressRing bind:status={status}  --spinnerBgError="var(--p800)" --spinnerBgComplete="var(--p800)" --spinnerIcon="var(--n100)"></ProgressRing>
					{:else}
					<!-- Icon from Phosphor Icons (https://phosphoricons.com/) licensed under an MIT license -->
						<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="#ffffff" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"></circle><line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="128" y1="88" x2="128" y2="168" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
					{/if}
				</div>
				I was pressed {count} times
			</Button>
			<Button buttonStyle="secondary" on:click={click} bind:htmlElement={button}>
				<ProgressRing bind:status={status} slot="icon" ></ProgressRing>
				Secondary
			</Button>
			<Button buttonStyle="tertiary" on:click={click} bind:htmlElement={button}>
				Tertiary
			</Button>
			<Button buttonStyle="danger" on:click={click} bind:htmlElement={button}>
				Danger
			</Button>
			<Button disabled  buttonStyle="danger" on:click={click} bind:htmlElement={button}>
				Disabled
			</Button>
			<!-- Icon from Phosphor Icons (https://phosphoricons.com/) licensed under an MIT license -->
			<IconButton on:click={click}>
				<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"></circle><line x1="88" y1="128" x2="168" y2="128" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="128" y1="88" x2="128" y2="168" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
			</IconButton>
			<IconButton buttonStyle="secondary">
				<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"></circle><line x1="88" y1="128" x2="168" y2="128" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="128" y1="88" x2="128" y2="168" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
			</IconButton>
			<IconButton buttonStyle="tertiary">
				<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"></circle><line x1="88" y1="128" x2="168" y2="128" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="128" y1="88" x2="128" y2="168" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
			</IconButton>
			<IconButton buttonStyle="danger">
				<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"></circle><line x1="88" y1="128" x2="168" y2="128" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="128" y1="88" x2="128" y2="168" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
			</IconButton>
			<IconButton disabled>
				<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"></circle><line x1="88" y1="128" x2="168" y2="128" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="128" y1="88" x2="128" y2="168" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
			</IconButton>
		</ContentContainer>
		<Text tag="label" caption attributes={{"for":"Dropdown"}}>Dropdown</Text>
		<Dropdown>
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
		<Dropdown>
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
		<Text tag="label" caption attributes={{"for":"Checkbox"}}>Checkbox</Text>
		<Checkbox bind:checked>
			<Text tag="label" caption attributes={{"for":"checkbox state"}}>{checked}</Text>
		</Checkbox>
		<Text tag="label" caption attributes={{"for":"radio"}}>Radio</Text>
		<form>
			<ContentContainer direction="column">
				<Radio bind:group={status} name="hello" value="loading">
					<Text tag="label" caption attributes={{"for":"radio"}}>Loading</Text>
				</Radio>
				<Radio bind:group={status} name="hello" value="error">
					<Text tag="label" caption attributes={{"for":"radio"}}>Error</Text>
				</Radio>
				<Radio bind:group={status} name="hello" value="complete">
					<Text tag="label" caption attributes={{"for":"radio"}}>Complete</Text>
				</Radio>
			</ContentContainer>
		</form>
		<Text tag="label" caption attributes={{"for":"spinner"}}>Spinner</Text>
		<ContentContainer>
			<ProgressRing bind:status indeterminate={false}/>
			<Button 
				buttonStyle="primary" 
				on:click={()=>{
					status="loading"
				}} 
				disabled={status == "loading"}
				bind:htmlElement={button}>
				Set Loading
			</Button>
			<Button 
				
				buttonStyle="primary" 
				on:click={()=>{
					status="error"
				}} 
				disabled={status == "error"}
				bind:htmlElement={button}>
				Set Error
			</Button>
			<Button 
				
				buttonStyle="primary" 
				on:click={()=>{
					status="complete"
				}} 
				disabled={status == "complete"}
				bind:htmlElement={button}>
				Set Complete
			</Button>
		</ContentContainer>
		<Text tag="label" caption attributes={{"for":"Search Bar"}}>Search Bar</Text>
		<Searchbar
			
			on:submit={() => {
				alert(`submitted ${searchText}`);
			}}
			on:iconRightClick={clearInput2} 
			bind:text={searchText}
			on:input={searchInput}
			placeholder="Search"
			bind:suggestions={searchSuggest}>
			<!-- Icon from Phosphor Icons (https://phosphoricons.com/) licensed under an MIT license -->
			<svg slot="iconleft" xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 256 256"><rect width="256" height="256" stroke="none" fill="none" /><circle cx="116" cy="116" r="84" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
			<svg slot="iconright" xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 256 256"><rect width="256" height="256" stroke="none" fill="none" /><line x1="200" y1="56" x2="56" y2="200" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><line x1="200" y1="200" x2="56" y2="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
		</Searchbar>
		<Text tag="label" caption attributes={{"for":"Separator"}}>Separator</Text>
		<Separator></Separator>
		<Text tag="label" caption attributes={{"for":"Modal"}}>Modal</Text>
		<Button 
			buttonStyle="primary" 
			on:click={()=>{
				queueModal({component:ModalContent, title:"Modal Title"})
			}}
			bind:htmlElement={button}>
			Open Modal
		</Button>
		<Text tag="label" caption attributes={{"for":"TextArea"}}>TextArea</Text>
		<TextArea placeholder="Placeholder" bind:text={text}></TextArea>
		<Slider min={0} max={10} value={5} showGradations></Slider>
		<Slider min={0} max={100} value={50} showValue></Slider>
		<BackToTop></BackToTop>
		<p>This is a paragraph with a link to the 
			<Link href="/components" arrow>components</Link>
			here.
		</p>
		<TextInput bind:text="{color}" on:input={()=>{console.log(color)}}></TextInput>
		<ColorPicker bind:text={color}></ColorPicker>
	</ContentContainer>
</Scaffold>
