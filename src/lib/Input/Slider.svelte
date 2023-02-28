<script lang="ts">
	import NumberInput from "./NumberInput.svelte";

	export let min:number
	export let max:number
	export let value:number
	export let showValue=false
	let percentage:number

	$: if (value>max){
		value=max
	} else if (value < min){
		value=min
	} 

	$: if (value.toString() == ""){
		percentage=50
	} else {
		percentage = (value-min)/(max-min)*100
	}

</script>
<div class="wrapper">
	<div class="inputWrapper">
		<div class="bg"></div>
		<div class="fg" style:width="{percentage}%"></div>
		<input 
			class="slider"
			type="range" 
			min={min} 
			max={max}
			bind:value={value}>
	</div>
	{#if showValue}
		<NumberInput bind:text={value} maxDigits={max.toString().length}></NumberInput>
	{/if}
</div>
<style lang="scss">

	.wrapper {	
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin: 1rem 0rem;
	}

	.inputWrapper {
		position: relative;
		display: block;
		width: 100%;
		height: 0.4rem;
		margin-right: 1rem;
		transition: transform 0.2s ease-in-out, height 0.2s ease-in-out, top 0.2s ease-in-out;

		&:hover {

			transform: translateY(-50%);

			.bg, .fg {
				height: 200%;
			}

			// .bg {
			// 	border-radius: 300vh;
			// }

			// .fg {
			// 	border-radius: 300vh 0rem 0rem 300vh;
			// }

			input {

				height: 200%;

				&::-webkit-slider-thumb, &::-moz-range-thumb{
					height: 150%;
					// border-radius: 1.5vh 0rem 0rem 1.5vh;
				}
			}
			
		}
	}

	.bg {
		position: absolute;
		top:0px;
		display: block;
		width: 100%;
		height: 100%;
		background: #f0f0f0;
		border-radius: 100vh;
		transition: inherit;
	}

	.fg {
		position: absolute;
		top:0px;
		height: 100%;
		background: #c0c0c0;
		border-radius: 100vh 0px 0px 100vh;
		transition: inherit;
	}

	.slider {
		position: absolute;
		top:0px;
		margin: 0px;
		-webkit-appearance: none;
		appearance: noneXX;
		height: 100%;
		width:100%;
		background-color: #00000000;
		outline: none;
		transition: transform 0.2s ease-in-out, height 0.2s ease-in-out, top 0.2s ease-in-out, width 0.2s ease-in-out;

		&:hover{

			&::-webkit-slider-thumb {
				background: var(--p800);
				border: 0.15rem solid var(--p700);
				cursor: pointer;
			}

			&::-moz-range-thumb {
				background: var(--p800);
				border: 0.15rem solid var(--p700);
				border-radius: 2rem;
			}
		}
	

		&::-webkit-slider-thumb {
			width: auto;
			display: block;
			aspect-ratio: 1;
			height: 300%;
			background: var(--p700);
			cursor: pointer;
			border: 0.15rem solid var(--p600);
			border-radius: 2rem;
			transition: inherit;
		}

		&::-moz-range-thumb {
			width: auto;
			display: block;
			aspect-ratio: 5 / 4;
			height: 250%;
			background: var(--p700);
			cursor: pointer;
			border: 0.15rem solid var(--p600);
			border-radius: 2rem;
			transition: inherit;
		}
	}
</style>