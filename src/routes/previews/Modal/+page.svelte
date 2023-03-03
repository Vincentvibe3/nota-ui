<script lang="ts">
	import Checkbox from "$lib/Checkbox/Checkbox.svelte";
import TextInput from "$lib/TextArea/TextInput.svelte";
	import Button from "../../../lib/Button/Button.svelte";
	import Modal from "$lib/Other/Modal.svelte";

    let modalOpen:boolean = false;
    let strict:boolean=false

</script>
<div class="preview">
    <div class="controls">
        <Button on:click={()=> modalOpen = !modalOpen}>Open Modal</Button>
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
    
    
    <Modal bind:open={modalOpen} bind:strict={strict}>
        <svelte:fragment slot="title">
            Title
        </svelte:fragment>
        <p>Hello from the modal!</p>
        <TextInput style="width:30rem;" text="" placeholder="placeholder"></TextInput>
        <div style="display:flex; flex-direction:row; justify-content:space-between; margin-top:1rem;">
            <Button buttonStyle="secondary" on:click={()=>{modalOpen=false}}>
                Cancel
            </Button>
            <Button on:click={()=>{modalOpen=false}}>
                Complete
            </Button>
        </div>
    </Modal>
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
