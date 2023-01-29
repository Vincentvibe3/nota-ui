/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface ModalProps {
  /**
   * @default false
   */
  open?: boolean;

  /**
   * @default false
   */
  strict?: boolean;
}

export default class Modal extends SvelteComponentTyped<
  ModalProps,
  {},
  { default: {}; title: {} }
> {}
