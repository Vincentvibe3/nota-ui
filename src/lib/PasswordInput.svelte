<script lang="ts">
 	import TextInputImpl from "./TextInputImpl.svelte";
	export let htmlElement:HTMLInputElement|null=null;
	export let name:string="";
	export let valid:Boolean|null=null;
	export let placeholder=""
	export let text:string;

</script>

<TextInputImpl bind:htmlElement bind:text bind:name bind:valid bind:placeholder type="password" on:click on:input></TextInputImpl>