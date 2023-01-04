<script lang="ts">

	export let htmlElement:HTMLInputElement|null=null;
	export let name:string="";
	export let valid:Boolean|null=null;
	export let placeholder=""
	export let text:string;

	const validColor = "#36b32b";
	const invalidColor = "#db3434";

	$: if (valid){
		htmlElement?.style.setProperty("--borderColor", validColor)
	} else if (!valid&&valid!=null){
		htmlElement?.style.setProperty("--borderColor", invalidColor)
	}

</script>
<input bind:value={text} style={$$props.style} placeholder={placeholder} on:input on:click name={name}  type="text" bind:this={htmlElement}>
<style>

	:root{
		--borderColor: #C0C0C0
	}

	input {
		margin: 0.5rem;
		outline: none;
		border: 0.1rem solid var(--borderColor);
		background-color: #f0f0f0;
		padding: 0.75rem;
		border-radius: 0.2rem;
		transition: border-bottom ease-in-out 0.2s;
	}

	input::placeholder{
		opacity: 1;
		color: #606060;
	}
</style>