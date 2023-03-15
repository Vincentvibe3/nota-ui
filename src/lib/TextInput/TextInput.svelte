<script lang="ts">
	import TextInputImpl from "./TextInputImpl.svelte"
	export let htmlElement: HTMLInputElement | null = null;
	export let name = '';
	export let valid: boolean | null = null;
	export let placeholder = '';
	export let text: string;
	export let shadowOnFocus=false;
	export let captureEnter=false
</script>

<TextInputImpl
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
	bind:captureEnter
	type="text"
	on:click
	on:iconRightClick
	on:input
	on:enterPressed>
	<slot name="iconleft" slot="iconleft" />
	<slot name="iconright" slot="iconright" />
</TextInputImpl>
