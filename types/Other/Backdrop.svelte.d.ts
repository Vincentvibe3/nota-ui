/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface BackdropProps {
  /**
   * @default false
   */
  show?: boolean;
}

export default class Backdrop extends SvelteComponentTyped<
  BackdropProps,
  { click: WindowEventMap["click"] },
  {}
> {}
