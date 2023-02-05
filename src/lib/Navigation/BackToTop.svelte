<script lang="ts">
	import Button from "$lib/Other/Button.svelte";
	import { onMount } from "svelte";

	export let position="right";
	let show=false;
	let styles=""

	onMount(()=>{
		if($$restProps.style!==undefined){
			styles=$$restProps.style
		}
		window.addEventListener("scroll", (_)=>{
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
<div 
	id={$$restProps.id}
	class:wrapper={true} 
	class:left={position=="left"} 
	class:right={position=="right"} 
	class:center={position=="center"} 
	class={$$restProps.class}
	class:show={show}>
	<Button 
		style="
		{styles}
		"
		on:click={toTop}>
		Back to top
		<svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 256 256"><rect width="256" height="256" stroke="none" fill="none"></rect><polyline points="48 160 128 80 208 160" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>
	</Button>
</div>
<style lang="scss">

	.wrapper :global( button ){
		--btnPrimaryBg: var(--backToTopBg);
		--btnPrimaryBgFocus: var(--backToTopBgFocus);
		--btnPrimaryBorder: var(--backToTopBorder);
		--btnPrimaryBorderFocus: var(--backToTopBorderFocus);
		--btnPrimaryText: var(--backToTopText);
	}

	.wrapper {
		position: fixed;
		bottom: -3rem;
		z-index: 2;
		transition: all ease-in-out 0.2s;
		border-radius: var(--borderRadius, 0.2rem);
		box-shadow: #00000033 0.2rem 0.2rem 1rem;
		
		svg{
			fill: var(--backToTopIcon, #fafafa);
			stroke: var(--backToTopIcon, #fafafa);
			transition: all ease-in-out 0.2s;
		}

		&:hover svg{
			fill: var(--backToTopIconFocus, #fafafa);
			stroke: var(--backToTopIconFocus, #fafafa);
		}
	}

	.right {
		right: 2rem;
	}

	.center {
		left: 50%;
		transform: translateX(-50%);
	}

	.left{
		left: 2rem;
	}

	.show {
		bottom: 2rem;
	}

</style>
