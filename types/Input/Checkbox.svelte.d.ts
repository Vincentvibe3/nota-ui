/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface CheckboxProps {
  /**
   * @default null
   */
  htmlElement?: null | HTMLInputElement;

  /**
   * @default ''
   */
  name?: string;

  /**
   * @default false
   */
  checked?: boolean;
}

export default class Checkbox extends SvelteComponentTyped<
  CheckboxProps,
  { click: WindowEventMap["click"] },
  { default: {} }
> {}
