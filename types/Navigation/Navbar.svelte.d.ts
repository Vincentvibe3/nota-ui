/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface NavbarProps {
  /**
   * @default true
   */
  alwaysOpaque?: boolean;
}

export default class Navbar extends SvelteComponentTyped<
  NavbarProps,
  { onTitleClick: CustomEvent<any> },
  { default: {}; icon: {}; title: {} }
> {}
