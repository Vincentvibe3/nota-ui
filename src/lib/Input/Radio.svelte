<script lang="ts">

	export let htmlElement: HTMLInputElement | null = null;
	export let name: string = "";
	export let value: string = "";
	export let group: any;

	const onClick = () => {
		if (htmlElement != null) {
			htmlElement.click();
		}
	};
</script>


<input bind:group={group} value={value} name={name} type="radio" bind:this={htmlElement} />
<div id={$$restProps.id} style={$$restProps.style} class={$$restProps.class}>	
	{#if htmlElement!=null}
		<button
			type="button"
			tabindex="0"
			class:checked={group==value}
			class="radioWrapper"
			on:click={onClick} />
		<slot />
	{/if}
</div>

<style>

	input {
		display: none;
	}

	.radioWrapper {
		cursor: pointer;
		width: auto;
		height: 1.25rem;
		aspect-ratio: 1;
		border-radius: 100%;
		border: var(--radioUnselected, #bf5383) solid 0.2rem;
		background-color: #00000000;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.radioWrapper.checked {
		border: var(--radioSelected, #99003b) solid 0.2rem;
		transition: all ease-in-out 0.2s;
	}

	.radioWrapper.checked::after {
		display: block;
		content: '';
		width: auto;
		height: 50%;
		aspect-ratio: 1;
		border-radius: 100%;
		background-color: var(--radioSelected, #99003b);
		animation-name: popIn;
		animation-play-state: running;
		animation-duration: 0.1s;
		animation-timing-function: linear;
	}

	@keyframes popIn {
		0% {
			transform: scale(0%);
		}
		100% {
			transform: scale(100%);
		}
	}

	div {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>
