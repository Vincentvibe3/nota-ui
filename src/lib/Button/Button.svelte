<script lang="ts">
	/** Native <button> element */
	export let htmlElement: HTMLButtonElement | undefined = undefined;
	/** Button type for styling. Can be either "primary", "secondary", "tertiary" or "danger" */
	export let buttonStyle: "primary" | "secondary" | "tertiary" | "danger" = "primary";
	/** Disabled state of the button */
	export let disabled=false;
	/** <button> element's type */
	export let type:"button" | "reset" | "submit" | null | undefined
		="button"
	
</script>
<!-- 
	@component Button 

	- type: "primary | secondary | tertitary | danger"
-->
<button 
	class:primary={buttonStyle=="primary"&&!disabled}
	class:secondary={buttonStyle=="secondary"&&!disabled}
	class:tertiary={buttonStyle=="tertiary"&&!disabled}
	class:danger={buttonStyle=="danger"&&!disabled}
	class:consistentPadding={!$$slots.default&&$$slots.icon}
	id={$$restProps.id} 
	disabled={disabled} 
	type={type}
	{...$$restProps}
	bind:this={htmlElement} 
	on:click>
	{#if $$slots.icon}
		<div class="iconWrapper" class:iconOnly={!$$slots.default}>
			<slot name="icon"/>
		</div>
	{/if}
	<slot/>
</button>

<style lang="scss">

	// To minimize repetition of defaults
	// only repeated variables are put here
	$tertiaryTextFocus: var(--btnTertiaryTextFocus, #b3386b);
	$tertiaryBgFocus: var(--btnTertiaryBgFocus, #f2c2e3);
	$secondaryTextFocus: var(--btnSecondaryTextFocus, #b3386b);
	$secondaryBgFocus: var(--btnSecondaryBgFocus, #f2c2e3);

	button {
		width: fit-content;
		min-height: 2rem;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;		

		padding: min(0.5rem, 40%) 1.5rem;

		font: var(--btnFont, 600 1rem sans-serif);
		
		white-space: nowrap;

		border-radius: var(--borderRadius, 0.2rem);

		cursor: pointer;

		transition: all ease-in-out 0.2s;

		&.consistentPadding {
			width: fit-content;
			height: fit-content;
			padding:  min(0.5rem, 40%);
			aspect-ratio: 1 / 1;
			border-radius: 50%;
		}
	
		&:disabled {
			background-color: var(--btnDisabledBg, #f0f0f0);
			color: var(--btnDisabledText, #909090);

			border: var(--btnDisabledBorder, #c0c0c0) solid 0.15rem;
			cursor:not-allowed;
		}

		&:active:not(:disabled) {
			box-shadow: #00000033 0.2rem 0.2rem 1rem;
			filter: brightness(85%);
		}

		&.icon {
			padding: min(0.5rem, 40%);

			outline: none;
			border: none;
			border-radius: 100%;

			background-color: transparent;

			aspect-ratio: 1;

			&:hover{
				background-color: #3b3b3b26;
			}
		}
		
	}

	.iconWrapper{
		height: 100%;
		margin-left: -0.5rem;
		margin-right: 0.75rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		&.iconOnly {
			margin: 0px;
		}
	
		& :global( * ) {
			height: auto;
			width: 1rem;
		}
	}

	button.tertiary {
		border: none;
		color: var(--btnTertiaryText, #b3386b);
		background-color: var(--btnTertiaryBg, transparent);

		&:hover {
			color: $tertiaryTextFocus;
			background-color: $tertiaryBgFocus;
		}

		&:focus-visible {
			outline: none;
			color: $tertiaryTextFocus;
			background-color: $tertiaryBgFocus;
		}

		&:active {
			background-color: $tertiaryBgFocus;
		}
	}

	button.secondary {
		border: var(--btnSecondaryBorder, #a31c54) solid 0.1rem;
		color: var(--btnSecondaryText, #a31c54);
		background-color: var(--btnSecondaryBg, transparent);

		&:hover {
			color: $secondaryTextFocus;
			background-color: $secondaryBgFocus;
		}

		&:focus-visible {
			outline: none;
			color: $secondaryTextFocus;
			background-color: $secondaryBgFocus;
		}

		&:active {
			background-color: $secondaryBgFocus;
		}

	}

	button.primary {
		outline: none;
		border: var(--btnPrimaryBorder, #bf5383) solid 0.15rem;
		color: var(--btnPrimaryText, #ffffff);
		background-color: var(--btnPrimaryBg, #b3386b);

		&:hover, &:focus-visible {
			color: var(--btnPrimaryTextFocus, #ffffff);
			background-color: var(--btnPrimaryBgFocus, #99003b);;
			border: var(--btnPrimaryBorderFocus, #a31c54) solid 0.15rem;
		}
	}

	button.danger {
		user-select:none;
		border: var(--btnDangerBorder, #db8484) solid 0.15rem;
		outline: none;
		color: var(--btnDangerText, #ffffff);
		background-color: var(--btnDangerBg, #db5c5c);

		&:focus-visible, &:hover {
			color: var(--btnDangerTextFocus, #ffffff);
			background-color: var(--btnDangerBgFocus, #db3434);
			border: var(--btnDangerBorderFocus, #db5c5c) solid 0.15rem;
		}
	}

</style>
