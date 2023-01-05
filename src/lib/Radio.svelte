<script lang="ts">
	export let htmlElement: HTMLInputElement | null = null;
	export let name: string = '';
	export let value: string = '';
	export let group: any;

	const onClick = () => {
		if (htmlElement != null) {
			htmlElement.checked = true;
		}
	};
</script>

<div>
	<input bind:group value={value} name={name} type="radio" bind:this={htmlElement} />
	<button
		type="button"
		style={$$props.style}
		tabindex="0"
		class="radioWrapper"
		on:click={onClick} />
	<slot />
</div>

<style>
	:root {
		--borderColor: #c0c0c0;
	}

	input {
		display: none;
	}

	.radioWrapper {
		cursor: pointer;
		width: 1.2rem;
		height: 1.2rem;
		border-radius: 1.5rem;
		border: #bf5383 solid 0.2rem;
		background-color: #00000000;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
	}

	input:checked ~ .radioWrapper {
		border: #99003b solid 0.2rem;
		transition: all ease-in-out 0.2s;
	}

	input:checked ~ .radioWrapper::after {
		content: '';
		width: 100%;
		height: auto;
		aspect-ratio: 1;
		border-radius: 1rem;
		background-color: #99003b;
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
