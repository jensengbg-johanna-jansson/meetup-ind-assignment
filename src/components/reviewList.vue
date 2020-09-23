<template>
    <div class="review-list">
        <div class="review-list-wrapper">
            <reviewItem 
                v-for="review in reviewData" 
                :key="review.reviewId"
                :reviewItem="review"
                class="review-list-wrapper-item"
            />
        </div>
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

<style lang="scss" scoped>
    .review-list {
        width: 100%;
        padding: $mainPadding;
        
        &-wrapper {
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;

            &-item {
                flex: 0 0 auto;
                margin-right: 1rem;
            }
        }
    }
</style>