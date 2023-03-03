<script lang="ts">
	import TextInput from "$lib/TextInput/TextInput.svelte";
    import Button from '../../../lib/Button/Button.svelte'
    let text = ""
    let valid:boolean|undefined;
    
</script>
<div class="preview">
    <TextInput style="width:100%;" bind:text={text} bind:valid={valid} placeholder="Placeholder Text"></TextInput>
    <p>Typed text: {text}</p>
    <div class="controls">
        <Button style="margin-right: 1rem;" on:click={()=>{valid=true}} disabled={valid==true} >Set Valid</Button>
        <Button style="margin: 1rem;" on:click={()=>{valid=false}} disabled={valid==false} >Set Invalid</Button>
        <Button style="margin-left: 1rem;" on:click={()=>{valid=undefined}} disabled={valid==undefined} >Reset</Button>
    </div>
</div>
<style>

    .preview {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding:2rem
    }

    .controls{
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>