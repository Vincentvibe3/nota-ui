<script lang="ts">
    import { page } from '$app/stores';
	import { Scaffold } from '$lib';
	import SiteLayout from '$lib/Layout/SiteLayout.svelte';
</script>
<SiteLayout>
    <Scaffold>
        <h1>{$page.status} {$page.error?.message}</h1>
    </Scaffold>
</SiteLayout>