<script lang="ts">
	import TextInputImpl from './TextInputImpl.svelte';

	/**
	 * Native password type <input> element 
	 */
	export let htmlElement: HTMLInputElement | undefined = undefined;
	/**
	 * Name of the input for forms.
	 */
	export let name = "";
	/**
	 * Boolean to style input field when contents are valid.
	 */
	export let valid: boolean | null = null;
	/**
	 * Placeholder text when nothing was typed.
	 */
	export let placeholder = '';
	/**
	 * Text contained in the field
	 */
	export let text: string;
	/**
	 * Toggle to switch to plain text instead of password input.
	 */
	export let showText = false;

	let type = 'password';

	$: if (showText) {
		type = 'text';
	} else {
		type = 'password';
	}

	export let captureEnter=false
</script>

<TextInputImpl
	on:focus
	on:keydown
	on:keyup
	bind:htmlElement
	bind:text
	bind:name
	bind:valid
	bind:placeholder
	bind:captureEnter
	on:enterPressed
	type={type}
	on:click
	on:iconRightClick
	on:input>
	
	<svelte:fragment slot="iconleft">
		{#if $$slots.iconleft}
			<slot name="iconleft" />
		{/if}
	</svelte:fragment>
	<svelte:fragment slot="iconright">
		{#if $$slots.iconright}
			<slot name="iconright" />
		{/if}
	</svelte:fragment>
</TextInputImpl>
