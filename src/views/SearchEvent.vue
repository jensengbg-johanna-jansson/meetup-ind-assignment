<template>
    <section class="search-event">
        <searchBar class="search-event-searchbar" />
        <eventList :eventsList="eventsList" />
    </section>
</template>

<script>
import eventList from '@/components/eventList.vue';
import searchBar from '@/components/ui-components/searchBar.vue';
export default {
    name: 'SearchEvent',
    components: {
        eventList,
        searchBar
    },
    computed: {
        eventsList() {
            return [
                {
                    eventId: 1,
                    eventTitle: 'Hanami',
                    startTime: '12:00',
                    endTime: '15:30',
                    date: 'September 12',
                    host: 'Göteborgs Botaniska Trädgård',
                    locationPlace: 'Botaniska Trädgården',
                    locationStreet: 'Carl Skottsbergs Gata 22A',
                    locationZip: '413 19',
                    locationCity: 'Gothenburg',
                    locationNotes: 'Vi samlas vid huvudentrén för att sedan röra oss mot japandalen',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit id diam ut venenatis. Maecenas commodo sapien dapibus orci volutpat, vel maximus tellus convallis. Sed hendrerit, nunc eu pharetra finibus, ligula lacus vulputate arcu, ac lobortis est nisl sed risus.<br>Nunc vel velit posuere, vehicula sapien sit amet, facilisis nisi. Duis erat neque, ornare at cursus sit amet, varius ut augue. Vestibulum dapibus lorem dui, at imperdiet sapien maximus sit amet.',
                    reviews: []
                },
                {
                    eventId: 2,
                    eventTitle: 'Hanami',
                    startTime: '12:00',
                    endTime: '15:30',
                    date: 'September 12',
                    host: 'Göteborgs Botaniska Trädgård',
                    locationPlace: 'Botaniska Trädgården',
                    locationStreet: 'Carl Skottsbergs Gata 22A',
                    locationZip: '413 19',
                    locationCity: 'Gothenburg',
                    locationNotes: 'Vi samlas vid huvudentrén för att sedan röra oss mot japandalen',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit id diam ut venenatis. Maecenas commodo sapien dapibus orci volutpat, vel maximus tellus convallis. Sed hendrerit, nunc eu pharetra finibus, ligula lacus vulputate arcu, ac lobortis est nisl sed risus.<br>Nunc vel velit posuere, vehicula sapien sit amet, facilisis nisi. Duis erat neque, ornare at cursus sit amet, varius ut augue. Vestibulum dapibus lorem dui, at imperdiet sapien maximus sit amet.',
                    reviews: []
                }
            ];
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