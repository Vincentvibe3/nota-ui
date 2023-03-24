<script lang="ts">
	import {Button}from "../Button";
	import { onMount } from "svelte";

	/**
	 * controls the horizontal alignment of the button on the page
	 */
	export let position:"right"|"left"|"center"="right";
	let show=false;

	onMount(()=>{
		window.addEventListener("scroll", (_)=>{
			if ((window.scrollY) === 0) {
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
<!-- 
	@component BackToTop
	
	Back to top button that appears after user starts scrolling down

	Props:
	- position("right"|"left"|"center"): controls the horizontal alignment of the button on the page

	Css Variables:
	- backToTopBg (default: #b3386b): Button background
	- backToTopBgFocus (default: #99003b): Button background when focused
	- backToTopBorder (default: #bf5383): Button border
	- backToTopBorderFocus (default: #a31c54): Button border when focused
	- backToTopText (default: #fafafa): Text color
	- backToTopTextFocus (default: #fafafa): Text color when focused
	- backToTopIcon (default: #fafafa): Icon color 
	- backToTopIconFocus (default: #fafafa): Icon color when focused

	
 -->
<div 
	class:wrapper={true} 
	class:left={position === "left"} 
	class:right={position === "right"} 
	class:center={position === "center"} 
	class:show={show}>
	<Button 
		on:click={toTop}>
		Back to top
		<!-- Icon from Phosphor Icons (https://phosphoricons.com/) licensed under an MIT license -->
		<svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 256 256"><rect width="256" height="256" stroke="none" fill="none"></rect><polyline points="48 160 128 80 208 160" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>
	</Button>
</div>
<style lang="scss">

	.wrapper{
		--btnPrimaryBg: var(--backToTopBg);
		--btnPrimaryBgFocus: var(--backToTopBgFocus);
		--btnPrimaryBorder: var(--backToTopBorder);
		--btnPrimaryBorderFocus: var(--backToTopBorderFocus);
		--btnPrimaryText: var(--backToTopText);
		--btnPrimaryTextFocus: var(--backToTopTextFocus);
		--btnPrimaryIconFill:var(--backToTopIcon);
		--btnPrimaryIconStroke:var(--backToTopIcon);
		--btnPrimaryIconFillFocus:var(--backToTopIconFocus);
		--btnPrimaryIconStrokeFocus:var(--backToTopIconFocus);
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
