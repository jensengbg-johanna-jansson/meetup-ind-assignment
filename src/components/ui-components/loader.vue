<template>
    <div class="loader">
        <span class="loader-circle"></span>
    </div>
</template>

<script>
export default {
    name: 'loader'
}
</script>

<style lang="scss" scoped>
    .loader {
        width: 100%;
        height: 50vh;
        @include centeredFlex();

        &-circle {
            width: 5rem;
            height: 5rem;
            border-radius: 5rem;
            display: block;
            border: .5rem solid rgba(0, 0, 0, .2);
            border-top: .5rem solid $pink;
            animation: rotateAnim .6s infinite ease-in-out, changeColor .6s infinite ease-in-out;
        }

        @keyframes rotateAnim {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg) }
        }
        @keyframes changeColor {
            0% { border-top: .5rem solid $pink; }
            50% { border-top: .5rem solid $orange; }
            100% { border-top: .5rem solid $pink; }
        }
    }
</style>