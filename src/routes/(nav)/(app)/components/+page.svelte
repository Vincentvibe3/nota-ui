<script lang="ts">
	import { Header } from '$lib';
	import Link from '$lib/Text/Link.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>
<svelte:head><title>Components</title></svelte:head>
<Header>Components</Header>
<main>
	{#each data.names as name}
		<Link href="/components/{name}">{name}</Link>
	{/each}
</main>
<style>
	main {
		display: flex;
		flex-direction: column;
		width: calc(100% - 6rem);
		margin-top:2rem;
		padding: 0rem 3rem 3rem 3rem;
		justify-content: start;
	}

	:global( a ) {
		margin:0.5rem 0rem;
	}

</style>