<script lang="ts">
	import { ContentContainer } from "$lib/Layout";


	/**
	 * Native radio type <input> element.
	 */
	export let htmlElement: HTMLInputElement | undefined = undefined;
	
	/**
	 * Name of the input for forms
	 */
	export let name = "";

	/**
	 * Value of the radio button for forms.
	 */
	export let value = "";

	/**
	 * Current value of radio button group will be stored here.
	 */
	export let group: unknown;

	const onClick = () => {
		if (htmlElement !== undefined) {
			htmlElement.click();
		}
	};
</script>

<!-- 
	@component Radio

	Radio button

	Props:
	- htmlElement (HTMLInputElement | undefined): Native radio type <input> element.
	- name (string): Name of the `<input>` for forms
	- value (string): Value of the `<input>` for forms.
	- group (unknown): Current value of radio button group will be stored here.
	
	Slots:
	- default: Slot for a label accompanying the radio button

	Css Variables:
	- radioUnselected (default: #bf5383): Color of the radio button when selected
	- radioSelected (default: #99003b): Color of the radion button when it is not selected
	
 -->
<input bind:group={group} value={value} name={name} type="radio" bind:this={htmlElement} />
<ContentContainer>
	<button
		type="button"
		tabindex="0"
		class:checked={group === value}
		class="radioWrapper"
		on:click={onClick} />
	<slot/>
</ContentContainer>

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
