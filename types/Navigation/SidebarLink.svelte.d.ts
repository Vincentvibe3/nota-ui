/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface SidebarLinkProps {
  /**
   * @default null
   */
  htmlElement?: null | HTMLAnchorElement;

  /**
   * @default undefined
   */
  href: undefined;

  /**
   * @default false
   */
  multiline?: boolean;

  /**
   * @default true
   */
  closeOnClick?: boolean;
}

export default class SidebarLink extends SvelteComponentTyped<
  SidebarLinkProps,
  {},
  { default: {} }
> {}
