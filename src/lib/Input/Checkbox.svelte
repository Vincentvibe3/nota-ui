<script lang="ts">

	export let htmlElement: HTMLInputElement | null = null;
	export let name: string = '';
	export let checked:boolean = false;

	const onClick = () => {
		checked = !checked;
	};
</script>

<input bind:checked {name} type="checkbox" bind:this={htmlElement} />
<div id={$$restProps.id} style={$$restProps.style} class={$$restProps.class} class:wrapper={true}>
	<button tabindex="0" on:click={onClick} class="checkboxWrapper" class:checked={checked}>
		<div class="customCheckmark" class:animate={checked}>
			<!-- check icon from phosphor icons -->
			<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 256 256" ><rect width="256" height="256" stroke="none" fill="none" /><polyline points="216 72 104 184 48 128" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" /></svg>
		</div>
	</button>
	<slot />
</div>

<style>

	input {
		display: none;
	}

	.checkboxWrapper.checked {
		width: 1.2rem;
		height: 1.2rem;
		border-radius: 1.5rem;
		background-color: var(--checkboxSelected, #99003b);
		border: none;
	}

	.checkboxWrapper:not(.checked):hover{
		border: var(--checkboxSelected, #bf5383) solid 0.2rem;
	}

	.checkboxWrapper {
		width: 1.2rem;
		height: 1.2rem;
		border-radius: 1.5rem;
		border: var(--checkboxUnselected, #bf5383) solid 0.2rem;
		background-color: transparent;
		cursor: pointer;
		transition: all linear 0.2s;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.2rem;
	}

	.customCheckmark.animate {
		animation: fillAnimation ease-in-out 0.2s;
	}

	.customCheckmark {
		width: auto;
		height: 100%;
		aspect-ratio: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	@keyframes fillAnimation {
		0% {
			opacity: 0.5;
			transform: rotate(60deg);
		}
		100% {
			opacity: 1;
			transform: rotate(0deg);
		}
	}

	.customCheckmark svg{
		fill: transparent;
		stroke: transparent;
	}

	.checked svg {
		width: 100%;
		height: 100%;
		fill: var(--checkboxCheck, #ffffff);
		stroke: var(--checkboxCheck, #ffffff);
	}

	.wrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>
