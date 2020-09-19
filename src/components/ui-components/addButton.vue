<template>
    <button :disabled="hasJoined || hasEnded">
        <i v-if="!hasJoined" class="fas fa-user-plus"></i>
        <i v-else class="fas fa-user-check"></i>
    </button>
</template>

<script>
export default {
    name: 'addButton',
    props: {
        hasJoined: Boolean,
        hasEnded: Boolean
    }
}
</script>

<style lang="scss" scoped>

</style>