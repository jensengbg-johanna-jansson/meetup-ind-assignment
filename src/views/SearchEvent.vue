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
            return [];
        }
    }
}
</script>

<style>

</style>