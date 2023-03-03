<script lang="ts">

	import { Button } from "$lib";
	/** Native <button> element */
	export let htmlElement: HTMLButtonElement | undefined = undefined;
	/** Button type for styling. Can be either "primary", "secondary", "tertiary" or "danger" */
	export let type: "primary" | "secondary" | "tertiary" | "danger" = "primary";
	/** Disabled state of the button */
	export let disabled=false;

</script>
<Button
	bind:buttonStyle={type}
	bind:disabled
	bind:htmlElement
	on:click>
	<slot slot="icon"></slot>
</Button>