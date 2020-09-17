<template>
    <ul class="details">
        <li class="details-item">
            <span class="details-item-icon">O</span>
            <p class="details-item-text">{{ detailsData.date }}</p>
        </li>       
        <li class="details-item">
            <span class="details-item-icon">O</span>
            <p class="details-item-text">{{ detailsData.startTime }} - {{ detailsData.endTime }}</p>
        </li>
        <li class="details-item">
            <span class="details-item-icon">O</span>
            <p class="details-item-text details-item-place">{{ detailsData.locationPlace }}</p>
            <p class="details-item-text">{{ detailsData.locationStreet }}, {{ detailsData.locationZip }} {{ detailsData.locationCity }}</p>
        </li>
        <li class="details-item">
            <span class="details-item-icon">O</span>
            <p class="details-item-text">{{ detailsData.locationNotes }}</p>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'locationDetails',
    props: {
        //locationData: Object
    },
    data() {
        return {
            detailsData: {
                startTime: '12:00',
                endTime: '15:30',
                date: 'September 15, 2020',
                locationPlace: 'Botaniska Trädgården',
                locationStreet: 'Carl Skottsbergs Gata 22A',
                locationZip: '413 19',
                locationCity: 'Gothenburg',
                locationNotes: 'Vi samlas vid huvudentrén för att sedan röra oss mot japandalen'
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>