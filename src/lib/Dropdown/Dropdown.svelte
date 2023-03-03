<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;
	let optionText = '';
	let dropdownWrapper: HTMLDivElement;
	let keyboardNavSelect = 0;
	let active = false;
	let options: Array<HTMLOptionElement> = [];
	let optionsWrapper: HTMLDivElement;

	/** Native <select> element */
	export let htmlElement: HTMLSelectElement | null = null;

	const onClick = () => {
		active = !active;
	};

	

	onMount(() => {
		mounted = true;
		if (htmlElement != null) {
			options = Array.from(htmlElement.options);
		}
	});

	$: if (htmlElement != null) {
		let index = htmlElement.selectedIndex;
		optionText = htmlElement.options[index].text;
		options = Array.from(htmlElement.options);
	}

	const selectOption = (index: number) => {
		if (htmlElement != null) {
			htmlElement.selectedIndex = index;
			active = false;
		}
	};

	$: if (active && mounted) {
		document.addEventListener('keydown', handleKeyPresses);
		document.addEventListener('click', clickListener);
	} else if (mounted) {
		document.removeEventListener('keydown', handleKeyPresses);
		document.removeEventListener('click', clickListener);
	}

	//to close dropdown
	const clickListener = (event: MouseEvent) => {
		let target = event.target as HTMLElement;
		let isNotDropdownButton = !dropdownWrapper.contains(target);
		active = !(target != null && isNotDropdownButton);
	};

	const handleKeyPresses = (event: KeyboardEvent) => {
		//from MDN Docs
		if (htmlElement == null) {
			return;
		}
		switch (event.key) {
			case 'Down': // IE/Edge specific value
			case 'ArrowDown':
				// Do something for "down arrow" key press.
				if (keyboardNavSelect < htmlElement.options.length - 1) {
					keyboardNavSelect += 1;
					optionsWrapper.scroll({
						top: (optionsWrapper.clientHeight / options.length) * keyboardNavSelect
					});
				}
				break;
			case 'Up': // IE/Edge specific value
			case 'ArrowUp':
				// Do something for "up arrow" key press.
				if (keyboardNavSelect > 0) {
					keyboardNavSelect -= 1;
					optionsWrapper.scroll({
						top: (optionsWrapper.clientHeight / options.length) * keyboardNavSelect
					});
				}
				break;
			case 'Enter':
				// Do something for "enter" or "return" key press.
				if (keyboardNavSelect < htmlElement.options.length && keyboardNavSelect >= 0) {
					htmlElement.selectedIndex = keyboardNavSelect;
				}
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
</script>

<div id={$$restProps.id} bind:this={dropdownWrapper} style={$$restProps.style} class:wrapper={true} class={$$restProps.class}>
	<select bind:this={htmlElement}>
		<slot />
	</select>
	{#if active}
		<div bind:this={optionsWrapper} class="options">
			{#each options as option}
				<button
					on:click={() => {
						selectOption(option.index);
					}}
					class="option" class:keyboard-hover={option.index == keyboardNavSelect} class:selected={option.selected}>
					<span>{option.text}</span>
				</button>
			{/each}
		</div>
	{/if}
	<button on:click={onClick} class="dropdown_impl" class:active>
		<span>{optionText}</span>
		{#if active}
			<svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 256 256" ><rect width="256" height="256" stroke="none" fill="none" /><polyline points="48 160 128 80 208 160" fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-width="24" /></svg>
		{:else}
			<svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 256 256" ><rect width="256" height="256" stroke="none" fill="none" /><polyline points="208 96 128 176 48 96" fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-width="24" /></svg>
		{/if}
	</button>
</div>

<style lang="scss">


	select {
		display: none;
	}

	span {
		max-width: calc(100% - 2rem);

		font: var(--dropdownFontOption, 400 0.75rem sans-serif);
		color: inherit;
		text-align: left;
		white-space: nowrap;
		text-overflow: ellipsis;

		overflow: hidden;
		
		pointer-events: none;
	}

	.wrapper {
		position: relative;

		min-height: 2.5rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

		border-radius: var(--borderRadius, 0.2rem);

		color: var(--dropdownText, #161616);
	}

	.dropdown_impl {
		position: absolute;

		width: 100%;
		height: 100%;
		min-height: 2.5rem;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		overflow: hidden;

		z-index: 1;

		padding: 0.75rem;

		border: none;
		border-radius: var(--borderRadius, 0.2rem);
		outline: 0.1rem solid var(--dropdownBorder, #c0c0c0);

		color:inherit;
		font: var(--dropdownFont, 400 0.75rem sans-serif);
		text-overflow: ellipsis;
		text-align: left;

		transition-property: outline-color, filter, box-shadow;
		transition-duration: 00.2s;
		transition-timing-function: ease-in-out;

		background-color: var(--dropdownBg, #f0f0f0);

		cursor: pointer;

		svg {
			pointer-events: none;
		}

		&:focus {
			outline-color: var(--dropdownBorderFocus, #99003b);
		}

		&:hover {
			filter: brightness(85%);
		}

		&.active {
			z-index: 2;
			box-shadow: #00000033 0.2rem 0.2rem 1rem;
			outline-color: var(--dropdownBorderFocus, #99003b);
		}

		.arrow {
			width: 1rem;
			height: 1rem;

			fill: var(--dropdownText, #161616);
			stroke: var(--dropdownText, #161616);

			pointer-events: none;
		}
	}

	.options {
		position: absolute;
		top: calc(100% - 0.6rem);
		
		width: 100%;
		max-height: 20rem;

		overflow-y: scroll;

		z-index: 2;

		padding: {
			bottom: 00.5rem;
			top: 0.6rem;
		}
		
		border-bottom-right-radius: var(--borderRadius, 0.2rem);
		border-bottom-left-radius: var(--borderRadius, 0.2rem);

		outline: 0.1rem solid var(--dropdownBorder, #c0c0c0);

		background-color: var(--dropdownBg, #f0f0f0);

		box-shadow: #00000033 0.2rem 0.2rem 1rem;
	}

	.option {
		width: 100%;
		min-height: 2.5rem;

		display: flex;
		flex-direction: row;
		align-items: center;

		padding: 0.75rem;

		background-color: inherit;
		color: inherit;

		outline: none;
		border: none;
		
		cursor: pointer;
		
		transition: all ease-in-out 0.1s;

		&.selected {
			filter: brightness(75%);
		}

		&.keyboard-hover {
			filter: brightness(75%);
		}

		&:hover {
			filter: brightness(85%);
		}
	}


</style>
