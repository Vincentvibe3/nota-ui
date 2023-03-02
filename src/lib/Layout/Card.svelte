<script>
	import CardImpl from "./CardImpl.svelte";
	export let margin=""
</script>
<CardImpl margin={margin}>
	<slot name="image" slot="image"/>
	<slot/>
</CardImpl>