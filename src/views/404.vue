<template>
    <section class="error404">
        <h1 class="error404-header">404</h1>
        <p>Ooops, could not find page</p>
    </section>
</template>

<script>
export default {
    name: 'page404'
}
</script>

<style lang="scss" scoped>
    .error404 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 90vh;
        width: 100%;

        &-header {
            font-size: 10rem;
            color: $pink;
            margin-bottom: 1.5rem;
            line-height: 10rem;
        }
        p {
            font-size: 1.5rem;
        }
    }
</style>