<script>

	import Button from "$lib/Other/Button.svelte";

    let count = 0

    const onClick = () => {
        count++
    }

</script>
<div class="preview">
    <div class="buttonContainer">
        <p>Primary</p>
        <Button on:click={onClick}>Clicked {count} times</Button>
    </div>
    <div class="buttonContainer">
        <p>Secondary</p>
        <Button on:click={onClick} type="secondary">Clicked {count} times</Button>
    </div>

    <div class="buttonContainer">
        <p>Tertiary</p>
        <Button on:click={onClick} type="tertiary">Clicked {count} times</Button>
    </div>

    <div class="buttonContainer">
        <p>Danger</p>
        <Button on:click={onClick} type="danger">Clicked {count} times</Button>
    </div>

    <div class="buttonContainer">
        <p>Disabled</p>
        <Button on:click={onClick} disabled>Clicked {count} times</Button>
    </div>
    <div class="buttonContainer">
        <p>With Icon</p>
        <Button on:click={onClick}>
            <div slot="icon" style="display:flex; flex-direction:row; align-items:center; justify-content:center; heigth:100%;">
                <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="#ffffff" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"></circle><line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="128" y1="88" x2="128" y2="168" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
            </div>
            Clicked {count} times
        </Button>
    </div>
</div>

<style>
    .buttonContainer {
        margin:1rem
    }

    .preview{
        display: flex;
        flex-wrap: wrap;
        margin: 3rem;
    }
</style>