<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;
	let optionText: string = '';
	let dropdownWrapper: HTMLDivElement;
	let keyboardNavSelect = 0;
	let active = false;
	let options: Array<HTMLOptionElement> = [];
	let optionsWrapper: HTMLDivElement;
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

<div bind:this={dropdownWrapper} style={$$props.style} class="wrapper {$$props.class}">
	<select bind:this={htmlElement}>
		<slot />
	</select>
	{#if active}
		<div bind:this={optionsWrapper} class="options">
			{#each options as option}
				{#if option.selected || option.index == keyboardNavSelect}
					<button
						on:click={() => {
							selectOption(option.index);
						}}
						class="option selected">
						<span>{option.text}</span>
					</button>
				{:else}
					<button
						on:click={() => {
							selectOption(option.index);
						}}
						class="option">
						<span>{option.text}</span>
					</button>
				{/if}
			{/each}
		</div>
	{/if}
	<button on:click={onClick} class="dropdown_impl" class:active>
		<span>{optionText}</span>
		{#if active}
			<svg on:click={onClick} class="arrow" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256" ><rect width="256" height="256" fill="none" /><polyline points="48 160 128 80 208 160" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" /></svg>
		{:else}
			<svg class="arrow active" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256" ><rect width="256" height="256" fill="none" /><polyline points="208 96 128 176 48 96" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" /></svg>
		{/if}
	</button>
</div>

<style>
	select {
		display: none;
	}

	.wrapper {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		border-radius: 0.2rem;
		min-height: 2.5rem;
	}

	.dropdown_impl {
		position: absolute;
		width: 100%;
		min-height: 2.5rem;
		height: 100%;
		padding: 0.75rem;
		background-color: #f0f0f0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border-radius: 0.2rem;
		outline: 0.1rem solid #c0c0c0;
		cursor: pointer;
		border: none;
		text-overflow: ellipsis;
		overflow: hidden;
		text-align: left;
		z-index: 1;
	}

	.dropdown_impl:focus {
		outline-color: #bf5383;
	}

	.dropdown_impl:hover {
		transition: all ease-in-out 0.1s;
		filter: brightness(85%);
	}

	.dropdown_impl.active {
		box-shadow: #00000033 0.2rem 0.2rem 1rem;
		transition: all ease-in-out 0.2s;
		outline-color: #bf5383;
	}

	.options {
		position: absolute;
		max-height: 20rem;
		overflow-y: scroll;
		position: absolute;
		top: calc(100% - 0.6rem);
		width: 100%;
		padding-bottom: 00.5rem;
		border-radius: 0.2rem;
		outline: 0.1rem solid #c0c0c0;
		background-color: #f0f0f0;
		padding-top: 0.6rem;
		z-index: 1;
	}

	.option {
		width: 100%;
		background-color: #f0f0f0;
		outline: none;
		border: none;
		padding: 0.75rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		cursor: pointer;
		min-height: 2.5rem;
	}

	.option.selected {
		filter: brightness(85%);
	}

	.option:hover {
		filter: brightness(85%);
		transition: all ease-in-out 0.1s;
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

	svg {
		width: 1rem;
		height: 1rem;
		pointer-events: none;
	}
</style>
