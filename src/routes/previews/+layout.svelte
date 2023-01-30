<main>
    <div>
        <slot></slot>
    </div>
</main>
<style>
     main {
        height: 100%;
        min-height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        overflow: scroll;
    }

    div {
        height: fit-content;
        width: fit-content;
    }
</style>