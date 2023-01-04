<script lang="ts">

	export let htmlElement:HTMLButtonElement|null=null;
	export let type:String="primary";

</script>
{#if type=="secondary"}
<button class="secondary" style={$$props.style}  bind:this={htmlElement} on:click>
	<slot></slot>
</button>
{:else if type=="primary"}
<button class="primary" style={$$props.style} bind:this={htmlElement} on:click>
	<slot></slot>
</button>
{/if}
<style>

	button {
		width:fit-content;
		margin: 0.5rem;
		padding: 1rem 1.5rem;
		border-radius: 0.2rem;
		cursor: pointer;
	}
	
	button.secondary{
		border: none;
		/* outline: var(--colorOutline, #bf5383) solid 0.15rem; */
		color:var(--color, #b3386b);
		background-color: #00000000;
	}

	button.primary {
		border: none;
		outline: none;
		color:var(--color, #FFFFFF);
		background-color: var(--color, #b3386b);
		border: var(--colorOutline, #bf5383) solid 0.15rem;
	}

	button.secondary:hover{
		transition: all ease-in 0.2s;
		background-color: #b3386b26;
	}

	button.secondary:active{
		background-color: #b3386b59;
	}

	button.primary:hover{
		/* box-shadow: #00000033 0.2rem 0.2rem 1rem; */
		transition: all 0.1s;
		filter: brightness(85%);
	}

	button:active{
		box-shadow: #00000033 0.2rem 0.2rem 1rem;
		transition: all ease-in 0.1s;
		filter: brightness(65%);
	}
</style>