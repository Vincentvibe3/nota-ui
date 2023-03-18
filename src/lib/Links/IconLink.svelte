<script lang="ts">
	export let href:string;
	export let arrow = false;
	export let target:string|undefined = undefined
	export let rel:string|undefined = undefined
	export let referrerpolicy: "" | "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" 
		= ""
	export let ping:string|undefined = undefined
	export let hreflang:string|undefined = undefined
	export let download:string|undefined = undefined
</script>
<a target={target}
	href={href}
	rel={rel}
	referrerpolicy={referrerpolicy}
	ping={ping}
	hreflang={hreflang}
	download={download}
	class="wrapper">
	<slot></slot>
</a>
<style lang="scss">
	.wrapper {
		height: 1rem;
		aspect-ratio: 1;
		padding: 0.5rem;
		// border: red solid 0.1rem;
		background-color: transparent;
		border-radius: 50%;
		cursor: pointer;

		&:hover :global( svg ) {
			stroke: gray;
			fill: gray;
		}

		& :global( svg ){
			height: auto;
			width: 100%;
			stroke: black;
			fill: black;
			transition: all ease-in-out 0.2s;
		}
	}
</style>