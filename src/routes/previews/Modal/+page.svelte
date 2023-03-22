<script lang="ts">
	import Checkbox from "$lib/Checkbox/Checkbox.svelte";
	import Button from "$lib/Button/Button.svelte";
	import {ModalController, queueModal} from "$lib";
	import ModalContent from "../../(nav)/(app)/ModalContent.svelte";

    let modalOpen = false;
    let strict=false

</script>
<ModalController></ModalController>
<div class="preview">
    <div class="controls">
        <Button on:click={
            ()=>{queueModal({component:ModalContent, strict:strict, title:"Modal"});}
        }>
            Open Modal
        </Button>
        <div class="strictControl">
            <Checkbox bind:checked={strict}></Checkbox>
            <p>
                Strict is
                {#if strict}
                    on
                {:else}
                    off
                {/if}
            </p>
        </div>
    </div>
</div>
<style>

    .preview {
        height: 20rem;
    }

    .controls{
        display: flex;
        align-items: center;
        justify-content: center;
        margin:3rem
    }

    .strictControl p {
        margin: 1rem;
    }

    .strictControl {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1rem;
        margin-left: 3rem;
    }

</style>
