<script lang="ts">
	import { onMount } from "svelte";

	/**
	 * changes the look of the ring from a ring, a checkmark or an error x.
	 */ 
	export let status:"loading"|"complete"|"error"="loading";

	/**
	 * controls whether the ring will display a set progress or spin
	 */
	export let indeterminate=true;

	/**
	 * Number from 0 to 1, denotes the progress
	 */
	export let progress = 0.5;

	let loaded = false

	const animateCallback = () => {
		if (progress === 1){
			progress=0
		} else {
			progress+=0.01
		}
		if (indeterminate&&status === "loading"){
			requestAnimationFrame(animateCallback)
		}
	}

	$:if (indeterminate&&status === "loading"&&loaded){
		requestAnimationFrame(animateCallback)
	}

	onMount(()=>{
		loaded=true
	})
	
</script>
<!-- 
	@component ProgressRing
	
	Ring to denote progress. Can be either determinate or indeterminate.

	Props:
	- status ("loading"|"complete"|"error"): changes the look of the ring from a ring, a checkmark or an error x.
	- progress (number) : Number from 0 to 1, denotes the progress
	- indeterminate (boolean): controls whether the ring will display a set progress or just spin

	Css Variables:
	- spinnerProgressBg(default: #36b32b): Ring background color when determinate
	- spinnerIcon(default: #99003b): Ring Color
	- spinnerBgComplete(default: #36b32b): Background color when complete
	- spinnerBgError(default: #db3434): Background color on error
	- spinnerIconComplete(default: #ffffff): Checkmark color
	- spinnerIconError(default: #ffffff): X icon color
	
 -->
<div class:wrapper={true}>
	{#if status === "loading"}
		<div class="spinnerWrapper">
			<!-- Icon from Phosphor Icons (https://phosphoricons.com/) licensed under an MIT license -->
			<svg class="spinner" class:spin={indeterminate}>
				<circle class="progressRail" 
					class:show={!indeterminate}
					cy="50%"
					r="40%"
					cx="50%"
					stroke-width="15%"
				/>
				<circle class="progress" 
					cy="50%"
					r="40%"
					cx="50%"
					stroke-width="15%"
					stroke-dasharray="calc(2*40%*3.14)"
					stroke-dashoffset="calc(2*40%*3.14*(1 - {progress}))"
				/>
			</svg>
		</div>
	{/if}
	<div 
		class="custom checkmark" class:show={status === "complete"}>
		<!-- Icon from Phosphor Icons (https://phosphoricons.com/) licensed under an MIT license -->
		<svg class="checkmarkSvg" xmlns="http://www.w3.org/2000/svg" width="192" height="192"  viewBox="0 0 256 256"><rect width="256" height="256" stroke="none" fill="none"></rect><polyline points="216 72 104 184 48 128" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
	</div>
	<div 
		class="custom error" class:show={status === "error"}>
		<!-- Icon from Phosphor Icons (https://phosphoricons.com/) licensed under an MIT license -->
		<svg class="errorSvg" xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 256 256"><rect width="256" height="256" stroke="none" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="200" y1="200" x2="56" y2="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
	</div>
</div>

<style lang="scss">

	// Modified from 
	// https://blog.logrocket.com/build-svg-circular-progress-component-react-hooks/

	.spinnerWrapper {
		position: relative;
		height: auto;
		aspect-ratio: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}


	.spinner {
		width: 100%;
		height: 100%;
		transform: rotate(-90deg);

		.progressRail {
			display:none;
			fill: transparent;
			stroke: var(--spinnerProgressBg, #f0f0f0);

			&.show{
				display: block;
			}
		}

		.progress {
			fill: transparent;
			stroke: var(--spinnerIcon, #99003b);
			stroke-dasharray: calc(2*40%*3.14);
		}

		&.spin {
			animation: spin 0.8s ease-in-out infinite;
		}
	}

	@keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

	@keyframes fillAnimation {
		0% {
			opacity: 0.5;
			transform: rotate(60deg);
			transform: scale(75%);
		}
		100% {
			opacity: 1;
			transform: rotate(0deg);
			transform: scale(100%);
		}
	}

	.custom {

		width: 100%;
		height: 100%;

		display: none;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		border-radius: 100vw;

		aspect-ratio:1;

		&.show{
			display: flex;

			opacity: 1;

			animation: fillAnimation ease-in-out 0.2s;
		}

		&.checkmark{
			background-color: var(--spinnerBgComplete, #36b32b);
		}

		&.error{
			background-color: var(--spinnerBgError, #db3434);
		}
	}

	.checkmarkSvg, .errorSvg{
		width: 60%;
		height: 60%;
	}

	.checkmarkSvg{
		fill: var(--spinnerIconComplete, #ffffff);
		stroke: var(--spinnerIconComplete, #ffffff);
		// transform: translate(8%, 8%);
	}

	.errorSvg {
		fill: var(--spinnerIconError, #ffffff);
		stroke: var(--spinnerIconError, #ffffff);
		// transform: translate(5%, 5%);
	}

	.wrapper {
		width: auto;
		height: 1.25rem;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		aspect-ratio: 1;
	}

</style>