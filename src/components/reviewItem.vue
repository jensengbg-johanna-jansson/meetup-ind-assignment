<template>
    <article class="review">
        <div class="review-content">
            <span class="review-content-user-img"><i class="fas fa-user-circle"></i></span>
            <p class="review-content-user-name">Sarah Williams</p>
            <rating :rating="reviewItem.rating" class="review-content-rating" />
            <p class="review-content-text">{{ reviewItem.review }}</p>
        </div>
    </article>
</template>

<script>
import rating from '@/components/ui-components/rating.vue'
export default {
    name: 'reviewItem',
    props: {
        reviewItem: Object
    },
    components: {
        rating
    }
}
</script>

<style lang="scss" scoped>
    .review {
        @include gradient(0deg);
        width: 100%;
        border-radius: 1rem;
        color: #fff;
        position: relative;

        &-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
            width: 100%;
            height: 100%;
            position: absolute;

            &-user-img {
                width: 4rem;
                height: 4rem;
                font-size: 4rem;
                margin-bottom: .5rem;
            }
            &-user-name {
                margin-bottom: .5rem;
            }
            &-rating {
                margin-bottom: 1rem;
            }
            &-text {
                font-weight: 300;
                font-size: .8rem;
                opacity: .8;
                line-height: 1.2rem;
            }
        }
    }
    .review:after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
</style>