<script lang="ts">
	export let htmlElement: HTMLButtonElement | null = null;
	export let type: string = 'primary';
	export let disabled:boolean=false;
	
</script>

<button 
	class:primary={type=="primary"}
	class:secondary={type=="secondary"}
	class:tertiary={type=="tertiary"}
	class:danger={type=="danger"}
	id={$$restProps.id} 
	disabled={disabled} 
	class={$$restProps.class} 
	style={$$restProps.style} 
	bind:this={htmlElement} 
	on:click>
	{#if $$slots.icon}
		<div class="iconWrapper">
			<slot name="icon"/>
		</div>
	{/if}
	<slot/>
</button>

<style>
	button {
		width: fit-content;
		padding: min(0.5rem, 40%) 1.5rem;
		min-height: 2rem;
		border-radius: 0.2rem;
		cursor: pointer;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;		
		transition: all ease-in-out 0.2s;
		font: var(--btnFont, 600 1rem sans-serif);
		white-space: nowrap;
	}

	button.primary:disabled, button.secondary:disabled, 
	button.tertiary:disabled, button.danger:disabled, 
	button.primary:disabled:hover, button.secondary:disabled:hover, 
	button.tertiary:disabled:hover, button.danger:disabled:hover,
	button.primary:disabled:focus-visible, button.secondary:disabled:focus-visible, 
	button.tertiary:disabled:focus-visible, button.danger:disabled:focus-visible,
	button.primary:disabled:active, button.secondary:disabled:active, 
	button.tertiary:disabled:active, button.danger:disabled:active{
		background-color: var(--btnDisabledBg, #f0f0f0);
		border: var(--btnDisabledBorder, #c0c0c0) solid 0.15rem;
		color: var(--btnDisabledText, #909090);
	}


	button.icon {
		outline: none;
		border: none;
		aspect-ratio: 1;
		border-radius: 100%;
		padding: min(0.5rem, 40%);
		background-color: transparent;
	}

	button.icon:hover{
		background-color: #3b3b3b26;
	}

	.iconWrapper{
		height: 100%;
		margin-left: -0.5rem;
		margin-right: 0.75rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.iconWrapper:global( * ) {
		height: auto;
		width: 1rem;
	}

	button.tertiary {
		border: none;
		color: var(--btnTertiaryText, #b3386b);
		background-color: var(--btnTertiaryBg, transparent);
	}

	button.tertiary:hover {
		background-color: var(--btnTertiaryBgFocus, #f2c2e3);
	}

	button.tertiary:focus-visible {
		background-color: var(--btnTertiaryBgFocus, #f2c2e3);
		outline: none;
	}

	button.tertiary:active {
		background-color: var(--btnTertiaryBgFocus, #f2c2e3);
	}

	button.secondary {
		border: var(--btnSecondaryBorder, #a31c54) solid 0.1rem;
		color: var(--btnSecondaryText, #a31c54);
		background-color: var(--btnSecondaryBg, transparent);
	}

	button.secondary:hover {
		background-color: var(--btnSecondaryBgFocus, #f2c2e3);
	}

	button.secondary:focus-visible {
		background-color: var(--btnSecondaryBgFocus, #f2c2e3);
		outline: none;
	}

	button.secondary:active {
		background-color: var(--btnSecondaryBgFocus, #f2c2e3);
	}

	button.primary {
		outline: none;
		color: var(--btnPrimaryText, #ffffff);
		background-color: var(--btnPrimaryBg, #b3386b);
		border: var(--btnPrimaryBorder, #bf5383) solid 0.15rem;
	}

	button.primary:hover {
		background-color: var(--btnPrimaryBgFocus, #99003b);
		border: var(--btnPrimaryBorderFocus, #a31c54) solid 0.15rem;
	}

	button.primary:focus-visible {
		background-color: var(--btnPrimaryBgFocus, #99003b);
		border: var(--btnPrimaryBorderFocus, #a31c54) solid 0.15rem;
	}

	button.danger {
		border: none;
		outline: none;
		color: var(--btnDangerText, #ffffff);
		background-color: var(--btnDangerBg, #db5c5c);
		border: var(--btnDangerBorder, #db8484) solid 0.15rem;
	}

	button.danger:hover {
		background-color: var(--btnDangeryBgFocus, #db3434);
		border: var(--btnDangerBorderFocus, #db5c5c) solid 0.15rem;
	}

	button.danger:focus-visible {
		background-color: var(--btnDangerBgFocus, #db3434);
		border: var(--btnDangerBorderFocus, #db5c5c) solid 0.15rem;
	}

	button:active:not(:disabled) {
		box-shadow: #00000033 0.2rem 0.2rem 1rem;
		filter: brightness(85%);
	}
</style>
