<script lang="ts">
	export let show=false;
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click class:show={show}></div>
<style lang="scss">
	div {
		position: fixed;
		top:0px;
		left:0px;

		width: 100vw;
		height: 100vh;

		display: block;

		background-color: var(--backdropColor, #000000);
		opacity: 0;

		transition: opacity ease-in-out 0.2s;
		
		pointer-events: none;
		
		&.show{
			opacity: 0.7;
			pointer-events: unset;
		}
	}

</style>