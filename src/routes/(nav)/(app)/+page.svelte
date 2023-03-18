<script>

	import { Text, CodeBlock, CardLink, ContentContainer, FixedGrid, Header, Scaffold, Link, Button } from "$lib";
	import { queueModal } from "$lib/Modal/ModalController.svelte";
	import ModalContent from "./ModalContent.svelte";

</script>
<Scaffold>
	<Header slot="header">
		Nota-ui Docs
	</Header>
	<ContentContainer --contentContainerGap="3rem" alignment="flex-start">
		<!-- <ContentContainer direction="column" alignment="center"> -->
			<ContentContainer direction="column">
				<Text tag="h2" heading6>
					Welcome to the Nota-ui docs
				</Text>
				<Button on:click={
					()=>{queueModal({component:ModalContent, strict:true, title:"Modal"});queueModal({component:ModalContent, strict:false, title:"Modal"})}
				}>
					Queue Modal
				</Button>
				<p>
					Nota-ui is a component library for 
					<Link href="https://svelte.dev/" arrow>Svelte</Link>
				</p>
				<Text tag="h2" heading6>
					Get Started
				</Text>
				<p>
					run <CodeBlock>npm install 0.0.12-alpha</CodeBlock> to install
				</p>
			</ContentContainer>
		<!-- </ContentContainer> -->
		<ContentContainer direction="column">
			<Text tag="h2" heading6>
				Explore Nota-ui
			</Text>
			<FixedGrid --cardBg="var(--p400)" rows={2} columns={2}>
				<CardLink direction="row" --cardMargin="0rem" href="/components">
					<p>Components</p>
					<!-- Icon from Phosphor Icons (https://phosphoricons.com/) licensed under an MIT license -->
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"  viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
				</CardLink>
				<CardLink direction="row" --cardMargin="0rem" href="/typography">
					<p>Typography system</p>
					<!-- Icon from Phosphor Icons (https://phosphoricons.com/) licensed under an MIT license -->
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"  viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
				</CardLink>
				<CardLink direction="row" --cardMargin="0rem" href="/color">
					<p>Color system </p>
					<!-- Icon from Phosphor Icons (https://phosphoricons.com/) licensed under an MIT license -->
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"  viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
				</CardLink>
				<CardLink direction="row" --cardMargin="0rem" href="https://github.com/Vincentvibe3/nota-ui">
					<p>Source Code</p>
					<!-- Icon from Phosphor Icons (https://phosphoricons.com/) licensed under an MIT license -->
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"  viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
				</CardLink>
			</FixedGrid>
		</ContentContainer>
	</ContentContainer>
</Scaffold>