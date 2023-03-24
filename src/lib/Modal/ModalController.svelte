<script lang="ts" context="module">
	export const modalQueue: Writable<{ component: any; title: string; strict?: boolean }[]> =
		writable([]);

	export const dismissModal = () => {
		modalQueue.update((queue) => {
			queue.splice(0, 1);
			return queue;
		});
	};

	export const queueModal = (component: { component: any; strict?: boolean; title: string }) => {
		if (component.strict === undefined) {
			component.strict = false;
		}
		modalQueue.update((queue) => {
			queue.push(component);
			return queue;
		});
	};
</script>

<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import Modal from './Modal.svelte';
</script>

{#if $modalQueue.length != 0}
	{#key $modalQueue[0].component}
		<Modal open strict={$modalQueue[0].strict}>
			<svelte:fragment slot="title">{$modalQueue[0].title}</svelte:fragment>
			<svelte:component this={$modalQueue[0].component} />
		</Modal>
	{/key}
{/if}
