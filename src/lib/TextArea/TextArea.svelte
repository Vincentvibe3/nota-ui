<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	/**
	 * Native `<textarea>` element
	 */
	export let htmlElement: HTMLTextAreaElement | null = null;
	
	/**
	 * Name of the TextArea for forms
	 */
	export let name = '';
	
	/**
	 * Controls the border color indicating validity. Border is set to the default color when null
	 */
	export let valid: boolean | null = null;
	
	/**
	 * Placeholder text
	 */
	export let placeholder = '';
	
	/**
	 * Text in the TextArea
	 */
	export let text: string;
	
	/**
	 * Controls displaying a shadow when the TextArea is focused
	 */
	export let shadowOnFocus=false;

	let focused=false;

	const dispatch = createEventDispatcher<{focus:void}>();

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

</script>
<!-- 
	@component TextArea
	
	Creates a TextArea

	Props:
	- htmlElement (HTMLTextAreaElement | null): Native `<textarea>` element
	- name (string): Name of the TextArea for forms
	- valid (boolean | null): Controls the border color indicating validity. Border is set to the default color when null
	- placeholder (string): Placeholder text
	- text (string): Text in the TextArea
	- shadowOnFocus (boolean): Controls displaying a shadow when the TextArea is focused

	Events:
	- focus (void): Called when the TextArea is focused

	Css Variables:
	- textAreaFont (default: 400 0.75rem sans-serif): Font for the text area
	- textAreaBorder (default: #c0c0c0): Border Color for the text area
	- textAreaBg (default: #f0f0f0): Background color for the text area
	- textAreaBorderFocus (default: #99003b): Border color for the text area when focused
	- textAreaText (default: #161616): Text color for the text area
	- textAreaPlaceholderText (default: #606060): Placeholder text color for the text area
	
 -->
<div 
	class:shadow={shadowOnFocus&&focused} 
	class:focused={focused&&valid === null} 
	class:wrapper={true} >
		<textarea
			on:keyup
			on:keydown
			on:focus={onFocus}
			on:focusout={onFocusOut}
			bind:value={text}
			placeholder={placeholder}
			on:input
			on:click
			name={name}
			bind:this={htmlElement} />
</div>

<style lang="scss">

	.wrapper {
		position: relative;
		
		min-width: fit-content;
		max-width: 100%;

		display: flex;
		flex-direction: row;
		align-items: center;

		font: var(--textAreaFont, 400 0.75rem sans-serif);

		outline: none;
		border: 0.1rem solid var(--textAreaBorder, #c0c0c0);
		border-radius: var(--borderRadius, 0.2rem);

		background-color: var(--textAreaBg, #f0f0f0);

		transition: all ease-in-out 0.2s;

		textarea {
			max-width: 100%;
		}

		&.shadow{
			box-shadow: #00000033 0.2rem 0.2rem 1rem;
		}

		&.focused{
			border: 0.1rem solid var(--textAreaBorderFocus, #99003b);
		}

	}

	textarea {
		
		height: auto;
		
		flex-grow: 1;

		padding: 0.75rem;
		
		font:inherit;

		color: var(--textAreaText, #161616);
		background-color: transparent;

		border: none;
		outline: none;

		&::placeholder {
			opacity: 1;
			color: var(--textAreaPlaceholderText, #606060);
		}
	}

</style>
