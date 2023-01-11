<script lang="ts">
	import Backdrop from "./Backdrop.svelte";
	import Button from "./Button.svelte";

	export let open:boolean=false;
	export let strict:boolean=false;
	export let canClose:boolean=false;

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
	<div class="container">
		<h4><slot name="title"></slot></h4>
		<slot></slot>
	</div>
</div>

<style>

	h4 {
		font:var(--subtitle);	
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
		background-color: #f0f0f0;
		padding: 2rem;
		border-radius: 0.2rem;
		min-width: 20rem;
		min-height: 10rem;
		font:var(--body);
	}

	.show {
		opacity: 1;
		pointer-events: unset;
	}
</style>