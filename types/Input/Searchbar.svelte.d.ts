/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface SearchbarProps {
  /**
   * @default ''
   */
  text?: string;

  /**
   * @default null
   */
  htmlElement?: undefined;

  /**
   * @default []
   */
  suggestions?: [];

  /**
   * @default ''
   */
  placeholder?: string;
}

export default class Searchbar extends SvelteComponentTyped<
  SearchbarProps,
  {
    iconRightClick: WindowEventMap["iconRightClick"];
    optionClick: CustomEvent<any>;
    submit: CustomEvent<any>;
    input: CustomEvent<any>;
  },
  { iconleft: { slot: iconleft }; iconright: { slot: iconright } }
> {}
