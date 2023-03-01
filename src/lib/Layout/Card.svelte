<script>
	import CardImpl from "./CardImpl.svelte";

</script>
<CardImpl>
	<slot name="image" slot="image"></slot>
	<slot></slot>
</CardImpl>