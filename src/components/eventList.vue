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
    }
}
</script>

<style>

</style>