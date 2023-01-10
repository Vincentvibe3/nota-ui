<script lang="ts">
	export let show:boolean=false;
</script>
<div on:click class:show={show} style={$$props.style}></div>
<style>
	div {
		position: fixed;
		top:0px;
		left:0px;
		width: 100vw;
		height: 100vh;
		background-color: var(--n900, #000000);
		opacity: 0;
		transition: all ease-in-out 0.2s;
		display: none;
	}

	div.show{
		opacity: 0.5;
		display: block;
	}
</style>