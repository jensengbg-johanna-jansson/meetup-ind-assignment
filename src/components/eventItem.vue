<template>
    <button class="event-item" @click="openEvent">

    </button>
</template>

<script>
export default {
    name: 'eventItem',
    props: {
        eventItem: Object
    },
    methods: {
        openEvent() {            
            this.$router.push('/event/' + this.eventItem.eventId);
        }
    }
}
</script>

<style>

</style>