/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface ButtonProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["button"]> {
  /**
   * Button Html Element
   * @default null
   */
  htmlElement?: null | HTMLButtonElement;

  /**
   * Button type
   * @default "primary"
   */
  type?: string;

  /**
   * Disabled state of the button
   * @default false
   */
  disabled?: boolean;
}

/**  Button
 *
 * 	- type: "primary | secondary | tertitary | danger"
 */
export default class Button extends SvelteComponentTyped<
  ButtonProps,
  { click: WindowEventMap["click"] },
  { default: {}; icon: {} }
> {}
