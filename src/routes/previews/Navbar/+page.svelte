<script lang="ts">
	import Checkbox from "$lib/Checkbox/Checkbox.svelte";
    import Navbar from "$lib/Navigation/Navbar.svelte";

    let icon = true
    let opaque = false
</script>
{#if icon}
    <Navbar bind:alwaysOpaque={opaque}>
        <div slot="icon" style="height: 40%; width:auto; margin:0rem; margin-right:1rem;">
            <svg style="height:100%; width:auto;" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="40" y1="64" x2="216" y2="64" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="40" y1="192" x2="216" y2="192" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
        </div>
        <svelte:fragment slot="title">Nota-ui</svelte:fragment>
    </Navbar>
{:else}
    <Navbar bind:alwaysOpaque={opaque}>
        <svelte:fragment slot="title">Nota-ui</svelte:fragment>
    </Navbar>
{/if}
<div class="controls">
    <div class="strictControl iconToggle">
        <Checkbox bind:checked={icon}></Checkbox>
        <p>
            Toggle icon
        </p>
    </div>
    <div class="strictControl iconToggle">
        <Checkbox bind:checked={opaque}></Checkbox>
        <p>
            Toggle opacity
        </p>
    </div>
</div>
<div class="bg"></div>
<p class="scroll">End of page</p>
<style>

    .controls{
        top:50%;
        left:50%;
        position: absolute;
        width: 100%;
        z-index: 1;
        font:var(--body2);
        transform:translate(-50%, -50%);
        width: fit-content;
    }

    .bg {
        position: fixed;
        z-index: 0;
        top:0px;
        left:0px;
        width: 100vw;
        height: 100vh;
        background-color: var(--n700);
    }

    .scroll {
        position: absolute;
        color: white;
        z-index: 1;
        top:110vh;
        left:50%;
        transform: translateX(-50%);
        padding: 2rem;
    }

    .strictControl{
        color: white;
        display: flex;
        flex-direction: row;
        margin: 1rem;
        width: fit-content;
    }

    .strictControl p {
        margin-left: 2rem;
    }
</style>