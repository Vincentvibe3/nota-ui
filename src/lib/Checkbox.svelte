<script lang="ts">
	export let htmlElement: HTMLInputElement | null = null;
	export let name: string = '';
	export let checked = false;
	let checkClass = '';
	let checkMark: HTMLDivElement;

	$: if (checked) {
		checkClass = 'checked';
		checkMark.classList.add('animate');
	} else if (checkMark != null) {
		checkClass = '';
		checkMark.classList.remove('animate');
	}

	const onClick = () => {
		checked = !checked;
	};
</script>

<input bind:checked on:click {name} type="checkbox" bind:this={htmlElement} />
<div style={$$props.style} class="wrapper">
	<button tabindex="0" on:click={onClick} class="checkboxWrapper {checkClass}">
		<div bind:this={checkMark} class="customCheckmark">
			<!-- check icon from phosphor icons -->
			<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#fafafa" viewBox="0 0 256 256" ><rect width="256" height="256" fill="none" /><polyline points="216 72 104 184 48 128" fill="none" stroke="#fafafa" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" /></svg>
		</div>
	</button>
	<slot />
</div>

<style>
	:root {
		--borderColor: #c0c0c0;
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
		transition: all linear 0.1s;
	}

	.checkboxWrapper {
		margin: 00.5rem;
		width: 1.2rem;
		height: 1.2rem;
		border-radius: 1.5rem;
		border: #bf5383 solid 0.2rem;
		background-color: #00000000;
		cursor: pointer;
	}

	.customCheckmark.animate {
		animation: fillAnimation ease-in-out 0.2s;
	}

	.customCheckmark {
		width: 100%;
		height: 100%;
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

	svg {
		width: 100%;
		height: 100%;
	}

	.wrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>
