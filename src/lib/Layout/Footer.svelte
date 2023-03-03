<script lang="ts">

	// Text position
	export let position="left";

</script>
<div id={$$restProps.id} class:wrapper={true} class={$$restProps.class} style={$$restProps.style}>
	<div class="content {position}">
		<slot></slot>
	</div>
</div>
<style lang="scss">

	h1 {
		color: var(--footerText, #f0f0f0);
		font: var(--footerFont, 700 3rem sans-serif);
		margin: 3rem;
	}

	.content{
		position: absolute;
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		width: 100%;
		height: 100%;


		&.left{
			justify-content: start;
		}
	}

	.content.right{
		justify-content: end;
	}

	.content.center{
		justify-content: center;
	}

	.gradient{
		position: absolute;
		width: 100%;
		height: inherit;
		background: linear-gradient(#00000073, #e6646400, #00000073);
		pointer-events: none;
	}

	.wrapper {
		position:relative;
		width: 100%;
		height: 15rem;
		background-color: var(--footerBg, #c0c0c0);
		background-size: cover;
		background-position: center;
		margin: 0px;
		flex-shrink: 0;
		bottom: 0px;
	}

</style>