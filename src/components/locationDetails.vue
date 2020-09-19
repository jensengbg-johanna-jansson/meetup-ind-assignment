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
        detailsData: Object
    }
}
</script>

<style lang="scss" scoped>
    .details {
        width: 100%;       
        display: flex;
        flex-direction: column;
        align-items: center;
        color: $text;
        
        &-line {
            width: .5rem;
            height: 100%;
            position: absolute;
            top: 0;
            left: 1rem - .25rem;
            background: $pink;
            @include gradient(0deg);
            background-size: 100% 16rem;
            background-repeat: no-repeat;
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
                    @include centeredFlex();
                    align-self: start;
                    font-size: 1.3rem;
                    color: #fff;
                    background: $pink;
                    @include gradient(0deg);
                    background-size: 100% 16rem;
                    background-position-y: center;
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
            &-item:nth-child(2) span {
                background-position-y: 0;
            }
            &-item:nth-child(5) span {
                background-position-y: -12rem;
            }
        }

        &-map {
            width: 100vw;
            height: 180px;
            background: #888;
        }
    }
</style>