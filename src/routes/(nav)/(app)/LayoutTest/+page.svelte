<script lang="ts">
    import { TextInput, Header, Button } from '$lib';
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
	import Row from '$lib/Layout/Row.svelte';
	import Column from '$lib/Layout/Column.svelte';
	import NewContentContainer from '$lib/Layout/NewContentContainer.svelte';

    let tableData = [
        [1, 2, 3],
        [4, 5, 6]
    ]

</script>
<Scaffold>
    <Header slot="header">Test page</Header>
    <NewContentContainer>
        <Button>
            Text 1
        </Button>
        <Button>
            Text 2
        </Button>
    </NewContentContainer>
    <NewContentContainer>
        <NewContentContainer direction="column">
            <Card>
                <p>Text in a card</p>
            </Card>
            <Button>
                Text 3
            </Button>
            <Button>
                Text 4
            </Button>
        </NewContentContainer>
        <NewContentContainer direction="column">
            <Card>
                <p>Text in a card</p>
            </Card>
            <Button>
                Text 5
            </Button>
            <Button>
                Text 6
            </Button>
        </NewContentContainer>
    </NewContentContainer>
</Scaffold>
<style>

</style>