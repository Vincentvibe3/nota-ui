/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface RadioProps {
  /**
   * @default null
   */
  htmlElement?: null | HTMLInputElement;

  /**
   * @default ""
   */
  name?: string;

  /**
   * @default ""
   */
  value?: string;

  /**
   * @default undefined
   */
  group: undefined;
}

export default class Radio extends SvelteComponentTyped<
  RadioProps,
  {},
  { default: {} }
> {}
