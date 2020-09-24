<template>
    <button class="filled-button">{{ buttonText }}</button>
</template>

<script>
export default {
    name: 'filledButton',
    props: {
        buttonText: String
    }
}
</script>

<style lang="scss" scoped>
    .filled-button {
        border: none;
        @include gradient(-90deg);
        font-family: 'Roboto', sans-serif;
        color: #fff;
        text-transform: uppercase;
        font-weight: 300;
        font-size: 1.1rem;
        border-radius: 5rem;
        padding: .7rem 2rem;
        box-shadow: 0 0 4px rgba(0, 0, 0, .3);
    }
    .filled-button:focus {
        outline: none;
    }
</style>