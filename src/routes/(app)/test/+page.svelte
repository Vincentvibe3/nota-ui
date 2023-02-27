<script>
	import { Header } from "$lib";
	import ContentContainer from "$lib/Layout/ContentContainer.svelte";
	import ContentGrid from "$lib/Layout/ContentGrid.svelte";

</script>
<Header></Header>
<ContentGrid>
	<ContentContainer type="column">
		<p>Paragraph</p>
		<p>Paragraph</p>
		<p>Paragraph</p>
	</ContentContainer>
</ContentGrid>

