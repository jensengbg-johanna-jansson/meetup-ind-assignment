<template>
    <article class="event-item" @click="openEvent">
        <div class="event-item-date">
            <span class="event-item-date-container">
                <p class="month">Sep</p>
                <p class="day">14</p>
            </span>
        </div>
        <p class="event-item-time">{{ eventItem.startTime }} - {{ eventItem.endTime }}</p>
        <h2 class="event-item-title">{{ eventItem.eventTitle }}</h2>
        <p class="event-item-place">@{{ eventItem.locationPlace }}</p>
    </article>
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

<style lang="scss" scoped>
    .event-item {
        width: 100%;
        display: grid;
        grid-template-columns: min-content 1fr;
        grid-template-rows: 1fr repeat(2, min-content);
        box-shadow: 0 0 5px rgba(0, 0, 0, .5);
        border-radius: 1rem;
        padding: 1rem;
        
        &-date {
            grid-row: span 3;
            padding: .2rem;
            padding-top: 1rem;
            margin-right: 1rem;
            border-radius: .3rem;
            @include gradient(0deg);

            &-container {
                @include centeredFlex();
                flex-direction: column;
                padding: .5rem .8rem;
                border-radius: .2rem;
                background: #fff;
                color: $pink;

                .month {
                    font-weight: bold;
                    text-transform: uppercase;
                }
                .day {
                    font-size: 1.5rem;
                    font-weight: 300;
                }
            }
        }
        &-time {
           font-size: .8rem; 
           align-self: end;
           opacity: .8;
        }
        &-title {
            color: $pink;
            font-size: 1.2rem;
        }
        &-place {
            font-size: .8;
            opacity: .8;
        }
    }
</style>