<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let htmlElement: HTMLTextAreaElement | null = null;
	export let name: string = '';
	export let valid: Boolean | null = null;
	export let placeholder = '';
	export let text: string;
	export let type: string = 'text';

	let focused:boolean=false;
	export let shadowOnFocus:boolean=false;


	const dispatch = createEventDispatcher();

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

</script>

<div 
	id={$$restProps.id} 
	class:shadow={shadowOnFocus&&focused} 
	class:focused={focused&&valid==null} 
	style={$$restProps.style} 
	class:wrapper={true} 
	class={$$restProps.class}>
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

<style>

	.wrapper {
		position: relative;
		outline: none;
		border: 0.1rem solid var(--textAreaBorder, #c0c0c0);
		background-color: var(--textAreaBg, #f0f0f0);
		border-radius: var(--borderRadius, 0.2rem);
		transition: all ease-in-out 0.2s;
		display: flex;
		flex-direction: row;
		align-items: center;
		font: var(--textAreaFont, 400 0.75rem sans-serif);
		transition: all ease-in-out 0.2s;
		min-width: fit-content;
	}

	.wrapper.shadow{
		box-shadow: #00000033 0.2rem 0.2rem 1rem;
	}

	textarea {
		flex-grow: 1;
		height: auto;
		padding: 0.75rem;
		background-color: transparent;
		border: none;
		outline: none;
		color: var(--textAreaText, #161616);
		font:inherit;
	}

	.wrapper.focused{
		border: 0.1rem solid var(--textAreaBorderFocus, #99003b);
	}


	textarea::placeholder {
		opacity: 1;
		color: var(--textAreaPlaceholderText, #606060);
	}
</style>
