<script lang="ts">
	import { createEventDispatcher, onMount } from "svelte";
	let transparent:boolean = true;
	let show:boolean=true;
	let lastScrollPosition=0;
	export let alwaysOpaque:boolean=true;

	const dispatch = createEventDispatcher();

	onMount(()=>{
		lastScrollPosition=window.scrollY
		window.addEventListener("scroll", (e)=>{
			if ((window.scrollY) == 0) {
        		// you're at the top of the page
				show=true
				transparent=true
    		} else {
				transparent=false
				show=lastScrollPosition>window.scrollY
			}
			lastScrollPosition=window.scrollY
		})
	})

	const onTitleClick = (event:MouseEvent) => {
		dispatch("onTitleClick", {event:event})
	}

</script>
<div id={$$restProps.id} style={$$restProps.style} class:bar={true} class={$$restProps.class} class:show={show}>
	<div class:transparent={transparent&&!alwaysOpaque} class="bg"></div>
	<button on:click={onTitleClick} class="titleWrapper">
		<slot name="icon"></slot>
		<slot name="title"></slot>
	</button>
	<nav class="content">
		<slot></slot>
	</nav>
</div>
<style>

	.titleWrapper{
		height: 100%;
		padding: 0rem 1.5rem;
		background-color: transparent;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		transition: all ease-in-out 0.2s;
		border: none;
		color: inherit;
		font: inherit;
		cursor: pointer;
	}

	.titleWrapper:hover{
		color: var(--navbarTextTitleHover, #f0f0f0);
		background-color: var(--navBgTitleHover, #161616);
	}

	.content {
		width: auto;
		flex-grow: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
		color: inherit;
	}

	.bar {
		color: var(--navText, #f0f0f0);
		position: fixed;
		width: 100vw;
		height: 3.5rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
		z-index: 3;
		transition: all ease 0.2s;
		font: var(--navFont, 400 1rem sans-serif);
		transform: translateY(-100%);
	}

	.bg {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: var(--navBg, #b3386b);
		opacity: 0.95;
		z-index: -1;
		box-shadow: #00000021 0.2rem 0.2rem 0.3rem;
		transition: all ease 0.5s;
	}

	.bar.show{
		transform: translateY(0%);
	}

	.bg.transparent {
		background-color: transparent;
		box-shadow: none;
	}

</style>