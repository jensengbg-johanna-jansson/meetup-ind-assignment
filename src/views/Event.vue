<template>
    <section class="event">
        <article class="event-info">
            <p class="event-info-date">{{ eventData.date }}, {{ eventData.startTime }} - {{ eventData.endTime }}</p>
            <h1 class="event-info-title">{{ eventData.eventTitle }}</h1>
            <p class="event-info-place">@{{ eventData.locationPlace }}</p>

            <p class="event-info-heading">Hosted by</p>
            <p class="event-info-host">{{ eventData.host }}</p>

            <addButton 
                class="event-info-join-button" 
                :hasJoined="false" 
                :hasEnded="false" 
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
    </section>
</template>

<script>
import locationDetails from '@/components/locationDetails.vue';
import addButton from '@/components/ui-components/addButton.vue';
import getEvent from '@/js/eventDataFunctions.js';

export default {
    name: 'Event',
    components: {
        locationDetails,
        addButton
    },
    data() {
        return {
            /*
            eventData: {
                eventTitle: 'Hanami',
                startTime: '12:00',
                endTime: '15:30',
                date: 'September 12',
                host: 'Göteborgs Botaniska Trädgård',
                locationPlace: 'Botaniska Trädgården',
                locationStreet: 'Carl Skottsbergs Gata 22A',
                locationZip: '413 19',
                locationCity: 'Gothenburg',
                locationNotes: 'Vi samlas vid huvudentrén för att sedan röra oss mot japandalen',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit id diam ut venenatis. Maecenas commodo sapien dapibus orci volutpat, vel maximus tellus convallis. Sed hendrerit, nunc eu pharetra finibus, ligula lacus vulputate arcu, ac lobortis est nisl sed risus.<br>Nunc vel velit posuere, vehicula sapien sit amet, facilisis nisi. Duis erat neque, ornare at cursus sit amet, varius ut augue. Vestibulum dapibus lorem dui, at imperdiet sapien maximus sit amet.',
                reviews: []
            }
            */
        }
    },
    methods: {
        addUserToEvent() {
            this.$router.push('/event/1/join');
        }
    },
    computed: {
        eventData() {
            let eventId = parseInt(this.$route.params.eventId);
            console.log(getEvent.byId(eventId));
            return getEvent.byId(eventId);
        },
        locationDetailsData() {
            return {
                startTime: this.eventData.startTime,
                endTime: this.eventData.endTime,
                date: this.eventData.date,
                locationPlace: this.eventData.locationPlace,
                locationStreet: this.eventData.locationStreet,
                locationZip: this.eventData.locationZip,
                locationCity: this.eventData.locationCity,
                locationNotes: this.eventData.locationNotes
            }
        }
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