<template>
    <div class="searchbar">
        <input type="text" class="searchbar-input" placeholder="search..." v-model="searchTerm" />
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
    data() {
        return {
            searchTerm: ''
        }
    },
    methods: {
        startSearch() {
            this.$router.push({ path: 'search', query: { term: this.searchTerm }});
        }
    }
}
</script>

<style lang="scss" scoped>
    .searchbar {
        background: $pink;
        width: 100%;
        padding: .4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 5rem;

        &-input {
            border: none;
            background: none;
            color: #fff;
            font-size: 1.2rem;
            padding: .5rem .5rem;
            margin-left: 1rem;
            width: 100%;
        }
        &-input::placeholder {
            color: #fff;
            opacity: .6;
        }
        &-input:focus {
            outline: none;
        }
    }
</style>