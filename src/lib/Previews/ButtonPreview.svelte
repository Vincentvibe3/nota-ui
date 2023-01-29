<script>

	import Button from "$lib/Other/Button.svelte";

</script>
<div class="preview">
	<div class="buttonContainer">
		<label>Primary</label>
		<Button>Press me</Button>
	</div>
	<div class="buttonContainer">
		<label>Secondary</label>
		<Button type="secondary">Press me</Button>
	</div>
	
	<div class="buttonContainer">
		<label>Tertiary</label>
		<Button type="tertiary">Press me</Button>
	</div>
	
	<div class="buttonContainer">
		<label>Danger</label>
		<Button type="danger">Press me</Button>
	</div>
	
	<div class="buttonContainer">
		<label>Disabled</label>
		<Button disabled>Press me</Button>
	</div>
	<div class="buttonContainer">
		<label>With Icon</label>
		<Button>
			<div slot="icon" style="display:flex; flex-direction:row; align-items:center; justify-content:center; heigth:100%;">
				<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="#ffffff" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"></circle><line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="128" y1="88" x2="128" y2="168" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
			</div>
			Press me
		</Button>
	</div>
</div>