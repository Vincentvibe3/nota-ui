/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface SpinnerProps {
  /**
   * @default "1.2rem"
   */
  size?: string;

  /**
   * @default "loading"
   */
  status?: string;
}

export default class Spinner extends SvelteComponentTyped<
  SpinnerProps,
  {},
  {}
> {}
