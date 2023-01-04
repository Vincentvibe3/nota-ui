<script lang="ts">

	export let htmlElement:HTMLInputElement|null=null;
	export let name:string="";
	export let checked = false;

	const onClick = () => {
		checked = !checked
	}

</script>
<input bind:checked={checked} on:click name={name}  type="checkbox" bind:this={htmlElement}>
<div style={$$props.style} class="wrapper">
	{#if checked}
		<div on:click={onClick} class="checkboxWrapper checked">
			<div class="customCheckmark">
				<!-- check icon from phosphor icons -->
				<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#fafafa" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="216 72 104 184 48 128" fill="none" stroke="#fafafa" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
			</div>
		</div>
		<slot></slot>
	{:else}
		<div on:click={onClick} class="checkboxWrapper">
			<div class="customCheckmark">
			</div>
		</div>
		<slot></slot>
	{/if}
</div>


<style>

	:root{
		--borderColor: #C0C0C0
	}

	input {
		display: none;
	}

	.checkboxWrapper.checked {
		width: 1.2rem;
		height: 1.2rem;
		border-radius: 1.5rem;
		background-color: #99003b;
		border: none;
	}

	.checkboxWrapper {
		margin: 00.5rem;
		width: 0.8rem;
		height: 0.8rem;
		border-radius: 1.5rem;
		border: #bf5383 solid 0.2rem;
		background-color: #00000000;
		cursor: pointer;
	}

	.customCheckmark {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	svg {
		width: 60%;
		height: 60%;
	}

	.wrapper{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>