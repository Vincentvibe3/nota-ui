<script lang="ts">
	/** 
	 * The underlying <button> 
	*/
	export let htmlElement: HTMLButtonElement | undefined = undefined;

	/** 
	 * Controls the button's style. Can be either "primary", "secondary", "tertiary" or "danger" 
	*/
	export let buttonStyle: "primary" | "secondary" | "tertiary" | "danger" = "primary";
	
	/** 
	 * Controls the button's disabled state 
	 * */
	export let disabled=false;

	/** 
	 * Sets the type of the <button> 
	 * */
	export let type:"button" | "reset" | "submit" | null | undefined
		="button"
	
</script>
<!-- 
	@component Button 

	a button for use in forms or with an event

	Props:
	- buttonStyle ("primary | secondary | tertiary | danger"): Controls the button's style
	- disabled (boolean): Controls the button's disabled state
	- type ("button" | "reset" | "submit" | null | undefined): Sets the type of the `<button>`
	- htmlElement (HTMLButtonElement | undefined): The underlying `<button>`

	Slots:
	- default: Adds text inside the button
	- icon: Adds an icon to the left of the text

	Events:
	- click: passed from the `<button element>`

	Css Variables:
	- btnFont (default: 600 1rem sans-serif):
	 
	- btnPrimaryBg (default: #b3386b):
	- btnPrimaryBgFocus (default: #99003b):
	- btnPrimaryBorder (default: #bf5383):
	- btnPrimaryBorderFocus (default: #a31c54):
	- btnPrimaryText (default: #ffffff):
	- btnPrimaryTextFocus (default: #ffffff):
	- btnPrimaryIconFill (default: #ffffff):
	- btnPrimaryIconStroke (default: #ffffff):
 
	- btnSecondaryBg (default: transparent):
	- btnSecondaryBgFocus (default: #f2c2e3):
	- btnSecondaryText (default: #a31c54):
	- btnSecondaryTextFocus (default: #b3386b):
	- btnSecondaryBorder (default: #a31c54):
	- btnSecondaryIconFill (default: #a31c54):
	- btnSecondaryIconStroke (default: #a31c54):
 
	- btnTertiaryBg (default: transparent):
	- btnTertiaryBgFocus (default: #f2c2e3):
	- btnTertiaryText (default: #b3386b):
	- btnTertiaryTextFocus (default: #b3386b):
	- btnTertiaryIconFill (default: #a31c54):
	- btnTertiaryIconStroke (default: #a31c54):
 
	- btnDisabledBg (default: #f0f0f0):
	- btnDisabledBorder (default: #c0c0c0):
	- btnDisabledText (default: #909090):
	- btnDisabledIconFill (default: #909090):
	- btnDisabledIconStroke (default: #909090):
 
	- btnDangerText (default: #ffffff):
	- btnDangerTextFocus (default: #ffffff):
	- btnDangerBorder (default: #db8484):
	- btnDangerBg (default: #db5c5c):
	- btnDangerBgFocus (default: #db3434):
	- btnDangerBorderFocus (default: #db5c5c):
	- btnDangerIconFill (default: #ffffff):
	- btnDangerIconStroke (default: #ffffff):
 
-->
<button 
	class:primary={buttonStyle==="primary"&&!disabled}
	class:secondary={buttonStyle==="secondary"&&!disabled}
	class:tertiary={buttonStyle==="tertiary"&&!disabled}
	class:danger={buttonStyle==="danger"&&!disabled}
	class:consistentPadding={!$$slots.default&&$$slots.icon}
	disabled={disabled} 
	type={type}
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
		min-height: 1rem;

		box-sizing: content-box;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		
		gap: 0.75rem;

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

			.iconOnly :global( svg ){
				fill: var(--btnDisabledIconFill, #909090);
				stroke: var(--btnDisabledIconStroke, #909090);
			}
		}

		&:active:not(:disabled) {
			box-shadow: #00000033 0.2rem 0.2rem 1rem;
			filter: brightness(85%);
		}
		
	}

	.iconWrapper{
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	
		& :global( * ) {
			height: auto;
			width: 1rem;
		}
	}

	button.tertiary {
		border: var(--btnTertiaryBg, transparent) solid 0.15rem;
		color: var(--btnTertiaryText, #b3386b);
		background-color: var(--btnTertiaryBg, transparent);

		&:hover {
			border: $tertiaryBgFocus solid 0.15rem;
			color: $tertiaryTextFocus;
			background-color: $tertiaryBgFocus;
		}

		&:focus-visible {
			outline: none;
			border: $tertiaryBgFocus solid 0.15rem;
			color: $tertiaryTextFocus;
			background-color: $tertiaryBgFocus;
		}

		&:active {
			border: $tertiaryBgFocus solid 0.15rem;
			background-color: $tertiaryBgFocus;
		}

		.iconOnly :global( svg ){
			fill: var(--btnTertiaryIconFill, #a31c54);
			stroke: var(--btnTertiaryIconStroke, #a31c54);
		}
	}

	button.secondary {
		border: var(--btnSecondaryBorder, #a31c54) solid 0.1rem;
		color: var(--btnSecondaryText, #a31c54);
		background-color: var(--btnSecondaryBg, transparent);

		.iconOnly :global( svg ){
			fill: var(--btnSecondaryIconFill, #a31c54);
			stroke: var(--btnSecondaryIconStroke, #a31c54);
		}

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
			background-color: var(--btnPrimaryBgFocus, #99003b);
			border: var(--btnPrimaryBorderFocus, #a31c54) solid 0.15rem;
		}

		.iconOnly :global( svg ){
			fill: var(--btnPrimaryIconFill, #ffffff);
			stroke: var(--btnPrimaryIconStroke, #ffffff);
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

		.iconOnly :global( svg ){
			fill: var(--btnDangerIconFill, #ffffff);
			stroke: var(--btnDangerIconStroke, #ffffff);
		}
	}

</style>
