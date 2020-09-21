<template>
    <div>
        <primaryButton 
            :buttonText="'go'" 
            @click.native="startSearch"
            class="search-button"
        />
    </div>
</template>

<script>
import primaryButton from '@/components/ui-components/primaryButton.vue';
export default {
    name: 'searchBar',
    components: {
        primaryButton
    },
    methods: {
        startSearch() {
            this.$router.push({ path: 'search', query: { term: 'test' }});
        }
    }
}
</script>

<style lang="scss" scoped>

</style>