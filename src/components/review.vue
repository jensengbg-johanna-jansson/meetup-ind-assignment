<template>
    <div class="review">
        <reviewList v-if="reviews.length > 0" :reviewData="reviews" />
        <primaryButton 
            v-if="isAttending" 
            :buttonText="'write review'"
            @click.native="goToAddReview" />
    </div>
</template>

<script>
import reviewList from '@/components/reviewList.vue';
import primaryButton from '@/components/ui-components/primaryButton.vue';

export default {
    name: 'review',
    components: {
        reviewList,
        primaryButton
    },
    props: {
        reviews: Array
    },
    methods: {
        goToAddReview() {
            let eventId = parseInt(this.$route.params.eventId);

            this.$router.push('/event/' + eventId + '/newreview');
        }
    },
    computed: {
        isAttending() {
            let userEvets = this.$store.state.user.userData.events;
            let eventId = parseInt(this.$route.params.eventId);

            if(userEvets.includes(eventId)) {
                return true;
            } else {
                return false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .review {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
</style>