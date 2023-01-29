/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface TextInputProps {
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
  shadowOnFocus?: boolean;
}

export default class TextInput extends SvelteComponentTyped<
  TextInputProps,
  {
    focus: WindowEventMap["focus"];
    keydown: WindowEventMap["keydown"];
    keyup: WindowEventMap["keyup"];
    submit: WindowEventMap["submit"];
    click: WindowEventMap["click"];
    iconRightClick: WindowEventMap["iconRightClick"];
    input: WindowEventMap["input"];
  },
  { iconleft: { slot: iconleft }; iconright: { slot: iconright } }
> {}
