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
        border: none;
        background: #fff;
        color: $pink;
        text-transform: uppercase;
        font-weight: 300;
        font-size: 1.1rem;
        border-radius: 5rem;
        padding: 1rem 1.5rem;
        box-shadow: 0 0 4px rgba(0, 0, 0, .3);
    }
</style>