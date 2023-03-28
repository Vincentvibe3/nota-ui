<script lang="ts">

	/**
	 * html tag to be used
	 */
	export let tag:string;
	
	/**
	 * toggles on heading1 style
	*/
	export let heading1=false
	
	/**
	 * toggles on heading2 style
	*/
	export let heading2=false
	
	/**
	 * toggles on heading3 style
	*/
	export let heading3=false
	
	/**
	 * toggles on heading4 style
	*/
	export let heading4=false
	
	/**
	 * toggles on heading5 style
	*/
	export let heading5=false
	
	/**
	 * toggles on heading6 style
	*/
	export let heading6=false
	
	/**
	 * toggles on subtitle style
	*/
	export let subtitle=false
	
	/**
	 * toggles on body style
	*/
	export let body=false
	
	/**
	 * toggles on body2 style
	*/
	export let body2=false
	
	/**
	 * toggles on buttons style
	*/
	export let buttons=false
	
	/**
	 * toggles on caption style
	*/
	export let caption=false
	
	/**
	 * object that will spread additional attributes need for the html tag
	*/
	export let attributes:object = {}
</script>
<!-- 
	@component Text

	Component to display prestyled text based on the styles in the global stylesheet

	Props:
	- tag (string): html tag to be used
	- heading1 (boolean): toggles on heading1 style
	- heading2 (boolean): toggles on heading2 style
	- heading3 (boolean): toggles on heading3 style
	- heading4 (boolean): toggles on heading4 style
	- heading5 (boolean): toggles on heading5 style
	- heading6 (boolean):toggles on heading6 style
	- subtitle (boolean): toggles on subtitle style
	- body (boolean): toggles on body style
	- body2 (boolean): toggles on body2 style
	- buttons (boolean): toggles on buttons style
	- caption (boolean): toggles on caption style
	- attributes (object): object that will spread additional attributes need for the html tag

	
 -->
<svelte:element this={tag}
class:heading1
class:heading2
class:heading3
class:heading4
class:heading5
class:heading6
class:subtitle
class:body
class:body2
class:buttons
class:caption
{...attributes}>
	<slot></slot>
</svelte:element>
<style lang="scss">
	.heading1 {
		font: var(--heading1);
	}
	.heading2 {
		font: var(--heading2);
	}
	.heading3 {
		font: var(--heading3);
	}
	.heading4 {
		font: var(--heading4);
	}
	.heading5 {
		font: var(--heading5);
	}
	.heading6 {
		font: var(--heading6);
	}

	.subtitle {
		font: var(--subtitle);
	}

	.body {
		font: var(--body);
	}

	.body2 {
		font: var(--body2);
	}

	.buttons {
		font:var(--buttons)
	}

	.caption {
		font:var(--caption)
	}

</style>