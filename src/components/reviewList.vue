<template>
    <div class="review-list">
        <reviewItem 
            v-for="review in reviewData" 
            :key="review.reviewId"
            :reviewItem="review"
        />
    </div>
</template>

<script>
import reviewItem from '@/components/reviewItem.vue';

export default {
    name: 'reviewList',
    components: {
        reviewItem
    },
    props: {
        reviewData: Array
    }
}
</script>

<style>

</style>