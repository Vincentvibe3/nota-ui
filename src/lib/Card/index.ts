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