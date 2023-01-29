/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface PasswordInputProps {
  /**
   * @default null
   */
  htmlElement?: undefined;

  /**
   * @default ''
   */
  name?: string;

  /**
   * @default null
   */
  valid?: undefined;

  /**
   * @default ''
   */
  placeholder?: string;

  /**
   * @default undefined
   */
  text: undefined;

  /**
   * @default false
   */
  showText?: boolean;
}

export default class PasswordInput extends SvelteComponentTyped<
  PasswordInputProps,
  {
    focus: WindowEventMap["focus"];
    keydown: WindowEventMap["keydown"];
    keyup: WindowEventMap["keyup"];
    click: WindowEventMap["click"];
    iconRightClick: WindowEventMap["iconRightClick"];
    input: WindowEventMap["input"];
  },
  { iconleft: {}; iconright: {} }
> {}
