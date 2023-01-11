<script lang="ts">
	import TextInputImpl from './TextInputImpl.svelte';
	export let htmlElement: HTMLInputElement | null = null;
	export let name: string = '';
	export let valid: Boolean | null = null;
	export let placeholder = '';
	export let text: string;
	export let showText: boolean = false;
	let type: string = 'password';

	$:console.log($$slots.iconleft+" pass")

	$: if (showText) {
		type = 'text';
	} else {
		type = 'password';
	}
</script>

<TextInputImpl
	style={$$props.style}
	on:focus
	on:keydown
	on:keyup
	bind:htmlElement
	bind:text
	bind:name
	bind:valid
	bind:placeholder
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
		{#if $$slots.iconleft}
			<slot name="iconright" />
		{/if}
	</svelte:fragment>
</TextInputImpl>
