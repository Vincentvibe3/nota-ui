<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let htmlElement: HTMLTextAreaElement | null = null;
	export let name = '';
	export let valid: boolean | null = null;
	export let placeholder = '';
	export let text: string;

	let focused=false;
	export let shadowOnFocus=false;


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
