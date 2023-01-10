<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	export let htmlElement: HTMLInputElement | null = null;
	export let name: string = '';
	export let valid: Boolean | null = null;
	export let placeholder = '';
	export let text: string;
	export let type: string = 'text';

	let iconLeft: HTMLDivElement;
	let iconRight: HTMLDivElement;
	let focused:boolean=false;


	const dispatch = createEventDispatcher();

	onMount(() => {
		if (iconLeft.hasChildNodes() && htmlElement != null) {
			htmlElement.style.paddingLeft = '2.5rem';
		} else {
			iconLeft.remove();
		}
		if (iconRight.hasChildNodes() && htmlElement != null) {
			htmlElement.style.paddingRight = '2rem';
		} else {
			iconRight.remove();
		}
	});

	const onFocus = () => {
		if (valid == null) {
			focused=true
		}
		dispatch('focus');
	};

	const onFocusOut = () => {
		if (valid == null) {
			focused=false
		}
	};

	const onIconRightClick = () => {
		dispatch('iconRightClick')
	}
</script>

<div class:valid={valid} class:invalid={!valid&&valid!=null} class:focused={focused&&valid==null} style={$$props.style} class="wrapper">
	{#if type == 'text'}
		<input
			class={$$restProps.class}
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
	{:else if type == 'password'}
		<input
			class={$$restProps.class}
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
	{#if $$slots.iconleft}
		<div bind:this={iconLeft} class="iconWrapperLeft">
			<slot name="iconleft" />
		</div>
	{/if}
	{#if $$slots.iconright}
		<div on:click={onIconRightClick} bind:this={iconRight} class="iconWrapperRight">
			<slot name="iconright" />
		</div>
	{/if}
</div>

<style>

	.wrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: fit-content;
		font: var(--inputFont, 400 1rem sans-serif);
	}

	.iconWrapperLeft {
		position: absolute;
		height: 1rem;
		padding: 00.75rem;
	}

	.iconWrapperLeft:global( * ) {
		height: 1rem;
		width: auto;
	}

	.iconWrapperRight {
		position: absolute;
		height: 1rem;
		right: 0.75rem;
		padding: 0.25rem;
		cursor: pointer;
	}

	.iconWrapperRight:hover {
		background-color: var(--inputIconBtnBg, #c0c0c0);
		border-radius: 100vw;
	}

	.iconWrapperRight:global( * ) {
		height: 1rem;
		width: auto;
	}

	.wrapper {
		position: relative;
		outline: none;
		border: 0.1rem solid var(--inputBorder, #c0c0c0);
		background-color: var(--inputBg, #f0f0f0);
		border-radius: 0.2rem;
		transition: all ease-in-out 0.2s;
	}

	input {
		width: 100%;
		height: 100%;
		padding: 0.75rem;
		background-color: transparent;
		border: none;
		outline: none;
		color: var(--inputText, #161616);
		font:inherit;
	}

	.wrapper.focused{
		border: 0.1rem solid var(--inputBorderFocus, #99003b);
	}

	.wrapper.invalid{
		border: 0.1rem solid var(--inputBorderInvalid, #db3434);
	}

	.wrapper.valid{
		border: 0.1rem solid var(--inputBorderValid, #36b32b);
	}

	input::placeholder {
		opacity: 1;
		color: var(--inputPlaceholderText, #606060);
	}
</style>
