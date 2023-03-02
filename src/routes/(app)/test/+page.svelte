<script>
	import { Header } from "$lib";
	import ContentContainer from "$lib/Layout/ContentContainer.svelte";
	import ContentGrid from "$lib/Layout/PageContentLayout.svelte";

</script>
<Header></Header>
<ContentGrid>
	<ContentContainer direction="column">
		<p>Paragraph</p>
		<p>Paragraph</p>
		<p>Paragraph</p>
	</ContentContainer>
</ContentGrid>

