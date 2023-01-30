/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface HeaderProps {
  /**
   * @default ""
   */
  img?: string;

  /**
   * @default ""
   */
  video?: string;

  /**
   * @default ""
   */
  alt?: string;

  /**
   * @default "left"
   */
  position?: string;
}

export default class Header extends SvelteComponentTyped<
  HeaderProps,
  {},
  { default: {} }
> {}
