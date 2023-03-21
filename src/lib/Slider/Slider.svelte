<script lang="ts">
	import {NumberInput} from "../TextInput";

	export let min:number
	export let max:number
	export let value:number
	export let showValue=false
	export let showGradations=false
	let percentage:number

	$: if (value>max){
		value=max
	} else if (value < min){
		value=min
	} 

	$: if (value.toString() === ""){
		percentage=50
	} else {
		let truePercentage = (value-min)/(max-min)*100
		// Prevent the edge of the value indicator from 
		// showing under the thumb
		if (truePercentage<50){
			percentage = truePercentage+1
		} else {
			percentage = truePercentage-1
		}
	}

</script>
<div class="wrapper">
	<div class="inputWrapper">
		<div class="bg"></div>
		<!-- {#if showGradations}
			<div class="gradations">
				{#each [...Array(max-min-1).keys()] as index}
					<div class="gradation" style:left="calc({100/(max-min)*(index+1)}%)"></div>
				{/each}
			</div>
		{/if} -->
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

	.gradations{
		position: absolute;
		top:0px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		height: 100%;
		background: var(--sliderTrackBg, #f0f0f0);
		border-radius: 100vh;
		transition: inherit;

		.gradation {
			position: absolute;
			height: 50%;
			width:auto;
			aspect-ratio: 1;
			border-radius: 50%;
			background-color: #a31c54;
		}
	}

	.wrapper {	
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin: 1rem 0rem;
		width: 100%;
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

			.bg, .fg, .gradations {
				height: 200%;
			}

			input {

				height: 200%;

				&::-webkit-slider-thumb, &::-moz-range-thumb{
					height: 150%;
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
		background: var(--sliderTrackBg, #f0f0f0);
		border-radius: 100vh;
		transition: inherit;
	}

	.fg {
		position: absolute;
		top:0px;
		height: 100%;
		background: var(--sliderTrackBgActive, #c0c0c0);
		border-radius: 100vh 0px 0px 100vh;
		transition: inherit;
	}

	.slider {
		position: absolute;
		top:0px;
		margin: 0px;
		-webkit-appearance: none;
		appearance: none;
		height: 100%;
		width:100%;
		background-color: transparent;
		outline: none;
		transition: transform 0.2s ease-in-out, height 0.2s ease-in-out, top 0.2s ease-in-out, width 0.2s ease-in-out;

		&:hover{

			&::-webkit-slider-thumb {
				background: var(--sliderThumbBgFocus, #b3386b);
				border: 0.15rem solid var(--sliderThumbBorderFocus, #a31c54);
				cursor: pointer;
			}

			&::-moz-range-thumb {
				background: var(--sliderThumbBgFocus, #b3386b);
				border: 0.15rem solid var(--sliderThumbBorderFocus, #a31c54);
				border-radius: 2rem;
			}
		}
	

		&::-webkit-slider-thumb {
			width: auto;
			display: block;
			aspect-ratio: 1;
			height: 300%;
			background: var(--sliderThumbBg, #bf5383);
			cursor: pointer;
			border: 0.15rem solid var(--sliderThumbBorder, #b3386b);
			border-radius: 2rem;
			transition: inherit;
		}

		&::-moz-range-thumb {
			width: auto;
			display: block;
			aspect-ratio: 5 / 4;
			height: 250%;
			background: var(--sliderThumbBg, #bf5383);
			cursor: pointer;
			border: 0.15rem solid var(--sliderThumbBorder, #b3386b);
			border-radius: 2rem;
			transition: inherit;
		}
	}
</style>