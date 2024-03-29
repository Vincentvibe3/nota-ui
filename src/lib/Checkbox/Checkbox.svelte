<script lang="ts">
	import { ContentContainer } from "$lib/Layout";


	/** 
	 * Native checkbox type <input> element
	 */
	export let htmlElement: HTMLInputElement | undefined = undefined;

	/** 
	 * Name of the checkbox for forms
	*/
	export let name = "";

	/** 
	 * Checked status of the checkbox 
	*/
	export let checked = false;

	const onClick = () => {
		checked = !checked;
	};
</script>

<!-- 
	@component Checkbox
	
	Checkbox component

	Props:
	- htmlElement (HTMLInputElement | undefined): Underlying `<input>` element
	- name (string): Sets the name of the checkbox for forms
	- checked (boolean): Sets the checked status of the checkbox

	Slots:
	- default: Sets a label on the right of the checkbox

	Css Variables

	- checkboxCheck (default:#ffffff): Color of the check icon
	- checkboxSelected (default:#bf5383): Color of the filled checkbox when selected
	- checkboxUnselected (default:#bf5383): Color of the checkbox ring when unselected
	
 -->
<input bind:checked {name} type="checkbox" bind:this={htmlElement} />
<ContentContainer>
	<button tabindex="0" on:click={onClick} class="checkboxWrapper" class:checked={checked}>
		<div class="customCheckmark" class:animate={checked}>
			<!-- Icon from Phosphor Icons (https://phosphoricons.com/) licensed under an MIT license -->
			<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 256 256" ><rect width="256" height="256" stroke="none" fill="none" /><polyline points="216 72 104 184 48 128" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" /></svg>
		</div>
	</button>
	<slot />
</ContentContainer>

<style lang="scss">

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

	input {
		display: none;
	}

	.checkboxWrapper {
		width: 1.2rem;
		height: 1.2rem;

		display: flex;
		align-items: center;
		justify-content: center;

		padding: 0.2rem;

		background-color: transparent;

		border-radius: 1.5rem;
		border: var(--checkboxUnselected, #bf5383) solid 0.2rem;

		cursor: pointer;

		transition: all linear 0.2s;
		
		&:not(.checked):hover {
			border: var(--checkboxSelected, #bf5383) solid 0.2rem;
		}

		&.checked {
			background-color: var(--checkboxSelected, #99003b);
			border: none;

			svg {
				fill: var(--checkboxCheck, #ffffff);
				stroke: var(--checkboxCheck, #ffffff);
			}
		}

	}

	.customCheckmark {
		width: auto;
		height: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		aspect-ratio: 1;

		&.animate {
			animation: fillAnimation ease-in-out 0.2s;
		}
		
		svg{
			width: 100%;
			height: 100%;

			fill: transparent;
			stroke: transparent;
		}
	}

</style>
