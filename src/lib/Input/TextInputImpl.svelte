<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let htmlElement: HTMLInputElement | null = null;
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

	const onIconRightClick = () => {
		dispatch('iconRightClick')
	}
</script>

<div 
	id={$$restProps.id} 
	class:valid={valid} 
	class:shadow={shadowOnFocus&&focused} 
	class:invalid={!valid&&valid!=null} 
	class:focused={focused&&valid==null} 
	style={$$restProps.style} 
	class:wrapper={true} 
	class={$$restProps.class}>
	{#if $$slots.iconleft}
		<div class="iconWrapperLeft">
			<slot name="iconleft"/>
		</div>
	{/if}
	{#if type == 'text'}
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
	{:else if type == 'password'}
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

		min-width: fit-content;

		display: flex;
		flex-direction: row;
		align-items: center;

		outline: none;
		border: 0.1rem solid var(--inputBorder, #c0c0c0);
		border-radius: var(--borderRadius, 0.2rem);

		background-color: var(--inputBg, #f0f0f0);
		
		transition: all ease-in-out 0.2s;
		
		font: var(--inputFont, 400 0.75rem sans-serif);
		
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
