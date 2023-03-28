<script lang="ts">
	import TextInputImpl from './TextInputImpl.svelte';

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
	export let text: string;

	/**
	 * send event on enter pressed
	*/
	export let captureEnter=false

	/**
	 * Toggle to switch to plain text instead of password input.
	 */
	export let showText = false;

	let type:"text"|"number"|"password" = 'password';

	$: if (showText) {
		type = 'text';
	} else {
		type = 'password';
	}

</script>

<!-- 
	@component PasswordInput

	Input field for passwords

	Props:
	- htmlElement (HTMLInputElement | null): Native `<input>` element
	- name (string): name for the input in forms
	- valid  (boolean | null): controls the border color when valid or invalid. `null` resets it to the default color
	- placeholder (string): placeholder text
	- text (string|number): text value in the `<input>`
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
<TextInputImpl
	on:focus
	on:keydown
	on:keyup
	bind:htmlElement
	bind:text
	bind:name
	bind:valid
	bind:placeholder
	bind:captureEnter
	on:enterPressed
	type={type}
	on:click
	on:iconRightClick
	on:input>
	
	<svelte:fragment slot="iconleft">
		{#if $$slots.iconleft}
			<slot name="iconleft" />
		{/if}
	</svelte:fragment>
	<svelte:fragment slot="iconright">
		{#if $$slots.iconright}
			<slot name="iconright" />
		{/if}
	</svelte:fragment>
</TextInputImpl>
