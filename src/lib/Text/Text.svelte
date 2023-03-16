<script lang="ts">
	export let tag:string;
	export let heading1=false
	export let heading2=false
	export let heading3=false
	export let heading4=false
	export let heading5=false
	export let heading6=false
	export let subtitle=false
	export let body=false
	export let body2=false
	export let buttons=false
	export let caption=false
</script>
<svelte:element this={tag}
class:heading1
class:heading2
class:heading3
class:heading4
class:heading5
class:heading6
class:subtitle
class:body
class:body2
class:buttons
class:caption>
	<slot></slot>
</svelte:element>
<style lang="scss">
	.heading1 {
		font: var(--heading1);
	}
	.heading2 {
		font: var(--heading2);
	}
	.heading3 {
		font: var(--heading3);
	}
	.heading4 {
		font: var(--heading4);
	}
	.heading5 {
		font: var(--heading5);
	}
	.heading6 {
		font: var(--heading6);
	}

	.subtitle {
		font: var(--subtitle);
	}

	.body {
		font: var(--body);
	}

	.body2 {
		font: var(--body2);
	}

	.buttons {
		font:var(--buttons)
	}

	.caption {
		font:var(--label)
	}

</style>