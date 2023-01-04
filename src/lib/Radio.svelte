<script lang="ts">

	export let htmlElement:HTMLInputElement|null=null;
	export let name:string="";
	export let value:string="";
	export let group:any;

	const onClick = () => {
		if (htmlElement!= null){
			htmlElement.checked = true
		}
	}

</script>
<div style={$$props.style} on:click={onClick}>
	<input bind:group={group} value={value} name={name} on:click type="radio" bind:this={htmlElement}>
	<div class="radioWrapper"></div>
	<slot></slot>
</div>


<style>

	:root{
		--borderColor: #C0C0C0
	}

	input {
		display: none;
	}

	.radioWrapper {
		cursor: pointer;
		width: 0.8rem;
		height: 0.8rem;
		border-radius: 1.5rem;
		border: #bf5383 solid 0.2rem;
		background-color: #00000000;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin:0.5rem
	}

	input:checked ~ .radioWrapper{
		border: #99003b solid 0.2rem;
	}

	input:checked ~ .radioWrapper::after {
		content: "";
		width: 40%;
		height: 40%;
		border-radius: 1.5rem;
		background-color: #99003b;
	}

	div {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

</style>