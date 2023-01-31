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

<style lang="scss">

	@keyframes popIn {
		0% {
			transform: scale(0%);
		}
		100% {
			transform: scale(100%);
		}
	}

	input {
		display: none;
	}

	div {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.radioWrapper {
		width: auto;
		height: 1.25rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
		border-radius: 100%;
		border: var(--radioUnselected, #bf5383) solid 0.2rem;

		background-color: #00000000;

		aspect-ratio: 1;

		cursor: pointer;

		transition: all ease-in-out 0.2s;

		&:hover{
			border: var(--radioSelected, #99003b) solid 0.2rem;
		}
		&.checked {
			border: var(--radioSelected, #99003b) solid 0.2rem;

			&::after {
				content: '';

				width: auto;
				height: 50%;

				display: block;
				
				aspect-ratio: 1;

				border-radius: 100%;

				background-color: var(--radioSelected, #99003b);
				
				animation-name: popIn;
				animation-play-state: running;
				animation-duration: 0.1s;
				animation-timing-function: linear;
			}
		}
	}

</style>
