<template>
    <section class="event">

    </section>
</template>

<script>
export default {
    name: 'Event',
    computed: {
        eventData() {
            return { eventId: this.$route.params.eventId };
        }
    }
}
</script>

<style lang="scss" scoped>

</style>