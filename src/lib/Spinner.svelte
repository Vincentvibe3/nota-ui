<script lang="ts">
	export let size:string="1.2rem"
	export let loading:boolean=true;
</script>
<div style="width: {size}; height:{size};" class="wrapper">
	{#if loading}
		<svg class="spinnerSvg" width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 24C14.3734 24 16.6935 23.2962 18.6668 21.9776C20.6402 20.6591 22.1783 18.7849 23.0866 16.5922C23.9948 14.3995 24.2324 11.9867 23.7694 9.65892C23.3064 7.33115 22.1635 5.19295 20.4853 3.51472C18.8071 1.83649 16.6689 0.6936 14.3411 0.230577C12.0133 -0.232446 9.60051 0.00519374 7.4078 0.913445C5.21509 1.8217 3.34094 3.35977 2.02237 5.33316C0.703788 7.30655 3.5837e-07 9.62662 0 12L3.00152 12C3.00152 10.2203 3.52928 8.48051 4.51804 7.00071C5.50681 5.52092 6.91218 4.36756 8.55643 3.68649C10.2007 3.00542 12.01 2.82722 13.7555 3.17443C15.501 3.52164 17.1044 4.37866 18.3629 5.63712C19.6213 6.89558 20.4784 8.49895 20.8256 10.2445C21.1728 11.99 20.9946 13.7993 20.3135 15.4436C19.6324 17.0878 18.4791 18.4932 16.9993 19.482C15.5195 20.4707 13.7797 20.9985 12 20.9985L12 24Z" fill="url(#paint0_angular_731_6)"/><defs><radialGradient id="paint0_angular_731_6" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 12) rotate(90) scale(12)"><stop stop-color="#BF5383"/><stop offset="1" stop-color="#99003B"/></radialGradient></defs></svg>
	{:else}
		<div style="width: {size}; height:{size}; aspect-ratio:1;" class="customCheckmark">
			<!-- check icon from phosphor icons -->
			<svg class="checkmarkSvg" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#fafafa" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="216 72 104 184 48 128" fill="none" stroke="#fafafa" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline></svg>
		</div>
	{/if}
</div>

<style>

	@keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

	@keyframes fillAnimation {
		0% {
			opacity: 0.5;
			transform: rotate(60deg);
			transform: scale(50%);
		}
		100% {
			opacity: 1;
			transform: rotate(0deg);
			transform: scale(100%);
		}
	}

	.wrapper {
		margin:0.5rem;
	}

	.spinnerSvg {
		animation: spin 1s ease-in-out;
		animation-iteration-count: infinite;
	}

	.customCheckmark {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		animation-name: fillAnimation;
		animation-timing-function: ease-in-out;
		animation-duration: 0.2s;
		background-color: #99003b;
		border-radius: 100vw;
		animation-name: fillAnimation;
		animation-duration: 00.2s;
	}

	.checkmarkSvg{
		width: 60%;
		height: 60%;
	}

	div{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
</style>