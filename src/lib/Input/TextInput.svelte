<script lang="ts">
	import TextInputImpl from './TextInputImpl.svelte';
	export let htmlElement: HTMLInputElement | null = null;
	export let name: string = '';
	export let valid: Boolean | null = null;
	export let placeholder = '';
	export let text: string;
	export let shadowOnFocus:boolean=false;
</script>

<TextInputImpl
	class={$$restProps.class}
	style={$$props.style}
	id={$$restProps.id}
	on:focus
	on:keydown
	on:keyup
	on:submit
	bind:htmlElement
	bind:text
	bind:name
	bind:valid
	bind:placeholder
	bind:shadowOnFocus
	type="text"
	on:click
	on:iconRightClick
	on:input>
	<slot name="iconleft" slot="iconleft" />
	<slot name="iconright" slot="iconright" />
</TextInputImpl>
