<template>
    <section class="search-event">
        <searchBar class="search-event-searchbar" />
        <eventList :eventsList="eventsList" />
    </section>
</template>

<script>
import eventList from '@/components/eventList.vue';
import searchBar from '@/components/ui-components/searchBar.vue';
import getEvent from '@/js/eventDataFunctions.js';

export default {
    name: 'SearchEvent',
    components: {
        eventList,
        searchBar
    },
    computed: {
        eventsList() {
            let events;
            let searchTerm = this.$route.query.term;
            
            if(!searchTerm) {
                events = getEvent.all();
            } else {
                events = getEvent.fromSearch(searchTerm);
            }

            return events;
        }
    }
}
</script>

<style lang="scss" scoped>
    .search-event {
        display: flex;
        flex-direction: column;
        padding: 2rem;

        &-searchbar {
            margin-bottom: 2rem;
        }
    }
</style>