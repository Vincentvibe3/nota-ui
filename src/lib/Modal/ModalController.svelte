<script lang="ts" context="module">
	export const modalQueue: Writable<{ component: any; title: string; strict?: boolean }[]> =
		writable([]);

	/**
	 * Closes the first modal in the current modalQueue
	 */
	export const dismissModal = () => {
		modalQueue.update((queue) => {
			queue.splice(0, 1);
			return queue;
		});
	};

	/**
	 * 
	 * Adds a Modal to be rendered
	 * 
	 * @param component
	 * json object to render the contents of a modal
	 * 
	 */
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
<!-- 
	@component ModalController

	Component that queues displays Modals. Should be placed at the top of a page
	to allow the modals spawned to appear over all other elements

	Modals are queued with the `queueModal` function 
	Data to render the modal should be in the following format:

	`{ component: any; strict?: boolean; title: string }`

	component is a svelte component that will be rendered as the modal's content

	strict controls whether the modal can be dismissed by the user through `Escape`, the backdrop or the close button

	title sets the modals title
	
 -->
{#if $modalQueue.length != 0}
	{#key $modalQueue[0].component}
		<Modal open strict={$modalQueue[0].strict}>
			<svelte:fragment slot="title">{$modalQueue[0].title}</svelte:fragment>
			<svelte:component this={$modalQueue[0].component} />
		</Modal>
	{/key}
{/if}
