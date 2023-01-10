<script lang="ts">
	export let htmlElement: HTMLButtonElement | null = null;
	export let type: String = 'primary';
</script>

{#if type == 'secondary'}
	<button class="secondary" style={$$props.style} bind:this={htmlElement} on:click>
		{#if $$slots.icon}
			<div class="iconWrapper">
				<slot name="icon"/>
			</div>
		{/if}
		<slot/>
	</button>
{:else if type == 'primary'}
	<button class="primary" style={$$props.style} bind:this={htmlElement} on:click>
		{#if $$slots.icon}
			<div class="iconWrapper">
				<slot name="icon"/>
			</div>
		{/if}
		<slot/>
	</button>
{:else if type=="icon"}
	<button class="icon" style={$$props.style} bind:this={htmlElement} on:click>
		<slot name="icon"/>
	</button>
{/if}

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

	button.secondary {
		border: none;
		color: var(--btnSecondaryText, #b3386b);
		background-color: #00000000;
	}

	button.primary {
		border: none;
		outline: none;
		color: var(--btnPrimaryText, #ffffff);
		background-color: var(--btnPrimaryBg, #b3386b);
		border: var(--btnPrimaryBorder, #bf5383) solid 0.15rem;
	}

	button.secondary:hover {
		background-color: var(--btnSecondaryBgFocus, #b3386b26);
	}

	button.secondary:focus-visible {
		background-color: var(--btnSecondaryBgFocus, #b3386b26);
		outline: none;
	}

	button.secondary:active {
		background-color: var(--btnSecondaryBgFocus, #b3386b26);
	}

	button.primary:hover {
		background-color: var(--btnPrimaryBgFocus, #99003b);
		border: var(--btnPrimaryBorderFocus, #a31c54) solid 0.15rem;
	}

	button.primary:focus-visible {
		background-color: var(--btnPrimaryBgFocus, #99003b);
		border: var(--btnPrimaryBorderFocus, #a31c54) solid 0.15rem;
	}

	button:active {
		box-shadow: #00000033 0.2rem 0.2rem 1rem;
		filter: brightness(85%);
	}
</style>
