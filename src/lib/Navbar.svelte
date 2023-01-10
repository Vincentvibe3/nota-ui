<script lang="ts">
	import { createEventDispatcher, onMount } from "svelte";
	let transparent:boolean = true;
	let show:boolean=true;
	let lastScrollPosition=0;
	export let alwaysOpaque:boolean=true;

	const dispatch = createEventDispatcher();

	onMount(()=>{
		lastScrollPosition=window.scrollY
		window.onscroll = (e)=>{
			if ((window.scrollY) == 0) {
        		// you're at the bottom of the page
				show=true
				transparent=true
    		} else {
				transparent=false
				show=lastScrollPosition>window.scrollY
			}
			lastScrollPosition=window.scrollY
		}
	})

	const onTitleClick = (event:MouseEvent) => {
		dispatch("onTitleClick", {event:event})
	}

</script>
<div style={$$props.style} class="bar" class:transparent={transparent&&!alwaysOpaque} class:show={show}>
	<button on:click={onTitleClick} class="titleWrapper">
		<slot name="icon"></slot>
		Website Name
	</button>
	<nav class="content">
		<ul>
			<li>
				<a href=".">Page 1</a>
			</li>
			<li>
				<a href=".">Page 2</a>
			</li>
		</ul>
	</nav>
</div>
<style>

	h1 {
		font-weight: normal;
		margin: none;
		font-size: 1rem;
	}

	ul {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	li {
		list-style-type: none;
	}

	li + li {
		margin: 0rem 2rem;
	}

	a {
		color: inherit;
		text-decoration: none;
		transition: all ease-in-out 0.2s;
	}

	a:hover{
		color: #c2d5f2;
	}

	a::after{
		content: "";
		display: block;
		opacity: 0;
		position: relative;
		top: 0.3rem;
		width: 10%;
		/* left: -5%; */
		height: 00.1rem;
		background-color: #c2d5f2;
	}

	a:hover::after{
		content: "";
		display: block;
		position: relative;
		opacity: 1;
		top: 0.3rem;
		width: 110%;
		/* left: -5%; */
		height: 00.05rem;
		background-color: #c2d5f2;
		transition: all ease-in-out 0.2s;
	}

	.titleWrapper{
		height: 100%;
		padding: 0rem 1.5rem;
		background-color: transparent;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		/* border-radius: 0rem 0.5rem 0.5rem 0rem; */
		transition: all ease-in-out 0.2s;
		border: none;
		color: inherit;
		font: inherit;
		cursor: pointer;
	}

	.titleWrapper:hover{
		color: #f0f0f0;
		background-color: #161616;
	}

	.content {
		width: auto;
		flex-grow: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
	}

	.bar {
		color: #f0f0f0;
		position: fixed;
		width: 100vw;
		height: 3.5rem;
		background-color: #a31c54d2;
		/* background-color: rgba(0, 0, 0, 0.555); */
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
		box-shadow: #00000021 0.2rem 0.2rem 0.3rem;
		/* border-bottom: #606060 solid 0.1rem; */
		z-index: 2;
		/* pointer-events: none */
		transition: all ease 0.2s;
		font: var(--body);
		transform: translateY(-100%);
	}

	.bar.show{
		transform: translateY(0%);
	}

	.bar.transparent {
		background-color: transparent;
		box-shadow: none;
	}

	/* nav:hover{
		background-color: #a31c54;
	} */
</style>