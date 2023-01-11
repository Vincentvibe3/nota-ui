<script lang="ts">
	export let show:boolean=false;
</script>
<div on:click class:show={show} class={$$restProps.class} style={$$restProps.style}></div>
<style>
	div {
		position: fixed;
		top:0px;
		left:0px;
		width: 100vw;
		height: 100vh;
		background-color: var(--backdropColor, #000000);
		opacity: 0;
		transition: opacity ease-in-out 0.2s;
		display: block;
		pointer-events: none;
	}

	div.show{
		opacity: 0.7;
		pointer-events: unset;
	}
</style>