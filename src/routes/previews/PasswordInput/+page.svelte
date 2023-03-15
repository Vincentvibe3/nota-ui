<script lang="ts">
	import PasswordInput from "$lib/TextInput/PasswordInput.svelte";
    import Button from '$lib/Button/Button.svelte'
    let text = ""
    let valid:boolean|undefined;
    let showPassword=false;

	const revealPassword = () => {
		showPassword = !showPassword;
	};
    
</script>
<div class="preview">
    <PasswordInput  
        bind:text={text} 
        bind:valid={valid} 
        placeholder="Placeholder Text">
    </PasswordInput>
    <p>With icon</p>
    <PasswordInput
		name="password"
		bind:showText={showPassword}
		bind:text
		placeholder="Password"
		on:iconRightClick={revealPassword}
		bind:valid={valid}>
		<svelte:fragment slot="iconright">
			{#if text != null && !showPassword}
				<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="var(--inputIconColor)" viewBox="0 0 256 256" ><rect width="256" height="256" fill="none" /><path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><circle cx="128" cy="128" r="40" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
			{:else if text != null && showPassword}
				<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="var(--inputIconColor)" viewBox="0 0 256 256" ><rect width="256" height="256" fill="none" /><line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5" fill="none" stroke="var(--inputIconColor)" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
			{/if}
		</svelte:fragment>
	</PasswordInput>
    <p>Typed text: {text}</p>
    <div class="controls">
        <Button on:click={()=>{valid=true}} disabled={valid==true} >Set Valid</Button>
        <Button on:click={()=>{valid=false}} disabled={valid==false} >Set Invalid</Button>
        <Button on:click={()=>{valid=undefined}} disabled={valid==undefined} >Reset</Button>
    </div>
</div>
<style>

    .preview {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding:2rem;
        height:fit-content;
    }

    .controls{
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>