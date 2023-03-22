<script lang="ts">
	import { ContentContainer, Header, Scaffold } from '$lib';
	import Link from '$lib/Text/Link.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>
<svelte:head><title>Components</title></svelte:head>
<Scaffold --scaffoldGap="0rem">
	<Header slot="header">Components</Header>
	<ContentContainer direction="column">
		{#each data.names as name}
			<Link href="/components/{name}">{name}</Link>
		{/each}
	</ContentContainer>
	
</Scaffold>
