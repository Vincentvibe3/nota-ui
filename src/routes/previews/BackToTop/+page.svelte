<script lang="ts">
    import BackToTop from '$lib/Navigation/BackToTop.svelte';
</script>
<p class="start">Start of page. Scroll to see in action</p>
<BackToTop></BackToTop>
<p class="scroll">End of page</p>
<style>
    .scroll {
        position: absolute;
        color: black;
        z-index: 1;
        top:110vh;
        left:50%;
        transform: translateX(-50%);
        padding: 2rem;
    }

    .start {
        position: absolute;
        color: black;
        z-index: 1;
        top:0px;
        left:50%;
        transform: translateX(-50%);
        padding: 2rem;
    }
</style>