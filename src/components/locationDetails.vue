<template>
    <div class="location">
        <p class="location-place-text">{{ locationData.locationPlace }}</p>
    </div>
</template>

<script>
export default {
    name: 'locationDetails',
    props: {
        locationData: Object
    }
}
</script>

<style lang="scss" scoped>

</style>