<script lang="ts">
	import {Header, Scaffold} from '$lib';
</script>
<Scaffold --scaffoldGap="0rem">
	<Header slot="header">Typography</Header>
	<h1>Heading 1</h1>
	<h2>Heading 2</h2>
	<h3>Heading 3</h3>
	<h4>Heading 4</h4>
	<h5>Heading 5</h5>
	<h6>Heading 6</h6>
	<p class="subtitle">Subtitle</p>
	<p>Body</p>
	<p class="body2">Body 2</p>
	<p class="buttons">Buttons</p>
	<p class="caption">Caption</p>
</Scaffold>

<style>
	 h1,  h2,  h3,  h4,  h5,  h6,  p {
		margin: 0.5rem 0rem;
	}

	 h1 {
		font: var(--heading1);
	}
	 h2 {
		font: var(--heading2);
	}
	 h3 {
		font: var(--heading3);
	}
	 h4 {
		font: var(--heading4);
	}
	 h5 {
		font: var(--heading5);
	}
	 h6 {
		font: var(--heading6);
	}
	 .subtitle {
		font:var(--subtitle);
	}
	 p{
		font: var(--body);
	}
	 .body2 {
		font:var(--body2)
	}

	 .buttons{
		font:var(--buttons);
	}
	 .caption{
		font:var(--caption);
	}

	main {
		display: flex;
		flex-direction: column;
		width: calc(100% - 6rem);
		margin-top:2rem;
		padding: 0rem 3rem 3rem 3rem;
		justify-content: start;
	}
</style>