<script lang="ts">

</script>
<nav style={$$props.style}>
	<div class="titleWrapper">
		<slot></slot>
		<h1>Component Preview</h1>
	</div>
	<div class="content">
		<ul>
			<li>
				<a href=".">Page 1</a>
			</li>
			<li>
				<a href=".">Page 2</a>
			</li>
		</ul>
	</div>
</nav>
<style>

	h1 {
		font-weight: normal;
		color: #ffffff;
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
		color:#ffffff;
		text-decoration: none;
		transition: all ease-in-out 0.2s;
	}

	a:hover{
		color: #cc6f9b;
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
		background-color: #cc6f9b;
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
		background-color: #cc6f9b;
		transition: all ease-in-out 0.2s;
	}

	.titleWrapper{
		height: 100%;
		padding: 0rem 1.5rem;
		/* background-color: #161616; */
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		/* border-radius: 0rem 0.5rem 0.5rem 0rem; */
	}

	.content {
		width: auto;
		flex-grow: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
	}

	nav {
		position: fixed;
		width: 100vw;
		height: 3.5rem;
		background-color: #a31c54CC;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
		box-shadow: #00000033 0.2rem 0.2rem 1rem;
		/* border-bottom: #606060 solid 0.1rem; */
		z-index: 2;
		/* pointer-events: none */
		transition: all ease 0.2s;
		font: var(--body);
	}

	nav:hover{
		background-color: #a31c54;
	}
</style>