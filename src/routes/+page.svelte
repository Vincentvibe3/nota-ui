<script lang="ts">
	import Button from "$lib/Button.svelte";
  import Checkbox from "$lib/Checkbox.svelte";
  import Dropdown from "$lib/Dropdown.svelte";
  import Radio from "$lib/Radio.svelte";
  import Input from "$lib/TextInput.svelte";
	
	let button: HTMLButtonElement;
	let input:HTMLInputElement;
	let validInput:Boolean|null=null;
	let text:string;
	let placeholder = "Input"
	let checked=false;
	let group="a";
	let count = 0;

	const click = () => {
		console.log(`I was clicked! ${count}`)
		count++
	}

	const checkInput = (event:Event) => {
		if (text?.includes("@")){
			validInput = true
		} else {
			validInput = false
		}
	}


	
</script>

<h1>Component preview</h1>
<div>
	<label for="label">Input</label>
	<Input bind:text={text} on:input={checkInput} bind:placeholder={placeholder} bind:htmlElement={input} bind:valid={validInput}></Input>
	<label for="radio">Button</label>
	<div style="display: flex; flex-direction:row;">
		<Button type="primary" on:click={click} bind:htmlElement={button}>I was pressed {count} times</Button>
		<Button type="secondary" on:click={click} bind:htmlElement={button}>I was pressed {count} times</Button>
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
		<option value="12">Volvo asjdghafjhgafjghasjfghajhgasfjhagsfafghashfgasf</option>
	</Dropdown>
	<label for="radio">Checkbox</label>
	<Checkbox bind:checked={checked}>
		<label for="radio">{checked}</label>
	</Checkbox>
	<label for="radio">Radio Buttons</label>
	<form>
		<Radio bind:group={group} name="hello" value="a">
			<label for="radio">1</label>
		</Radio>
		<Radio bind:group={group} name="hello" value="b">
			<label for="radio">2</label>
		</Radio>
		<Radio bind:group={group} name="hello" value="c">
			<label for="radio">3</label>
		</Radio>
	</form>
</div>

<style>

	@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&display=swap');

	:global(span){
		font-family: 'Work Sans', sans-serif;
	}

	:global(p){
		font-family: 'Work Sans', sans-serif;
	}

	:global(input){
		font-family: 'Work Sans', sans-serif;
	}

	:global(button){
		font-family: 'Work Sans', sans-serif;
		font-size: 600;
	}

	h1 {
		font-family: 'Work Sans', sans-serif;
	}

	label{
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