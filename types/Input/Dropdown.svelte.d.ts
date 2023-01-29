/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface DropdownProps {
  /**
   * @default null
   */
  htmlElement?: null | HTMLSelectElement;
}

export default class Dropdown extends SvelteComponentTyped<
  DropdownProps,
  {},
  { default: {} }
> {}
