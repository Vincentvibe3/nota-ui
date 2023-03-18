<script>
	import { Button, TextInput } from "$lib";


	import { dismissModal } from "$lib/Modal/ModalController.svelte";

</script>
<p>Hello from the modal!</p>
<TextInput text=""></TextInput>
<div style="width:100%; display:flex; flex-direction:row; justify-content:space-between; margin-top:1rem;">
	<Button buttonStyle="secondary" on:click={dismissModal}>
		Cancel
	</Button>
	<Button on:click={dismissModal}>
		Complete
	</Button>
</div>