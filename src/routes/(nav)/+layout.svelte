<script>
	import ModalController from "$lib/Modal/ModalController.svelte";
import NavScaffold from "$lib/Navigation/NavScaffold.svelte";

</script>
<ModalController></ModalController>
<NavScaffold>
	<slot></slot>
</NavScaffold>