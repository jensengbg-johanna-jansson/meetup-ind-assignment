<template>
    <button class="primary-button">{{ buttonText }}</button>
</template>

<script>
export default {
    name: 'primaryButton',
    props: {
        buttonText: String
    }
}
</script>

<style lang="scss" scoped>
    .primary-button {
        border: 1px solid $pink;
        background: #fff;
        font-family: 'Roboto', sans-serif;
        color: $pink;
        text-transform: uppercase;
        font-weight: 300;
        font-size: 1.1rem;
        border-radius: 5rem;
        padding: .7rem 2rem;
        box-shadow: 0 0 2px rgba(0, 0, 0, .2);
    }
    .primary-button:focus {
        outline: none;
    }
</style>