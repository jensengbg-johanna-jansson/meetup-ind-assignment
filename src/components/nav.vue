<template>
    <header>
        <button @click="toggleNav">Menu</button>
        <nav v-if="showNav"></nav>
    </header>
</template>

<script>
export default {
    name: 'mainNav',
    data() {
        return {
            showNav: false
        }
    },
    methods: {
        toggleNav() {
            this.showNav = !this.showNav;
        }
    }
}
</script>

<style>

</style>