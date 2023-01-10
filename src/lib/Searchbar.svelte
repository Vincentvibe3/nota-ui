<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import TextInput from './TextInput.svelte';

	let mounted = false;
	export let text = '';
	let keyboardNavSelect = -1;
	let optionsWrapper: HTMLDivElement;
	let active = false;
	let dropdownWrapper:HTMLDivElement;
	let selectionChosen: boolean = false;
	let submit: boolean = false;
	let textInputHtmlElement: HTMLInputElement;
	export let htmlElement: HTMLSelectElement | null = null;
	export let suggestions: Array<any> = [];
	export let placeholder: string = '';
	const dispatch = createEventDispatcher();

	const selectOption = (optionText: string) => {
		text = optionText;
		active = false;
		selectionChosen = true;
		textInputHtmlElement.focus();
		dispatch('optionClick', { text: optionText });
	};

	onMount(()=>{
		mounted=true
	})

	$: if (active && mounted) {
		document.addEventListener('keydown', handleKeyPresses);
		document.addEventListener("click", clickListener)
	} else if (mounted && !active) {
		document.removeEventListener('keydown', handleKeyPresses);
		document.removeEventListener("click", clickListener)
	}

	//to close dropdown
	const clickListener = (event: MouseEvent) => {
		let target = event.target as HTMLElement;
		let isNotDropdownButton = !dropdownWrapper.contains(target);
		active = !(target != null && isNotDropdownButton);
	};

	const handleKeyPresses = (event: KeyboardEvent) => {
		//from MDN Docs
		switch (event.key) {
			case 'Down': // IE/Edge specific value
			case 'ArrowDown':
				// Do something for "down arrow" key press.
				if (keyboardNavSelect < suggestions.length - 1) {
					keyboardNavSelect += 1;
					optionsWrapper.scroll({
						top: (optionsWrapper.clientHeight / suggestions.length) * keyboardNavSelect
					});
				}
				break;
			case 'Up': // IE/Edge specific value
			case 'ArrowUp':
				// Do something for "up arrow" key press.
				if (keyboardNavSelect > 0) {
					keyboardNavSelect -= 1;
					optionsWrapper.scroll({
						top: (optionsWrapper.clientHeight / suggestions.length) * keyboardNavSelect
					});
				}
				break;
			case 'Enter':
				// Do something for "enter" or "return" key press.
				if (keyboardNavSelect < suggestions.length && keyboardNavSelect >= 0) {
					selectOption(suggestions[keyboardNavSelect]);
				}
				keyboardNavSelect = -1;
				active = false;
				selectionChosen = true;
				textInputHtmlElement.focus();
				break;
			case 'Esc': // IE/Edge specific value
			case 'Escape':
			case 'Tab':
				// Do something for "esc" key press.
				active = false;
				break;
			default:
				return; // Quit when this doesn't handle the key event.
		}
	};

	export let handleSubmit = (event: KeyboardEvent) => {
		if (event.key == 'Enter' && text.trim() != '' && keyboardNavSelect == -1) {
			submit = true;
			active = false;
			selectionChosen = false;
			textInputHtmlElement.blur();
			dispatch('submit', {
				text: text
			});
		}
	};

	const handleInput = (type: string) => {
		submit = false;
		if (type == 'input') {
			keyboardNavSelect = -1;
			selectionChosen = false;
		} else {
			active = true;
		}
		dispatch('input', {
			text: text
		});
	};

	$: if (text != '' && suggestions.length != 0 && !selectionChosen && !submit) {
		active = true;
	} else {
		active = false;
	}
</script>

<div
	bind:this={dropdownWrapper}
	style={$$props.style}
	class="wrapper {$$props.class}">
	{#if active}
		<div bind:this={optionsWrapper} class="options">
			{#each suggestions as option}
				<button
					on:click={() => {
						selectOption(option);
					}}
					class="option" class:selected={option == suggestions[keyboardNavSelect]}>
					<span>{option}</span>
				</button>
			{/each}
		</div>
	{/if}
	<TextInput
		style="width:100%;
		margin:0px;
		z-index: 1;
		--inputBg:var(--searchBg);
		--inputBorder:var(--searchBorder);
		--inputText:var(--searchText);
		--inputIconBtnBg:var(--searchIconBtnBg);
		--inputPlaceholderText:var(--searchPlaceholderText);
		--inputIconColor:var(--searchIconColor);
		--inputBorderFocus:var(--searchBorderFocus);
		--inputBorderValid:var(--searchBorderValid);
		--inputBorderInvalid:var(--searchBorderInvalid);
		--inputFont:var(--searchFont);"
		class="shadow"
		placeholder={placeholder}
		on:keydown={handleSubmit}
		on:focus={() => {
			handleInput('focus');
		}}
		on:input={() => {
			handleInput('input');
		}}
		on:iconRightClick
		bind:text
		bind:htmlElement={textInputHtmlElement}>
		<slot name="iconleft" slot="iconleft" />
		<slot name="iconright" slot="iconright" />
	</TextInput>
</div>

<style>
	.wrapper :global(.shadow:focus) {
		box-shadow: #00000033 0.2rem 0.2rem 1rem;
	}

	.wrapper :global(.shadow){
		transition: all ease-in-out 0.2s;
	}

	.wrapper {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		border-radius: 0.2rem;
		min-height: 2.5rem;
		color: var(--searchText, #161616);
		font: var(--searchFontOption, 400 0.75rem sans-serif)
	}

	.options {
		max-height: 20rem;
		overflow-y: scroll;
		position: absolute;
		top: calc(100% - 0.6rem);
		width: 100%;
		padding-bottom: 00.5rem;
		border-radius: 0.2rem;
		outline: 0.1rem solid var(--searchBorder, #c0c0c0);
		background-color: var(--searchBg, #f0f0f0);
		padding-top: 0.6rem;
		z-index: 1;
	}

	.option {
		width: 100%;
		background-color: inherit;
		outline: none;
		border: none;
		padding: 0.75rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		cursor: pointer;
		min-height: 2.5rem;
		transition: all ease-in-out 0.1s;
	}

	.option.selected {
		filter: brightness(75%);
	}

	.option:hover {
		filter: brightness(85%);
	}

	span {
		max-width: calc(100% - 2rem);
		font-size: 0.8rem;
		text-overflow: ellipsis;
		overflow: hidden;
		text-align: left;
		white-space: nowrap;
		pointer-events: none;
	}

</style>
