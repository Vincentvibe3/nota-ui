/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface SidebarProps {
  /**
   * @default true
   */
  show?: boolean;
}

export default class Sidebar extends SvelteComponentTyped<
  SidebarProps,
  {},
  { default: {} }
> {}
