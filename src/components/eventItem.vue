<template>
    <article class="event-item" @click="openEvent" :class="{ pastEvent: hasEnded }">
        <div class="event-item-date">
            <span class="event-item-date-container">
                <p class="month">{{ dateMonth }}</p>
                <p class="day">{{ dateDay }}</p>
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
        eventItem: Object,
        disabled: Boolean
    },
    methods: {
        openEvent() {            
            if(!this.disabled) {
                this.$router.push('/event/' + this.eventItem.eventId);
            }
        }
    },
    computed: {
        dateMonth() {
            let monthArray = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
            const date = new Date(this.eventItem.date);
            const month = monthArray[date.getMonth()];
            
            return month;
        },
        dateDay() {
            const date = new Date(this.eventItem.date);
            const day = date.getDate();

            return day;
        },
        hasEnded() {
            const currentDate = Date.now();
            const eventDate = Date.parse(this.eventItem.date);
            const timeDiff = currentDate-eventDate;

            if(timeDiff <= 0) {
                return false;
            } else {
                return true;
            }
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
        margin-bottom: 1.5rem;
        
        &-date {
            grid-row: span 3;
            padding: .2rem;
            padding-top: 1rem;
            margin-right: 1rem;
            border-radius: .3rem;
            @include gradient(0deg);
            display: flex;
            max-height: 5rem;
            align-self: center;

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
    .pastEvent {
        opacity: .7;
    }
</style>