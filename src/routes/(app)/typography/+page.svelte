<script lang="ts">
	import Header from '$lib/Other/Header.svelte';
</script>
<Header>Typography</Header>
<main>
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
</main>
<style>
	main h1, main h2, main h3, main h4, main h5, main h6, main p {
		margin: 0.5rem 0rem;
	}

	main h1 {
		font: var(--heading1);
	}
	main h2 {
		font: var(--heading2);
	}
	main h3 {
		font: var(--heading3);
	}
	main h4 {
		font: var(--heading4);
	}
	main h5 {
		font: var(--heading5);
	}
	main h6 {
		font: var(--heading6);
	}
	main .subtitle {
		font:var(--subtitle);
	}
	main p{
		font: var(--body);
	}
	main .body2 {
		font:var(--body2)
	}

	main label {
		font: var(--caption);
		margin: 0.75rem 0rem;
	}
	main .buttons{
		font:var(--buttons);
	}
	main .caption{
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