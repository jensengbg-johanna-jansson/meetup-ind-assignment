<template>
    <div class="event-list">
        <eventItem 
            v-for="item in eventsList" 
            :key="item.eventId" 
            :eventItem="item"
        />
    </div>
</template>

<script>
import eventItem from '@/components/eventItem.vue';
export default {
    name: 'eventList',
    components: {
        eventItem
    },
    props: {
        eventsList: Array
    },
    mounted() {
        console.log('EventList:');
        console.log(this.eventsList);
    }
}
</script>

<style>

</style>