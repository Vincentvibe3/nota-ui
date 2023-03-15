<script lang="ts">

	import { Button } from "$lib";
	
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
	*/
	export let disabled=false;

	/** 
	 * Sets the type of the <button> 
	*/
	export let type:"button" | "reset" | "submit" | null | undefined
		="button"

</script>
<!-- 
	@component IconButton 

	a button for use in forms or with an event

	Props:
	- buttonStyle ("primary | secondary | tertiary | danger"): controls the button's style
	- disabled (boolean): controls the button's disabled state
	- type ("button" | "reset" | "submit" | null | undefined): the type of the `<button>`
	- htmlElement (HTMLButtonElement | undefined): The underlying `<button>`

	Slots:
	- default: Adds an icon to the left of the text

	Events:
	- click: passed from the `<button element>`

	Css Variables:
	- btnFont (default: 600 1rem sans-serif):
	 
	- btnPrimaryBg (default: #b3386b):
	- btnPrimaryBgFocus (default: #99003b):
	- btnPrimaryBorder (default: #bf5383):
	- btnPrimaryBorderFocus (default: #a31c54):
	- btnPrimaryIconFill (default: #ffffff):
	- btnPrimaryIconStroke (default: #ffffff):
 
	- btnSecondaryBg (default: transparent):
	- btnSecondaryBgFocus (default: #f2c2e3):
	- btnSecondaryBorder (default: #a31c54):
	- btnSecondaryIconFill (default: #a31c54):
	- btnSecondaryIconStroke (default: #a31c54):
 
	- btnTertiaryBg (default: transparent):
	- btnTertiaryBgFocus (default: #f2c2e3):
	- btnTertiaryIconFill (default: #a31c54):
	- btnTertiaryIconStroke (default: #a31c54):
 
	- btnDisabledBg (default: #f0f0f0):
	- btnDisabledBorder (default: #c0c0c0):
	- btnDisabledIconFill (default: #909090):
	- btnDisabledIconStroke (default: #909090):
 
	- btnDangerBorder (default: #db8484):
	- btnDangerBg (default: #db5c5c):
	- btnDangerBgFocus (default: #db3434):
	- btnDangerBorderFocus (default: #db5c5c):
	- btnDangerIconFill (default: #ffffff):
	- btnDangerIconStroke (default: #ffffff):

-->
<Button
	bind:buttonStyle={buttonStyle}
	bind:disabled
	bind:htmlElement
	bind:type
	on:click>
	<slot slot="icon"></slot>
</Button>