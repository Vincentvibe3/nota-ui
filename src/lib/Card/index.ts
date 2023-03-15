export {default as Card} from "./Card.svelte"
export {default as CardButton} from "./CardButton.svelte"
export {default as CardLink} from "./CardLink.svelte"
export interface AnchorConfig{
	href:string,
	target:string|undefined,
	rel:string|undefined,
	referrerpolicy:ReferrerPolicy
	ping:string|undefined,
	hreflang:string|undefined,
	download:string|undefined, 
}
export type ReferrerPolicy =  "" | "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url"