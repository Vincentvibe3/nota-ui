/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface BackToTopProps {
  /**
   * @default "right"
   */
  position?: string;
}

export default class BackToTop extends SvelteComponentTyped<
  BackToTopProps,
  {},
  {}
> {}
