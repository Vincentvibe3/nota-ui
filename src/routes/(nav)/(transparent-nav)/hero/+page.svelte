<h1>This is text</h1>
<img src="https://images.unsplash.com/photo-1674935644759-3a918be81c70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80">
<div></div>
<style>

	div {
		width: 100vw;
		height: 200vh;
	}

	h1 {
		font: var(--heading1);
		color: white;
		z-index: 1;
		position: absolute;
		top:50vh;
		left:50vw;
		transform: translate(-50%, -50%);
		text-shadow: #000000 0.2rem 0.2rem 4rem;
	}

	img{
		position: fixed;
		top:0px;
		width:100vw;
		height: 100vh;
		object-fit: cover;
	}	
</style>