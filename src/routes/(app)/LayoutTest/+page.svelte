<script lang="ts">
    import TextInput from '$lib/Input/TextInput.svelte';
	import ContentContainer from '$lib/Layout/ContentContainer.svelte';
    import ContentGrid from '$lib/Layout/ContentGrid.svelte';
	import Header from '$lib/Other/Header.svelte';

</script>
<ContentGrid>
    <Header slot="header">Test page</Header>
    <ContentContainer>
        <p>Hello</p>    
    </ContentContainer>
    <ContentContainer>
        <p>Hello long text here</p>
        <TextInput text="" placeholder="p"></TextInput>    
    </ContentContainer>
    <ContentContainer type="row">
        <ul style="width:40rem;">
            {#each [...Array(100).keys()] as i} 
                <li style="margin:1rem;">
                    Entry {i}
                </li>
            {/each}
        </ul>
    </ContentContainer>
    <ContentContainer>
        <p>Hello long text here</p>
        <TextInput text="" placeholder="p"></TextInput>    
    </ContentContainer>
    <ContentContainer type="row">
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