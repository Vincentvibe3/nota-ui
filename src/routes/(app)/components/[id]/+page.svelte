<script lang="ts" context="module">
// from carbon-design-system/sveld 
// @ https://github.com/carbon-design-system/sveld/blob/78d3a7950c6f15fbf01d824153668bde44c6f34b/src/ComponentParser.ts

interface ComponentProp {
  name: string;
  kind: "let" | "const" | "function";
  constant: boolean;
  type?: string;
  value?: any;
  description?: string;
  isFunction: boolean;
  isFunctionDeclaration: boolean;
  isRequired: boolean;
  reactive: boolean;
}

interface ComponentSlot {
  name?: string;
  default: boolean;
  fallback?: string;
  slot_props?: string;
  description?: string;
}

interface ForwardedEvent {
  type: "forwarded";
  name: string;
  element: ComponentInlineElement | ComponentElement;
}

interface DispatchedEvent {
  type: "dispatched";
  name: string;
  detail?: any;
  description?: string;
}

type ComponentEvent = ForwardedEvent | DispatchedEvent;


interface TypeDef {
  type: string;
  name: string;
  description?: string;
  ts: string;
}

interface ComponentInlineElement {
  type: "InlineComponent";
  name: string;
}

interface ComponentElement {
  type: "Element";
  name: string;
}

type RestProps = undefined | ComponentInlineElement | ComponentElement;

interface Extends {
  interface: string;
  import: string;
}

export interface ParsedComponent {
  props: ComponentProp[];
  moduleExports: ComponentProp[];
  slots: ComponentSlot[];
  events: ComponentEvent[];
  typedefs: TypeDef[];
  rest_props: RestProps;
  extends?: Extends;
  componentComment?: string;
  moduleName: string;
  filePath: string;
}
</script>
<script lang="ts">
	import CodeBlock from '$lib/Other/CodeBlock.svelte';
	import Header from '$lib/Other/Header.svelte';	
	import Separator from '$lib/Other/Separator.svelte';	
	import Link from '$lib/Other/Link.svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import Checkbox from '$lib/Input/Checkbox.svelte';
	export let data: PageData;
	let componentData:ParsedComponent = data.componentData
	let iframe:HTMLIFrameElement;


	onMount(()=>{
		resizeIFrameToFitContent(iframe)
	})
	
	function resizeIFrameToFitContent( iFrame:HTMLIFrameElement ) {
		console.log("resizing")
		let contentWindow = iFrame.contentWindow
		if (contentWindow != null){
			iFrame.height = contentWindow.document.body.scrollHeight.toString();
		}
	}

</script>
<Header>{componentData.moduleName}</Header>
<main>
	<p class="subtitle">Preview</p>
	<iframe bind:this={iframe} src="/previews/{componentData.moduleName}" title="Preview for {componentData.moduleName}"></iframe>
	<Link arrow style="margin:1rem 0rem;" target="_blank" href="/previews/{componentData.moduleName}">Open preview in new tab</Link>
	<p class="subtitle">Props</p>
	<div class="tablewrapper">
		<table>
			<tr>
				<th>Name</th>
				<th>Description</th>
				<th>Required</th>
				<th>reactive</th>
				<th>type</th>
				<th>default</th>
			</tr>
			{#each componentData.props as prop}
			<tr>
				<th>{prop.name}</th>
				<th>{prop.description}</th>
				<th>{prop.isRequired}</th>
				<th>{prop.reactive}</th>
				<th><CodeBlock>{prop.type}</CodeBlock></th>
				<th>{prop.value}</th>
			</tr>
				
			{/each}
		</table>
	</div>
	

	{#each componentData.props as prop}
		<p>Name: {prop.name}
			{#if prop.isRequired}
				<CodeBlock>Required</CodeBlock>
			{/if}
			{#if prop.reactive}
				<CodeBlock>Reactive</CodeBlock>
			{/if}
		</p>
		<p>Type: {prop.type}</p>
		{#if prop.description != undefined}
			<p>{prop.description}</p>
		{/if}
		<p>Default value: {prop.value}</p>
		<Separator></Separator>
	{/each}
	
	{#if componentData.rest_props !=undefined}
		<p class="subtitle">$$restProps</p>
		<p>Applied on {componentData.rest_props.name}</p>
	{/if}
	<p class="subtitle">Slots</p>
	{#each componentData.slots as slot}
		<p>
			{#if slot.default}
				Default
				<CodeBlock>default</CodeBlock>
			{:else}
				{slot.name}
			{/if}
		</p>
	{/each}
	<p class="subtitle">Events</p>
	{#each componentData.events as event}
		<p>
			{event.name}
			<CodeBlock>{event.type}</CodeBlock>
		</p>
	{/each}
	
	
</main>
<style>
	iframe {
		/* height: 30rem; */
		border: var(--n300) solid 0.2rem;
		border-radius: var(--borderRadius);
		overflow: scroll;
		min-height: 15rem;
	}


	.tablewrapper {
		width:100%;
		overflow: scroll;
	}

	table {
		font: var(--body);
		border-radius: var(--borderRadius);
		background-color: var(--n300);
		border-collapse: collapse;
		width: fit-content;
		/* min-width: fit-content; */
	}

	tr {
		background-color: var(--n400);
	}

	th {
		text-align: start;
		/* white-space: nowrap; */
		padding: 1rem;
		font-weight: 400;
	}

	tr + tr {
		background-color: var(--n300);
		border-top: none;
		border-top: var(--n400) solid 0.1rem;
		border-bottom: none;
	}

	th + th{
		/* border-left: var(--n400) solid 0.15rem; */
	}

	.subtitle {
		font:var(--subtitle);
	}

	p {
		font:var(--body);
	}

	main {
		display: flex;
		flex-direction: column;
		width: calc(100% - 6rem);
		margin-top:2rem;
		padding: 0rem 3rem 3rem 3rem;
		justify-content: start;
	}
</style>