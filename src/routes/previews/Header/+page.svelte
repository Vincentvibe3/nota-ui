<script lang="ts">
	import { Radio } from "$lib";
    import Header from "$lib/Other/Header.svelte";

    let status:string="video"
    let position="left"
</script>
<div class="bg"></div>
<div class="preview">

    {#if status=="video"}
        <Header position={position} video="/video2.mp4">
            Header Title
        </Header>
    {:else if status=="image"}
        <Header 
            position={position}
            img="https://images.unsplash.com/photo-1673247463250-835991994a3d?ixlib=rb-4.0.3&dl=pramod-tiwari-Ivz2wREpKO0-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
            >
            Component Preview
        </Header>
    {:else}
        <Header position={position}>
        Component Preview
        </Header>
    {/if}
    <div class="controls"> 
        <form>
            <label for="radio">Header types</label>
            <Radio bind:group={status} name="hello" value="image">
                <label style="margin-left: 0.5rem;" for="radio">Image</label>
            </Radio>
            <Radio bind:group={status} name="hello" value="video">
                <label style="margin-left: 0.5rem;" for="radio">Video</label>
            </Radio>
            <Radio bind:group={status} name="hello" value="none">
                <label style="margin-left: 0.5rem;" for="radio">None</label>
            </Radio>
        </form>
        <form>
            <label for="radio">Positions</label>
            <Radio bind:group={position} name="hello" value="left">
                <label style="margin-left: 0.5rem;" for="radio">Left</label>
            </Radio>
            <Radio bind:group={position} name="hello" value="center">
                <label style="margin-left: 0.5rem;" for="radio">Center</label>
            </Radio>
            <Radio bind:group={position} name="hello" value="right">
                <label style="margin-left: 0.5rem;" for="radio">Right</label>
            </Radio>
        </form>
    </div>

</div>

<style>

    .preview {
        width: 100vw;
    }

    .bg {
        position: fixed;
        z-index: 0;
        top:0px;
        left:0px;
        width: 100vw;
        height: 100vh;
        background-color: var(--n100);
    }

    form {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content:space-evenly;
        margin:3rem
    }

    .controls{
        position: relative;
        width: 90%;
        z-index: 1;
        font:var(--body2)
    }
</style>