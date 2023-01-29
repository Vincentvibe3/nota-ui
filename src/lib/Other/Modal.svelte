<script lang="ts">
	import Backdrop from "./Backdrop.svelte";

	export let open:boolean=false;
	export let strict:boolean=false;

</script>
<div class="wrapper" class:show={open}>
	<Backdrop 
		show={open} 
		on:click={()=>{
			if (!strict){
				open=!open
			}
		}}>
	</Backdrop>
	<div class:container={true} id={$$restProps.id} class={$$restProps.class} style={$$restProps.style}>
		{#if !strict}
			<button class="closeButton" on:click={()=>{open=false}}>
				<svg style="height:1rem; width:auto;" xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 256 256"><rect width="256" height="256" stroke="none" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="200" y1="200" x2="56" y2="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
				<span>Close</span>
			</button>
		{/if}
		<div class="content">
			<h4><slot name="title"></slot></h4>
			<slot></slot>
		</div>
	</div>
</div>

<style>

	.closeButton {
		display: flex;
		align-items: center;
		justify-content: start;
		width: fit-content;
		height: 2rem;
		padding: 00.5rem;
		background-color: transparent;
		border: none;
		border-radius: var(--borderRadius, 0.2rem);
		transition: all ease-in-out 0.2s;
		cursor: pointer;
		font: var(--modalCloseFont, 400 0.75rem sans-serif);
		color: var(--modalCloseText,#161616);
	}

	.closeButton svg{
		fill:var(--modalCloseText,#161616);
		stroke:var(--modalCloseText,#161616);
	}

	.closeButton span{
		margin-left: 0.2rem;
	}

	.closeButton:hover span::after{
		position: relative;
		display: block;
		top: 00.2s;
		content: "";
		width:100%;
		border-bottom: var(--modalCloseText,#161616) 00.1rem solid;
	}

	.closeButton span::after{
		position: relative;
		display: block;
		content: "";
		width:0%;
		border-bottom: var(--modalCloseText,#161616) 00.1rem solid;
		transition: all ease-in-out 0.2s;
	}

	h4 {
		color:var(--modalTitleText, #161616);
		font:var(--modalTitleFont,300 1.25rem sans-serif);	
		margin: 0px;
	}

	.wrapper {
		position: fixed;
		top:0px;
		left:0px;
		width: 100vw;
		height: 100vh;
		z-index: 3;
		pointer-events: none;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		opacity: 0;
	}

	.container{
		position: fixed;
		background-color: var(--modalBg ,#fafafa);
		padding: 1.5rem;
		padding-top: 1rem;
		padding-left: 1rem;
		border-radius: var(--borderRadius, 0.2rem);
		min-width: 15rem;
		min-height: 10rem;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: center;
	}

	.content{
		margin-top: 0.5rem;
		margin-left: 0.5rem;
		font:var(--modalFont, 400 1rem sans-serif);
		color:var(--modalText, #161616)
	}

	.show {
		opacity: 1;
		pointer-events: unset;
	}
</style>