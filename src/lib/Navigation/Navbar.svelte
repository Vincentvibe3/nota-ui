<script lang="ts">
	import { ContentContainer } from '$lib/Layout';
	import { createEventDispatcher, onMount } from 'svelte';
	
	/**
	 * Controls whether the nav bar will be transparent at the top of the page
	 */
	 export let alwaysOpaque = true;

	/**
	 * Control the look of the navbar
	 */
	export let navStyle: 'shadow' | 'border' = 'border';

	/**
	 * Set the navigation content to be row-reverse
	 */
	export let reverse = false;

	let transparent = true;
	let show = true;
	let lastScrollPosition = 0;
	let opaque = true;

	const dispatch = createEventDispatcher<{ onTitleClick: void }>();

	onMount(() => {
		lastScrollPosition = window.scrollY;
		window.addEventListener('scroll', (_) => {
			if (window.scrollY === 0) {
				// you're at the top of the page
				show = true;
				transparent = true;
				opaque = true;
			} else {
				transparent = false;
				opaque = false;
				show = lastScrollPosition > window.scrollY;
			}
			lastScrollPosition = window.scrollY;
		});
	});

	const onTitleClick = () => {
		dispatch('onTitleClick');
	};
</script>

<!-- 
	@component Navbar
	
	Navbar shown at the top of a page

	Props:
	- alwaysOpaque (boolean): Controls whether the nav bar will be transparent at the top of the page
	- navStyle ("shadow"|"border"): Control the look of the navbar
	- reverse (boolean): Set the navigation content to be row-reverse

	Slots:
	- default: Content of the navbar
	- menuIcon: Icon for the button opening a sidebar
	- icon: Icon for the webpage
	- title: Title of the site

	Events:
	- onTitleClick: dispatched when the title button is pressed

	Css Variables:
	- navbarTextTitleHover (default:#f0f0f0): Text color of the title area on hover
	- navBgTitleHover (default:#161616): Bg color of the title area on hover
	- navIconHover (default:#f0f0f0): icon color in the title area on hover
	- navIcon (default:#f0f0f0): icon color in the title arwea
	- navText (default:#f0f0f0): text color for text in the navbar
	- navFont (default:400 1rem sans-serif): font for text in the navbar
	- navTextTransparent (default:#f0f0f0): text color when the navbar becomes transparent
	- navIconTransparent (default:#f0f0f0): icon color then the navbar becomes transparent
	- navBg (default:#b3386b): background when the navbar isnt transparent
	- navBottomBorder (default:#c0c0c0): bottom border of the navbar

 -->
<div
	class:bar={true}
	class:transparent={transparent && !alwaysOpaque}
	class:opaque={alwaysOpaque && opaque}
	class:show>
	<div
		class:transparent={transparent && !alwaysOpaque}
		class:opaque={alwaysOpaque && opaque}
		class="bg"
		class:shadow={navStyle === 'shadow'} />
	<ContentContainer direction="row">
		<button on:click={onTitleClick} class="titleWrapper">
			{#if $$slots.menuIcon}
				<div class="iconWrapper menuIcon" class:iconOnly={!$$slots.default}>
					<slot name="menuIcon" />
				</div>
			{/if}
			{#if $$slots.icon}
				<div class="iconWrapper" class:iconOnly={!$$slots.default}>
					<slot name="icon" />
				</div>
			{/if}
			<slot name="title" />
		</button>
		<ContentContainer --contentContainerPaddingx="1rem" bind:reverse direction="row">
			<slot />
		</ContentContainer>
	</ContentContainer>
</div>

<style lang="scss">
	.bg.opaque {
		opacity: 1;
	}

	button {
		width: fit-content;
		height: 100%;

		box-sizing: content-box;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;

		padding: 0 1.5rem;

		font: inherit;

		white-space: nowrap;

		color: inherit;
		background-color: transparent;
		border: none;

		cursor: pointer;

		transition: all ease-in-out 0.2s;

		&:hover {
			color: var(--navbarTextTitleHover, #f0f0f0);
			background-color: var(--navBgTitleHover, #161616);
		}

		&:hover .menuIcon :global(svg) {
			fill: var(--navIconHover, #f0f0f0);
			stroke: var(--navIconHover, #f0f0f0);
		}
	}

	.iconWrapper {
		display: flex;
		height: 100%;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		&:empty {
			display: none;
		}

		&.menuIcon {
			display: flex;
			margin-right: 0.5rem;

			&:empty {
				display: none;
			}

			& :global(svg) {
				height: auto;
				width: 1.5rem;
				fill: var(--navIcon, #f0f0f0);
				stroke: var(--navIcon, #f0f0f0);
				transition: all ease-in-out 0.2s;
			}
		}
	}

	.bar {
		position: fixed;

		width: 100vw;
		height: 3.5rem;

		top: 0px;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;

		padding-right: 2rem;

		backdrop-filter: blur(10px);

		gap: 1rem;

		z-index: 2;

		color: var(--navText, #f0f0f0);

		transition: all ease 0.2s;

		font: var(--navFont, 400 1rem sans-serif);

		transform: translateY(-100%);

		&.transparent {
			backdrop-filter: unset;
			color: var(--navTextTransparent, #f0f0f0);

			.menuIcon :global(svg) {
				fill: var(--navIconTransparent, #f0f0f0);
				stroke: var(--navIconTransparent, #f0f0f0);
			}
		}

		&.show,
		&:focus-visible,
		&:focus-within {
			transform: translateY(0%);
			transform: translateY(0%);
		}
	}

	.bg {
		position: fixed;

		width: 100%;
		height: 100%;

		background-color: var(--navBg, #b3386b);

		opacity: 0.8;

		z-index: -1;

		border-bottom: var(--navBottomBorder, #c0c0c0) solid 0.1rem;

		box-sizing: border-box;

		transition: all ease 0.2s;

		&.shadow {
			border-bottom: none;
			box-shadow: #00000021 0.2rem 0.2rem 0.3rem;
		}

		transition: all ease 0.5s;

		&.transparent {
			border-bottom: transparent solid 0.1rem;
			background-color: transparent;
			box-shadow: none;
		}
	}

	@media only screen and (min-width: 1000px) {
		.iconWrapper.menuIcon {
			display: none;
		}

		button {
			&:hover {
				color: inherit;
				background-color: inherit;
			}

			&:hover .menuIcon :global(svg) {
				fill: inherit;
				stroke: inherit;
			}
		}
	}
</style>
