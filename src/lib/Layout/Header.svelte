<script lang="ts">
	import { onMount } from "svelte";

	export let img="";
	export let video=""
	export let alt="";
	// Text position
	export let position="left";
	export let compact=false

	let videoElement:HTMLVideoElement|undefined = undefined;
	let videoPaused = false

	const pausePlay = async () => {
		if (videoElement!=null){
			if (videoElement.paused){
				videoElement.play()
			} else{
				videoElement.pause()
			}
		}
	}

	onMount(()=>{
		if (videoElement!=undefined){
			videoPaused=videoElement.paused
		}
	})

</script>
<div class:wrapper={true} class:compact class:noimage={img === ""} >
	{#if img !== ""}
		<img alt={alt} src={img}>
		<div class="gradient" class:noimage={img === ""}></div>
	{/if}
	{#if video !== ""}
		<video bind:paused={videoPaused} bind:this={videoElement} autoplay muted loop>
			<source src={video}>
		</video>
		<div class="gradient" class:noimage={img === ""}></div>
	{/if}
	<div class="content {position}">
		<h1 class:noimage={img === ""&&video === ""} ><slot></slot></h1>
		{#if video!=""}
			<button on:click={pausePlay}>
				{#if videoPaused}
					<!-- Icon from Phosphor Icons (https://phosphoricons.com/) licensed under an MIT license -->
					<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="16"></circle><polygon points="160 128 112 96 112 160 160 128" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polygon></svg>
					<span>Play</span>
				{:else}
					<!-- Icon from Phosphor Icons (https://phosphoricons.com/) licensed under an MIT license -->
					<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="16"></circle><line x1="104" y1="96" x2="104" y2="160" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="152" y1="96" x2="152" y2="160" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
					<span>Pause</span>
				{/if}
			</button>
		{/if}
	</div>
</div>
<style lang="scss">

	svg {
		width: 1.25rem;
		height: 1.25rem;
	}

	button {
		position: absolute;
		bottom:0px;
		right:0px;

		display: flex;
		align-items: center;
		justify-content: center;

		padding: 0.2rem;
		margin: 1rem;

		font:var(--caption, 400 0.75rem sans-serif);
		color: white;
		background-color: #00000050;

		border-radius: 5rem;
		border: none;

		cursor: pointer;

		span {
			margin: 0rem 0.25rem;
		}
	}

	.right button{
		left:0px
	}

	img {
		position: absolute;
		width: 100%;
		height: inherit;
		object-fit: cover;
		pointer-events: none;
	}

	video {
		position: absolute;
		width: 100%;
		height: inherit;
		object-fit: cover;
		pointer-events: none;
	}

	h1 {
		color: var(--headerTextDark, #f0f0f0);
		font: var(--headerFont, 700 3rem sans-serif);
		margin: 3rem;

		&.noimage {
			color: var(--headerTextLight, #303030);
		}
	}

	.content{
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: flex-end;

		&.left{
			justify-content: start;
		}

		&.right{
			justify-content: end;
		}

		&.center{
			justify-content: center;
		}
	}

	.gradient{
		position: absolute;
		width: 100%;
		height: inherit;
		background: linear-gradient(#00000073, #e6646400, #00000073);
		pointer-events: none;
	}

	.wrapper {
		position:relative;
		width: 100%;
		min-height: fit-content;
		height: 25rem;
		margin: 0px;
		background: var(--headerBg, #f0f0f0);;
		background-size: cover;
		background-position: center;
		flex-shrink: 0;

		&.compact {
			height: 12rem;

			h1 {
				margin-bottom: 1.5rem;
			}
		}

		&.noimage{
			border-bottom: var(--headerBorderBottom,#c0c0c0) solid 0.1rem;
		}
	}

</style>