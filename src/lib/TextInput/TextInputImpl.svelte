<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	/**
	 * Native `<input>` element
	 */
	export let htmlElement: HTMLInputElement | null = null;
	
	/**
	 * Name for the input in forms
	*/
	export let name = '';
	
	/**
	 * controls the border color when valid or invalid. `null` resets it to the default color
	*/
	export let valid: boolean | null = null;
	
	/**
	 * placeholder text
	*/
	export let placeholder = '';
	
	/**
	 * text value in the `<input>`
	*/
	export let text: string | number;
	
	/**
	 *  Controls the variant to render
	*/
	export let type:"text"|"number"|"password" = 'text';
	
	/**
	 * maxLength for numbers
	*/
	export let maxLength = -1;
	
	/**
	 * send event on enter pressed
	*/
	export let captureEnter=false
	
	/**
	 * controls whether to add shadow when focused
	*/
	export let shadowOnFocus=false;

	let focused=false;

	const dispatch = createEventDispatcher<{focus:void, iconRightClick:void, enterPressed:void}>();

	onMount(()=>{
		if (htmlElement !== null){
			htmlElement.onkeyup = onEnterPressed
		}
	})

	$: if (!captureEnter){
		htmlElement?.removeEventListener("keyup", onEnterPressed)
	}

	const onEnterPressed = (event:KeyboardEvent)=>{
		if (event.key === 'Enter' && captureEnter) {
        	dispatch("enterPressed")
    	}
	}

	const onFocus = () => {
		if (valid === null) {
			focused=true
		}
		dispatch('focus');
	};

	const onFocusOut = () => {
		if (valid === null) {
			focused=false
		}
	};

	const onIconRightClick = () => {
		dispatch('iconRightClick')
	}

</script>
<!-- 
	@component TextInputImpl

	Implementation of various TextInput components

	Props:
	- htmlElement (HTMLInputElement | null): Native `<input>` element
	- name (string): name for the input in forms
	- valid  (boolean | null): controls the border color when valid or invalid. `null` resets it to the default color
	- placeholder (string): placeholder text
	- text (string|number): text value in the `<input>`
	- type ("text"|"number"|"password"): Controls the variant to render
	- maxLength (number): maxLength for numbers
	- captureEnter (boolean): send event on enter pressed
	- shadowOnFocus (boolean): controls whether to add shadow when focused

	Slots:
	- iconleft: Icon to be placed on the left side of the input
	- iconright: Icon to be placed on the right of the input in a button

	Events:
	- focus (void): dispatched when the input is focused
	- iconRightClick (void): dispatched when the button on the right side is clicked
	- enterPressed (void): dispatched when `enter` is pressed

	CSS Variables:
	- inputText (default: #161616): text color
	- inputPlaceholderText (default: #606060): placeholder text color
	- inputIconColor (default: #606060): icon color
	- inputIconBtnBg (default: #c0c0c0): right button background xolor
	- inputBorder (default: #c0c0c0): border color
	- inputBg (default: #f0f0f0): background color
	- inputFont (default: 400 0.75rem sans-serif): text font
	- inputBorderFocus (default: #99003b): border color on focus
	- inputBorderInvalid (default: #db3434): border color on invalid
	- inputBorderValid (default: #36b32b): border color on valid

 -->
<div 
	class:valid={valid} 
	class:shadow={shadowOnFocus&&focused} 
	class:invalid={!valid&&valid !== null} 
	class:focused={focused&&valid === null} 
	class:notNumber={maxLength === -1}
	class:wrapper={true} >
	{#if $$slots.iconleft}
		<div class="iconWrapperLeft">
			<slot name="iconleft"/>
		</div>
	{/if}
	{#if type === 'text'}
		<input
			class:padLeft={$$slots.iconleft}
			on:keyup
			on:keydown
			on:submit
			on:focus={onFocus}
			on:focusout={onFocusOut}
			bind:value={text}
			placeholder={placeholder}
			on:input
			on:click
			name={name}
			type="text"
			bind:this={htmlElement} />
	{:else if type === 'number'}
		<input
			class:padLeft={$$slots.iconleft}
			on:keyup
			on:keydown
			on:submit
			on:focus={onFocus}
			on:focusout={onFocusOut}
			bind:value={text}
			placeholder={placeholder}
			on:input
			on:click
			name={name}
			style:width="{maxLength+1}em"
			type="number"
			bind:this={htmlElement} />
	{:else if type === 'password'}
		<input
			class:padLeft={$$slots.iconleft}
			on:submit
			on:focus={onFocus}
			on:focusout={onFocusOut}
			bind:value={text}
			placeholder={placeholder}
			on:input
			on:click
			name={name}
			type="password"
			bind:this={htmlElement} />
	{/if}
	{#if $$slots.iconright}
		<button on:click={onIconRightClick} class="iconWrapperRight">
			<slot name="iconright"/>
		</button>
	{/if}
</div>

<style lang="scss">

	input {
		height: auto;
		flex-grow: 1;

		padding: 0.75rem;
		padding-left: 0rem;

		color: var(--inputText, #161616);
		background-color: transparent;

		border: none;
		outline: none;

		font:inherit;
		
		&::placeholder {
			opacity: 1;
			color: var(--inputPlaceholderText, #606060);
		}
	}

	input[type="number"]{
    	width: 4em;
		overflow-x: hidden;
		text-overflow: ellipsis;
	} 

	.iconWrapperLeft {
		position: relative;
		height: 1rem;
		padding: 00.75rem;

		:global( * ) {
			height: 1rem;
			width: auto;
		}

		&:empty{
			display: none;
		}

		&:empty ~ input {
			padding-left: 00.75rem;
		}

		:global( svg ){
			fill: var(--inputIconColor, #606060);
			stroke: var(--inputIconColor, #606060);
		}
	}

	.iconWrapperRight {
		position: relative;
		right: 0.75rem;

		width: auto;
		height: 1.5rem;

		display: flex;
		align-items: center;
		justify-content: center;

		padding: 0rem;

		border: none;
		outline: none;

		cursor: pointer;

		background-color: transparent;

		aspect-ratio: 1;
		
		&:empty{
			display: none;
		}

		&:hover {
			background-color: var(--inputIconBtnBg, #c0c0c0);
			border-radius: 100vw;
		}

		:global( svg ) {
			fill: var(--inputIconColor, #606060);
			stroke: var(--inputIconColor, #606060);
		}

		:global( * ) {
			height: 1rem;
			width: auto;
		}
	}

	.wrapper {
		position: relative;

		display: flex;
		flex-direction: row;
		align-items: center;

		outline: none;
		border: 0.1rem solid var(--inputBorder, #c0c0c0);
		border-radius: var(--borderRadius, 0.2rem);

		background-color: var(--inputBg, #f0f0f0);
		
		transition: all ease-in-out 0.2s;
		
		font: var(--inputFont, 400 0.75rem sans-serif);

		&.notNumber {
			width: 100%;
		}
		
		&.shadow{
			box-shadow: #00000033 0.2rem 0.2rem 1rem;
		}

		&.focused{
			border: 0.1rem solid var(--inputBorderFocus, #99003b);
		}

		&.invalid{
			border: 0.1rem solid var(--inputBorderInvalid, #db3434);
		}

		&.valid{
			border: 0.1rem solid var(--inputBorderValid, #36b32b);
		}

	}

</style>
