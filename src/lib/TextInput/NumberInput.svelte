<script lang="ts">
	import TextInputImpl from "./TextInputImpl.svelte"
	export let htmlElement: HTMLInputElement | null = null;
	export let name = '';
	export let valid: boolean | null = null;
	export let placeholder = '';
	export let text: number;
	export let shadowOnFocus=false;
	export let maxDigits:number;
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
	bind:captureEnter
	bind:maxLength={maxDigits}
	bind:placeholder
	bind:shadowOnFocus
	type="number"
	on:click
	on:iconRightClick
	on:input
	on:enterPressed>
	<slot name="iconleft" slot="iconleft" />
	<slot name="iconright" slot="iconright" />
</TextInputImpl>
