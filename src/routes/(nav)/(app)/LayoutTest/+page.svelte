<script lang="ts">
    import { TextInput, Header } from '../../../../..';
	import Card from '$lib/Card/Card.svelte';
    import CardLink from '$lib/Card/CardLink.svelte';
    import CardButton from '$lib/Card/CardButton.svelte';
	import ContentContainer from '$lib/Layout/ContentContainer.svelte';
    import Scaffold from '$lib/Layout/Scaffold.svelte';
	import Link from '$lib/Text/Link.svelte';
	import { Table } from '$lib/Table';
	import TableRow from '$lib/Table/TableRow.svelte';
	import TableCell from '$lib/Table/TableCell.svelte';
	import TableHeader from '$lib/Table/TableHeader.svelte';

    let tableData = [
        [1, 2, 3],
        [4, 5, 6]
    ]

</script>
<Scaffold>
    <Header slot="header">Test page</Header>
    <ContentContainer direction="row">
        <Table>
            <TableHeader>
                <TableCell isHeader>
                    Header
                </TableCell>
                <TableCell isHeader>
                    Header
                </TableCell>
            </TableHeader>
            <TableRow>
                <TableCell>
                    Hello
                </TableCell>
                <TableCell>
                    World
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    Hello
                </TableCell>
                <TableCell>
                    World
                </TableCell>
            </TableRow>
        </Table>
        <Table data={tableData}>
            <TableHeader slot="header">
                <TableCell isHeader>
                    Header
                </TableCell>
                <TableCell isHeader>
                    Header
                </TableCell>
                <TableCell isHeader>
                    Header
                </TableCell>
            </TableHeader>
        </Table>
    </ContentContainer>
    <ContentContainer>
        <Card>
            <p>Hello</p>
            <Link href="/">This is a link</Link>
        </Card>
        <CardLink 
        --cardMargin="2rem"
        href="/"
       >
            <img style="height:10rem;" slot="image" src="https://images.unsplash.com/photo-1677530248533-59eb53c30df5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
            <p style="margin-top:0px;">Hello</p>
        </CardLink>
        <CardButton 
        on:click={()=>{
            alert("card clicked")
        }}
        >
            <p>Hello</p>
            <Link href="/">This is a link</Link>
        </CardButton>
        <Card>
            <p>Hello</p>
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
</Scaffold>
<style>

</style>