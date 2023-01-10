<script lang="ts">
	export let img:string="";
	// Text position
	export let position:string="left";
</script>
<div class="wrapper" class:noimage={img==""}>
	{#if img!=""}
		<img alt="unsplash" src={img}>
		<div class="gradient" class:noimage={img==""}></div>
		<!-- https://unsplash.com/photos/Ivz2wREpKO0 -->
	{/if}
	<div class="content {position}">
		<h1 class:noimage={img==""} >Page Title</h1>
	</div>
</div>
<style>

	img {
		position: absolute;
		width: 100%;
		height: inherit;
		object-fit: cover;
		pointer-events: none;
	}

	h1 {
		color: var(--headerTextDark, #f0f0f0);
		font: var(--heading1, 700 3rem sans-serif);
		margin: 3rem;
	}

	h1.noimage {
		color: var(--headerTextLight, #303030);
	}

	.content{
		position: absolute;
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		width: 100%;
		height: 100%;
	}

	.content.left{
		justify-content: start;
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

	.wrapper.noimage{
		border-bottom: #c0c0c0 solid 0.1rem;
	}

	.wrapper {
		position:relative;
		width: 100%;
		height: 25rem;
		background-color: var(--headerBg, #f0f0f0);;
		background-size: cover;
		background-position: center;
		margin: 0px;
	}

</style>