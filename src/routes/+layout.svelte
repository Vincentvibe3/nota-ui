<script lang="ts">
</script>
<svelte:head>
	{#if import.meta.env.DEV}
		<link rel="stylesheet" href="/src/global.css">
	{/if}
</svelte:head>
<slot></slot>