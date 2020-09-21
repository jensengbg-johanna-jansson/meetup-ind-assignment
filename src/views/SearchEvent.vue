<template>
    <section class="search-event">
        <eventItem 
            v-for="item in eventsList" 
            :key="item.eventId" 
            :eventItem="item"
        />
    </section>
</template>

<script>
import eventItem from '@/components/eventItem.vue';
export default {
    name: 'SearchEvent',
    components: {
        eventItem
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
    }
</style>