<script lang="ts">
	import Column from "$lib/Layout/Column.svelte";
	import TextInput from "$lib/TextInput/TextInput.svelte";
	import { onMount } from "svelte";
	import { HEX2HSV, HSV2HEX, HSV2RGB, getWhiteOrBlack } from "./ColorUtils";

	let canvas:HTMLCanvasElement
	let isDrawing = false
	export let text = "#ffffff"
	let mounted = false
	let hue = 0
	let saturation = 0
	let value = 0
	let thumbElement:HTMLDivElement
	let thumbStatus:ThumbStatus = {
		xTranslate:0,
		yTranslate:0
	}

	interface ThumbStatus {
		xTranslate:number,
		yTranslate:number
	}

	$: if (mounted) moveThumb(saturation, 1-value)
	$: if (mounted) text = HSV2HEX({h:hue, s:saturation, v:value})
	$: if (mounted) drawColorPicker(hue)

	const drawColorPicker = (hue:number) => {
		let clrCtx = canvas.getContext("2d");
		if (clrCtx != null){
			let gradient = clrCtx.createLinearGradient(0, 0, canvas.width, 0);
			gradient.addColorStop(0, "white");
			gradient.addColorStop(1, `hsl(${hue}, 100%, 50%)`);
			clrCtx.fillStyle = gradient;
			clrCtx.fillRect(0, 0, canvas.width, canvas.height);
			gradient = clrCtx.createLinearGradient(0, 0, 0, canvas.height);
			gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
			gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
			clrCtx.fillStyle = gradient;
			clrCtx.fillRect(0, 0, canvas.width, canvas.height);
		}
		
	}

	const onCanvasMouseDown = (event:MouseEvent)=>{
		update(event)
		isDrawing = true
	}

	const moveThumb = (xPercent:number, yPercent:number) => {
		thumbStatus.xTranslate = (xPercent*canvas.clientWidth)-thumbElement.clientWidth/2
		thumbStatus.yTranslate = (yPercent*canvas.clientHeight)-thumbElement.clientWidth/2
		thumbElement.style.transform = `translate(${thumbStatus.xTranslate}px, ${thumbStatus.yTranslate}px)`
	}

	const update = (event:MouseEvent) => {
		let coords = getPosition(event.pageX, event.pageY-window.scrollY, canvas)
		saturation = coords.x/canvas.clientWidth
		value = (canvas.clientHeight-coords.y)/canvas.clientHeight
		moveThumb(coords.x/canvas.clientWidth, coords.y/canvas.clientHeight)
	}

	interface Coords {
		x:number,
		y:number
	}

	const getPosition = (rawx:number, rawy:number, parent:HTMLElement):Coords => {
		let boundingRect = parent.getBoundingClientRect()
		let initX = boundingRect.left
		let initY = boundingRect.top
		let width = parent.clientWidth
		let height = parent.clientHeight
		let x = Math.round((rawx-initX)/width*width)
		let y = Math.round((rawy-initY)/height*height)
		if (x >= width){
			x = width
		} else if (x <= 0){
			x = 0
		}
		if (y>= height){
			y = height
		} else if (y <= 0){
			y = 0
		}
		return {x:x, y:y}
	}

	const handleSliderUpdate = (e:Event)=>{
		let event = e.target
		if (event!=null){
			let data = (event as unknown as InputEvent).data
			if (data!=null){
				hue = Number.parseInt(data)
			}
		}
	}

	const handleMovement = (e:MouseEvent) => {
		if (isDrawing){
			update(e)
		}
	}

	const onRelease = () => {
		isDrawing = false
	}

	const onHexInput = (e:Event) => {
		let event = e.target
		if (event!=null){
			let data = (event as unknown as HTMLInputElement).value
			if (data!=null){
				let hsv = HEX2HSV(data)
				if (!isNaN(hsv.h)&&!isNaN(hsv.s)&&!isNaN(hsv.v)){
					hue = hsv.h
					saturation = hsv.s
					value = hsv.v
				}
			}
		}
	}

	onMount(()=>{
		let hsv = HEX2HSV(text)
		if (!isNaN(hsv.h)&&!isNaN(hsv.s)&&!isNaN(hsv.v)){
			hue = hsv.h
			saturation = hsv.s
			value = hsv.v
		}
		mounted = true
	})

</script>
<svelte:window on:mousemove={handleMovement} on:mouseup={onRelease}></svelte:window>
<div class="wrapper" style:--inputBorder="var(--n600)">
	<Column>
		<div class="pickerWrapper">
			<div 
				class="thumb" 
				style:background-color="{HSV2HEX({h:hue, s:saturation, v:value})}" 
				style:outline-color="{getWhiteOrBlack(HSV2RGB({h:hue, s:saturation, v:value}))}" 
				bind:this={thumbElement} 
				on:mousedown={onCanvasMouseDown}>
			</div>
			<canvas class="clrPickerCanvas" bind:this={canvas} on:mousedown={onCanvasMouseDown}></canvas>
		</div>
		<div class="slider">
			<input 
				class="hueSlider" 
				type="range" 
				min="0" 
				max="360" 
				bind:value={hue} 
				on:input={handleSliderUpdate}>
		</div>
		<TextInput bind:text={text} placeholder="Color" on:input={onHexInput}></TextInput>
	</Column>
</div>
<style lang="scss">


	.thumb{
		position: absolute;
		width: 0.5rem;
		height: 0.5rem;
		outline: 0.2rem solid white;
		// transform: translate(-25%, -25%);
		border-radius: 1rem;
		box-shadow: 0rem 0rem 0.5rem 0.5rem rgba(0, 0, 0, 0.075);
		transition: outline-color ease-in-out 0.2s;
		pointer-events: none;
	}

	.wrapper {
		background-color: #f0f0f0;
		padding: 1rem;
		border-radius: 1rem;
	}

	.clrPickerCanvas {
		border-radius: 0.5rem;
	}

	.slider {
		width: 100%;
		position:relative;
		display: flex;
		flex-direction: row;
		align-items: center;

		.hueSlider {
			width: 100%;
			-webkit-appearance: none;
			height: 1rem;
			grid-row-start: 2;
			grid-row-end: 3;
			padding: 0px;
			margin: 0;
			background: -webkit-linear-gradient(left, rgb(255, 0, 0), rgb(255, 255, 0), rgb(0, 255, 0), rgb(0, 255, 255), rgb(0, 0, 255), rgb(255, 0, 255), rgb(255, 0, 0));
			outline: none;
			border: none;
			border-radius: 0.4rem;
		}

		.hueSlider::-webkit-slider-thumb {
			-webkit-appearance: none; 
			background: none; 
			// opacity: 0;
			border: 0.2rem solid white;
			height: 1rem;
			width: 1rem;
			aspect-ratio: 1;
			border-radius: 1rem;
			box-shadow: 0rem 0rem 0.5rem 0.5rem rgba(0, 0, 0, 0.075);
			// width: 1px;
			// height: 1px;
			appearance: none; 
			// opacity: 0;
			// background: none; 
		}

		.hueSlider::-moz-range-thumb {
			background: none; 
			// opacity: 0;
			border: 0.2rem solid white;
			aspect-ratio: 1;
			height: 0.8rem;
			width: 0.8rem;
			border-radius: 1rem;
			box-shadow: 0rem 0rem 0.5rem 0.5rem rgba(0, 0, 0, 0.075);
		}

	}
</style>