<script lang="ts">
	import Backdrop from "./Backdrop.svelte";

	export let show:boolean=true;

	const close = () => {
		show=false
	}

</script>

<div class="wrapper">
	<Backdrop on:click={close} bind:show={show} style="z-index:inherit;"></Backdrop>
	<div class="content" class:show={show}>
		<button on:click={close} class="close">
			<div style="height: 40%; width:auto; margin:0rem; margin-right:1rem;">
				<svg style="height:100%; width:auto;" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="200" y1="200" x2="56" y2="56" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
				<!-- <svg style="height:100%; width:auto;" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="96" y1="128" x2="160" y2="128" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="96" y1="160" x2="160" y2="160" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M56,40H200a8,8,0,0,1,8,8V200a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24V48A8,8,0,0,1,56,40Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="80" y1="24" x2="80" y2="56" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="128" y1="24" x2="128" y2="56" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="176" y1="24" x2="176" y2="56" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg> -->
			</div>
			Close
		</button>
		<slot></slot>
		<p>Text hekjraagsfkjahgfkajshfgkajsfh gaksjfhgaskfjhgaskjfhgaksfjh</p>
	</div>
	
</div>


<style>

	.close{
		position: relative;
		top:0px;
		width: 100%;
		height: 3.5rem;
		border:none;
		background-color: var(--n700);
		font:var(--buttons);
		color: white;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
		padding-left: 1rem;
		transition: all ease-in-out 0.2s;
		cursor: pointer;
	}

	.close:hover{
		background-color: var(--n800);
	}

	.wrapper {
		z-index: 3;
	}

	.content {
		position: fixed;
		top: 0px;
		left:0px;
		width:20rem;
		height: 100vh;
		color: rgb(0, 0, 0);
		z-index: inherit;
		background-color: var(--n200);
		transform: translateX(-100%);
		transition: all ease 0.2s;
	}

	.content.show{
		transform: translateX(0%);
	}
</style>