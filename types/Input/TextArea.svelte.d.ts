/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface TextAreaProps {
  /**
   * @default null
   */
  htmlElement?: null | HTMLTextAreaElement;

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
   * @default 'text'
   */
  type?: string;

  /**
   * @default false
   */
  shadowOnFocus?: boolean;
}

export default class TextArea extends SvelteComponentTyped<
  TextAreaProps,
  {
    keyup: WindowEventMap["keyup"];
    keydown: WindowEventMap["keydown"];
    input: WindowEventMap["input"];
    click: WindowEventMap["click"];
    focus: CustomEvent<null>;
  },
  {}
> {}
