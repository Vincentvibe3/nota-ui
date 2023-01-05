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
{/if}

<style>
	button {
		width: fit-content;
		padding: min(0.5rem, 40%) 1.5rem;
		min-height: 2rem;
		border-radius: 0.2rem;
		cursor: pointer;
		font-weight: 600;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		filter: brightness(100%);
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
		height: 50%;
		width: auto;
	}

	button.secondary {
		border: none;
		color: var(--color, #b3386b);
		background-color: #00000000;
	}

	button.primary {
		border: none;
		outline: none;
		color: var(--color, #ffffff);
		background-color: var(--color, #b3386b);
		border: var(--colorOutline, #bf5383) solid 0.15rem;
	}

	button.secondary:hover {
		transition: all ease-in 0.2s;
		background-color: #b3386b26;
	}

	button.secondary:focus-visible {
		transition: all ease-in 0.2s;
		background-color: #b3386b26;
		outline: none;
	}

	button.secondary:active {
		background-color: #b3386b59;
	}

	button.primary:hover {
		transition: all 0.1s;
		filter: brightness(85%);
	}

	button.primary:focus-visible {
		transition: all 0.1s;
		filter: brightness(85%);
	}

	button:active {
		box-shadow: #00000033 0.2rem 0.2rem 1rem;
		transition: all ease-in 0.1s;
		filter: brightness(85%);
	}
</style>
