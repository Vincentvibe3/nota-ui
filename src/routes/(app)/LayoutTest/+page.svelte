<script lang="ts">
    import TextInput from '$lib/Input/TextInput.svelte';
	import Card from '$lib/Layout/Card.svelte';
	import ContentContainer from '$lib/Layout/ContentContainer.svelte';
    import ContentGrid from '$lib/Layout/ContentGrid.svelte';
	import Header from '$lib/Other/Header.svelte';
	import Link from '$lib/Other/Link.svelte';

</script>
<ContentGrid>
    <Header slot="header">Test page</Header>
    <ContentContainer>
        <Card>
            <p>Hello</p>
            <Link href="/">This is a link</Link>
        </Card>
        <Card --cardMargin="2rem">
            <img style="height:10rem;" slot="image" src="https://images.unsplash.com/photo-1677530248533-59eb53c30df5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
            <p style="margin-top:0px;">Hello</p>
            <Link href="/">This is a link</Link>
        </Card>
    </ContentContainer>
    <ContentContainer>
        <Card><p>Hello</p></Card>
        <p>Hello long text here</p>
        <TextInput text="" placeholder="p"></TextInput>    
    </ContentContainer>
    <ContentContainer direction="row">
        <ul style="width:40rem;">
            {#each [...Array(100).keys()] as i} 
                <li style="margin:1rem; width:fit-content;">
                    Entry {i}
                </li>
            {/each}
        </ul>
    </ContentContainer>
    <ContentContainer>
        <p>Hello long text here</p>
        <TextInput text="" placeholder="p"></TextInput>    
    </ContentContainer>
    <ContentContainer direction="row">
        <p>Hello long text here</p>
        <TextInput text="" placeholder="p"></TextInput>    
    </ContentContainer>
    <ContentContainer>
        <p>Hello long text here</p>
        <TextInput text="" placeholder="p"></TextInput>    
    </ContentContainer>
    <ContentContainer>
        <p>Hello long text here</p>
        <TextInput text="" placeholder="p"></TextInput>    
    </ContentContainer>
</ContentGrid>
<style>

</style>