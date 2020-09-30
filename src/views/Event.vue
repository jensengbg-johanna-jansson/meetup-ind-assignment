<template>
    <section class="event">
        <article class="event-info">
            <p class="event-info-date">{{ dateText }}, {{ eventData.startTime }} - {{ eventData.endTime }}</p>
            <h1 class="event-info-title">{{ eventData.eventTitle }}</h1>
            <p class="event-info-place">@{{ eventData.locationPlace }}</p>

            <p class="event-info-heading">Hosted by</p>
            <p class="event-info-host">{{ eventData.host }}</p>

            <addButton 
                class="event-info-join-button" 
                :hasEnded="hasEnded" 
                @click.native="addUserToEvent"
            />
        </article>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M0.00,49.98 C147.85,150.48 373.59,-64.63 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none;"></path>
        </svg>

        <article class="event-details">
            <h2 class="event-details-heading">Event Details</h2>
            <p>{{ eventData.description }}</p>

            <locationDetails :detailsData="locationDetailsData" />
        </article>
        <review :reviews="eventData.reviews" />
    </section>
</template>

<script>
import locationDetails from '@/components/locationDetails.vue';
import addButton from '@/components/ui-components/addButton.vue';
import getEvent from '@/js/eventDataFunctions.js';
import getUser from '@/js/userDataFunctions.js';
import review from '@/components/review.vue';

export default {
    name: 'Event',
    components: {
        locationDetails,
        addButton,
        review
    },
    data() {
        return {
            eventData: '',
            locationDetailsData: ''
        }
    },
    methods: {
        isLoggedIn() {
            let user = this.$store.state.user;

            if(user.userId != null) {
                return true;
            } else {
                return false;
            }
        },
        addUserToEvent() {
            const isLoggedIn = this.isLoggedIn();
            if(isLoggedIn) {           
                let eventId = this.$route.params.eventId;

                getUser.addEvent(eventId)
                .then(res => {
                    console.log('hejsan!!!!');

                    if(res.success === true) {
                        this.$router.push('/event/' + eventId + '/join');
                    } else {
                        console.log('Error: Could not add event to user');
                    }
                })
            } else {
                this.$router.push('/signin');
            }
        },
        setLocationDetails() {
            this.locationDetailsData = {
                startTime: this.eventData.startTime,
                endTime: this.eventData.endTime,
                date: this.dateText,
                locationPlace: this.eventData.locationPlace,
                locationStreet: this.eventData.locationStreet,
                locationZip: this.eventData.locationZip,
                locationCity: this.eventData.locationCity,
                locationNotes: this.eventData.locationNotes
            }
        },
        setEventData() {
            let eventId = this.$route.params.eventId;
            let event = getEvent.byId(eventId);
            
            this.eventData = event;

            this.setLocationDetails();
        },
    },
    computed: {
        hasEnded() {
            const currentDate = Date.now();
            const eventDate = Date.parse(this.eventData.date);
            const timeDiff = currentDate-eventDate;

            if(timeDiff <= 0) {
                return false;
            } else {
                return true;
            }
        },
        dateText() {
            const monthArray = ['January', 'Februari', 'Mars', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const date = new Date(this.eventData.date);
            const month = monthArray[date.getMonth()];           
            const day = date.getDate();
            const year = date.getFullYear();
            let dayWithOrdinal;

            if(day == '1' || day == '21' || day == '31') {
                dayWithOrdinal = day + 'st';
            } else if(day == '2' || day == '22') {
                dayWithOrdinal = day + 'nd';
            } else if(day == '3' || day == '23') {
                dayWithOrdinal = day + 'rd';
            } else {
                dayWithOrdinal = day + 'th';
            }

            const fullDate = dayWithOrdinal + ' ' + month + ', ' + year;
            
            return fullDate;
        }
    },
    created() {
        this.setEventData();
    }
}
</script>

<style lang="scss" scoped>
    .event {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        
        svg {
            height: 3rem; 
            width: 100%;
            transform: scale(-1, -1);
            z-index: -1;
        }
        path {
            fill: $pink;
        }

        &-info {
            display: flex;
            flex-direction: column; 
            width: 100%;
            padding: 2rem;
            color: #ffffff;
            @include gradient(0deg);
            position: relative;

            &-title {
                font-size: 1.5rem;
            }
            &-date {
                font-size: .8rem;
                font-weight: 100;
                opacity: .7;
                margin-bottom: .4rem;
            }
            &-place {
                font-weight: 100;
                opacity: .7;
                margin-bottom: 2rem;
            }
            &-heading {
                font-weight: 400;
            }
            &-host {
                font-weight: 100;
            }
            &-join-button {
                position: absolute;
                right: 2rem;
                bottom: -3rem;
            }
        }

        &-details {
            padding: 2rem;
            width: 100%;
            display: flex;
            flex-direction: column;

            &-heading {
                font-size: 1.25rem;
                color: $pink;
                margin-bottom: 1rem;
            }

            p {
                margin-bottom: 2rem;
                color: $text;
            }
        }
    }
</style>