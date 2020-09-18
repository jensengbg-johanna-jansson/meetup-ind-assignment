<template>
    <section class="event">
        <article class="event-info">
            <p class="event-info-date">{{ eventData.date }}, {{ eventData.startTime }} - {{ eventData.endTime }}</p>
            <h1 class="event-info-title">{{ eventData.eventTitle }}</h1>
            <p class="event-info-place">@{{ eventData.locationPlace }}</p>

            <p class="event-info-heading">Hosted by</p>
            <p class="event-info-host">{{ eventData.host }}</p>
        </article>
            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                <path d="M0.00,49.98 C147.85,150.48 373.59,-64.63 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none;"></path>
            </svg>

        <article class="event-details">
            <h2 class="event-details-heading">Event Details</h2>
            <p>{{ eventData.description }}</p>

            <locationDetails />
        </article>
    </section>
</template>

<script>
import locationDetails from '@/components/locationDetails.vue';
export default {
    name: 'Event',
    components: {
        locationDetails
    },
    data() {
        return {
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
        }
    },
    computed: {
        /*
        eventData() {
            return { eventId: this.$route.params.eventId };
        }
        */
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