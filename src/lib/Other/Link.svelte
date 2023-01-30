<script lang="ts">
	export let href:string;
	export let arrow:boolean=false;
	export let target:string|undefined = undefined
	export let rel:string|undefined = undefined
	export let referrerpolicy:ReferrerPolicy|undefined = undefined
	export let ping:string|undefined = undefined
	export let hreflang:string|undefined = undefined
	export let download:string|undefined = undefined
</script>
<a 
	target={target}
	href={href}
	rel={rel}
	referrerpolicy={referrerpolicy}
	ping={ping}
	hreflang={hreflang}
	download={download}
	{...$$restProps} >
	<span><slot></slot></span>
	{#if arrow}
		<span class="arrowWrapper">
			<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 256 256"><rect width="256" height="256" stroke="none" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line><polyline points="144 56 216 128 144 200" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></polyline></svg>
		</span>
	{/if}
</a>
<style>

	a:hover .arrowWrapper{
		transform: rotate(-45deg);
	}

	span {
		position: relative;
		width: inherit;
		height: inherit;
	}

	.arrowWrapper {
		background-color: var(--p900);
		border-radius: 5rem;
		aspect-ratio: 1;
		padding: 0.25em;
		vertical-align: bottom;
		height: 0.75em;
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		transition: all ease-in-out 0.2s;
		margin-left: 00.4rem;
	}

	svg {
		width: 100%;
		height: inherit;
		fill: white;
		stroke: white;
	}

	a {
		position: relative;
		display: inline-flex;
		flex-direction: row;
		width: inherit;
		height: inherit;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		/* transition: all ease-in-out 0.2s; */
		font-weight: bold;
		color: black;
		width:fit-content;
		padding-bottom: 00.1rem;
	}

	a span:not(.arrowWrapper)::after{
		position: absolute;
		content: "";
		display: inline-block;
		width: 100%;
		height:0.05rem;
		background-color: var(--s600);
		bottom: 0rem;
		transform: translateY(0.2rem);
		left: 0%;
	}

	a:hover span:not(.arrowWrapper)::after{
		background-color: var(--p900);
	}

	a:hover, a:visited:hover{
		color: var(--p900);
	}

	a:visited{
		color: var(--s600);
		/* transition: all ease-in-out 0.2s; */
	}
</style>