<script lang="ts">
	import { Checkbox, ContentContainer, Radio, Scaffold, Text } from "$lib";
    import {Header} from "$lib";

    let status="video"
    let position="left"
    let compact = false
</script>
<Scaffold>
    <div slot="header">
        {#if status === "video"}
            <Header position={position} bind:compact video="/video2.mp4">
                Header Title
            </Header>
        {:else if status === "image"}
            <Header 
                 bind:compact
                position={position}
                img="https://images.unsplash.com/photo-1673247463250-835991994a3d?ixlib=rb-4.0.3&dl=pramod-tiwari-Ivz2wREpKO0-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
                >
                Component Preview
            </Header>
        {:else}
            <Header bind:compact position={position}>
            Component Preview
            </Header>
        {/if}
    </div>
    
    <ContentContainer direction="column">
        <ContentContainer>
            <Text tag="label" body2>Header types</Text>
            <Radio bind:group={status} name="hello" value="image">
                <Text tag="label" body2>Image</Text>
            </Radio>
            <Radio bind:group={status} name="hello" value="video">
                <Text tag="label" body2>Video</Text>
            </Radio>
            <Radio bind:group={status} name="hello" value="none">
                <Text tag="label" body2>None</Text>
            </Radio>
        </ContentContainer>
        <ContentContainer>
            <Text tag="label" body2>Position:</Text>
            <Radio bind:group={position} name="hello" value="left">
                <Text tag="label" body2>Left</Text>
            </Radio>
            <Radio bind:group={position} name="hello" value="center">
                <Text tag="label" body2>Center</Text>
            </Radio>
            <Radio bind:group={position} name="hello" value="right">
                <Text tag="label" body2>Right</Text>
            </Radio>
        </ContentContainer>
        <ContentContainer>
            <Text tag="label" body2>Compact:</Text>
            <Checkbox bind:checked={compact}>
                <Text tag="label" body2>{compact}</Text>
            </Checkbox>
        </ContentContainer>
    </ContentContainer>

</Scaffold>