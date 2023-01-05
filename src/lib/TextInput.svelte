<script lang="ts">
	import TextInputImpl from './TextInputImpl.svelte';
	export let htmlElement: HTMLInputElement | null = null;
	export let name: string = '';
	export let valid: Boolean | null = null;
	export let placeholder = '';
	export let text: string;
</script>

<TextInputImpl
	class={$$restProps.class}
	style={$$props.style}
	on:focus
	on:keydown
	on:keyup
	on:submit
	bind:htmlElement
	bind:text
	bind:name
	bind:valid
	bind:placeholder
	type="text"
	on:click
	on:input>
	<slot name="iconleft" slot="iconleft" />
	<slot name="iconright" slot="iconright" />
</TextInputImpl>
