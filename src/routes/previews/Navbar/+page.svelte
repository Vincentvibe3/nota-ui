<script lang="ts">
	import { Scaffold } from "$lib";
	import Checkbox from "$lib/Checkbox/Checkbox.svelte";
    import Navbar from "$lib/Navigation/Navbar.svelte";

    let menuIcon = true
    let opaque = false
    let icon = true
</script>
    <Navbar bind:alwaysOpaque={opaque}>
        <svelte:fragment slot="menuIcon">
            {#if menuIcon}
                <!-- Icon from Phosphor Icons (https://phosphoricons.com/) licensed under an MIT license -->
                <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 256 256"><rect width="256" height="256" stroke="none" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="40" y1="64" x2="216" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="40" y1="192" x2="216" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
            {/if}
        </svelte:fragment>
        <svelte:fragment slot="icon">
            {#if icon}
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_921_10)">
                    <rect x="6.85" y="6.85" width="19.3" height="19.3" rx="1.15" fill="#F0F0F0" stroke="#C0C0C0" stroke-width="0.3"/>
                    <path d="M13.952 20L11.527 13.945C11.5303 14.0217 11.537 14.15 11.547 14.33C11.5603 14.5067 11.5736 14.7183 11.587 14.965C11.6036 15.2083 11.617 15.4667 11.627 15.74C11.637 16.0133 11.642 16.2833 11.642 16.55V20H10.837V13.115H12.012L14.477 19.195C14.4736 19.0983 14.462 18.9217 14.442 18.665C14.422 18.405 14.4036 18.0917 14.387 17.725C14.3703 17.3583 14.362 16.97 14.362 16.56V13.115H15.167V20H13.952Z" fill="black"/>
                    <path d="M19.9245 9.3675V11.2325C19.9245 11.4058 19.9603 11.5308 20.032 11.6075C20.1036 11.6842 20.2153 11.7225 20.367 11.7225C20.512 11.7225 20.6486 11.6817 20.777 11.6C20.907 11.5167 21.0078 11.4183 21.0795 11.305V9.3675H21.4995V12H21.142L21.107 11.645C21.0036 11.7783 20.8761 11.8808 20.7245 11.9525C20.5728 12.0225 20.4195 12.0575 20.2645 12.0575C20.0095 12.0575 19.8186 11.99 19.692 11.855C19.567 11.7183 19.5045 11.5275 19.5045 11.2825V9.3675H19.9245ZM23.835 9.3675V11.6675H24.5775V12H22.6025V11.6675H23.415V9.7H22.6275V9.3675H23.835ZM23.5 8.135C23.5933 8.135 23.6675 8.16333 23.7225 8.22C23.7792 8.27667 23.8075 8.34583 23.8075 8.4275C23.8075 8.5125 23.7792 8.58417 23.7225 8.6425C23.6675 8.69917 23.5933 8.7275 23.5 8.7275C23.4117 8.7275 23.3392 8.69917 23.2825 8.6425C23.2258 8.58417 23.1975 8.5125 23.1975 8.4275C23.1975 8.34583 23.2258 8.27667 23.2825 8.22C23.3392 8.16333 23.4117 8.135 23.5 8.135Z" fill="black"/>
                    <rect x="6" y="22" width="13" height="1" rx="0.5" fill="#A31C54"/>
                    <rect x="6" y="10" width="3" height="1" rx="0.5" fill="#A31C54"/>
                    <rect x="6" y="16" width="3" height="1" rx="0.5" fill="#A31C54"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_921_10">
                    <rect width="32" height="32" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            {/if}
        </svelte:fragment>
        <svelte:fragment slot="title">Nota-ui</svelte:fragment>
    </Navbar>
<Scaffold>
    <div class="controls">
        <div class="strictControl iconToggle">
            <Checkbox bind:checked={menuIcon}></Checkbox>
            <p>
                Toggle menu icon
            </p>
        </div>
        <div class="strictControl iconToggle">
            <Checkbox bind:checked={opaque}></Checkbox>
            <p>
                Toggle opacity
            </p>
        </div>
        <div class="strictControl iconToggle">
            <Checkbox bind:checked={icon}></Checkbox>
            <p>
                Toggle icon
            </p>
        </div>
    </div>
</Scaffold>
<div class="bg"></div>
<p class="scroll">End of page</p>
<style>

    .controls{
        top:50%;
        left:50%;
        position: absolute;
        width: 100%;
        z-index: 1;
        font:var(--body2);
        transform:translate(-50%, -50%);
        width: fit-content;
    }

    .bg {
        position: fixed;
        z-index: 0;
        top:0px;
        left:0px;
        width: 100vw;
        height: 100vh;
        background-color: var(--n700);
    }

    .scroll {
        position: absolute;
        color: white;
        z-index: 1;
        top:110vh;
        left:50%;
        transform: translateX(-50%);
        padding: 2rem;
    }

    .strictControl{
        color: white;
        display: flex;
        flex-direction: row;
        margin: 1rem;
        width: fit-content;
    }

    .strictControl p {
        margin-left: 2rem;
    }
</style>