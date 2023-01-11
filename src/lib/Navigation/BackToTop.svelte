<script lang="ts">
	import Button from "$lib/Other/Button.svelte";
	import { onMount } from "svelte";

	let show:boolean=true;

	onMount(()=>{
		window.addEventListener("scroll", (e)=>{
			if ((window.scrollY)==0) {
				show=false
    		} else {
				show=true
			}
		})
	})

	const toTop = () => {
		window.scrollTo({top:0,behavior:"smooth"})
	}
</script>
<div class="wrapper" class:show={show}>
	<Button on:click={toTop}>
		Back to top
		<svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="48 160 128 80 208 160" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>
	</Button>
</div>
<style>
	.wrapper {
		position: fixed;
		bottom: -3rem;
		right: 2rem;
		z-index: 2;
		transition: all ease-in-out 0.2s;
		box-shadow: #00000033 0.2rem 0.2rem 1rem;
	}

	.show {
		bottom: 2rem;
	}

</style>
