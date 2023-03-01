<script lang="ts">
	import CardImpl from "./CardImpl.svelte";

	export let href:string;
	export let target:string|undefined = undefined
	export let rel:string|undefined = undefined
	export let referrerpolicy: "" | "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" 
		= ""
	export let ping:string|undefined = undefined
	export let hreflang:string|undefined = undefined
	export let download:string|undefined = undefined
</script>

<div 
class="linkWrapper">
	<a
	target={target}
	href={href}
	rel={rel}
	referrerpolicy={referrerpolicy}
	ping={ping}
	hreflang={hreflang}
	download={download}>
</a>
	<CardImpl highlightable>
		<slot name="image" slot="image"></slot>
		<slot></slot>
	</CardImpl>
</div>
<style lang="scss">


	.linkWrapper {
		width:100%;
		display: block;

		a{
			
		}
	}

	* {
		color: inherit;
		text-decoration: none;
	}
</style>