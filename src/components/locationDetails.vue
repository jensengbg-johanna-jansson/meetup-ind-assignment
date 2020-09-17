<template>
    <div class="details">
        <ul class="details-list">
            <span class="details-line"></span>
            <li class="details-list-item">
                <span class="details-list-item-icon"><i class="fas fa-calendar-alt"></i></span>
                <p class="details-list-item-text">{{ detailsData.date }}</p>
            </li>       
            <li class="details-list-item">
                <span class="details-list-item-icon"><i class="far fa-clock"></i></span>
                <p class="details-list-item-text">{{ detailsData.startTime }} - {{ detailsData.endTime }}</p>
            </li>
            <li class="details-list-item">
                <span class="details-list-item-icon details-list-item-adress-icon"><i class="fas fa-map-marker-alt"></i></span>
                <p class="details-list-item-text details-list-item-place">{{ detailsData.locationPlace }}</p>
                <p class="details-list-item-text">{{ detailsData.locationStreet }}</p>
                <p class="details-list-item-text">{{ detailsData.locationZip }} {{ detailsData.locationCity }}</p>
            </li>
            <li class="details-list-item">
                <span class="details-list-item-icon"><i class="fas fa-clipboard"></i></span>
                <p class="details-list-item-text">{{ detailsData.locationNotes }}</p>
            </li>
        </ul>
        <div class="details-map">

        </div>
    </div>
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
    .details {
        width: 100%;       
        display: flex;
        flex-direction: column;
        align-items: center;
        
        &-line {
            width: .5rem;
            height: 100%;
            position: absolute;
            top: 0;
            left: 1rem - .25rem;
            @include gradient(0deg);
            z-index: -1;
        }

        &-list {
            list-style-type: none;
            width: 100%;
            position: relative;

            &-item {
                display: grid;
                grid-template-columns: 3rem 1fr;
                margin-bottom: 1.5rem;
                align-items: center;

                &-icon {
                    width: 2rem;
                    height: 2rem;
                    border-radius: 2rem;
                    font-size: 1.3rem;
                    background: $pink;
                    color: #fff;
                    @include centeredFlex();
                    align-self: start;
                }
                &-adress-icon {
                    grid-row: span 3;
                }
                &-text {
                    font-size: 1rem;
                }
                &-place {
                    font-weight: bold;
                }
            }
        }

        &-map {
            width: 100%;
            height: 180px;
            background: #888;
        }
    }
</style>