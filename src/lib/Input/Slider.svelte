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
	<div class="bg">
		<div class="fg" style:width="{percentage}%"></div>
		<input 
		class="slider"
		type="range" 
		min={min} 
		max={max}
		bind:value={value}>
	</div>
	<NumberInput bind:text={value} maxDigits={max.toString().length}></NumberInput>
</div>
<style lang="scss">

	.wrapper {	
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin: 1rem 0rem;
	}

	.bg {
		position: relative;
		display: block;
		width: 100%;
		height: 0.25rem;
		background: #f0f0f0;
		border-radius: 1rem;
		margin-right: 1rem;
	}

	.fg {
		position: absolute;
		height: 100%;
		background: #c0c0c0;
		border-radius: 1rem 0rem 0rem 1rem;
	}

	.slider {
		position: absolute;
		margin: 0px;
		-webkit-appearance: none;
		appearance: noneXX;
		height: 100%;
		width:100%;
		background-color: #00000000;
		outline: none;

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
			width: 1rem;
			display: block;
			aspect-ratio: 1;
			height: 300%;
			background: var(--p700);
			cursor: pointer;
			border: 0.15rem solid var(--p600);
			border-radius: 2rem;
		}

		&::-moz-range-thumb {
			width: 1rem;
			display: block;
			aspect-ratio: 1;
			height: 300%;
			background: var(--p700);
			cursor: pointer;
			border: 0.15rem solid var(--p600);
			border-radius: 2rem;
		}
	}
</style>