<script lang="ts">
	import TextInput from "$lib/TextInput/TextInput.svelte";
    import Button from '$lib/Button/Button.svelte'
	import { ContentContainer } from "$lib";
    let text = ""
    let valid:boolean|null=null;
    
</script>
<div class="preview">
    <TextInput bind:text={text} bind:valid={valid} placeholder="Placeholder Text"></TextInput>
    <p>Typed text: {text}</p>
    <ContentContainer>
        <Button on:click={()=>{valid=true}} disabled={valid === true} >Set Valid</Button>
        <Button on:click={()=>{valid=false}} disabled={valid === false} >Set Invalid</Button>
        <Button on:click={()=>{valid=null}} disabled={valid === null} >Reset</Button>
    </ContentContainer>
</div>
<style>

    .preview {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding:2rem
    }

</style>