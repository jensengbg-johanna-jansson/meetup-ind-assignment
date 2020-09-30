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
        <div class="review-list-pages">
            <span class="review-list-pages-page"
                v-for="review in reviewData" :key="review.reviewId"
            ></span>
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
        &-pages {
            display: flex;
            justify-content: center;
            width: 100%;
            margin-top: 1rem;

            &-page {
                display: block;
                width: 1rem;
                height: 1rem;
                background: $pink;
                border-radius: 1rem;
                margin: 0 .2rem;
                opacity: .5;
            }
        }
    }
</style>