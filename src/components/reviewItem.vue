<template>
    <article class="review">
        <span class="review-user-img"></span>
        <p class="review-user-name">Sarah Williams</p>
        <p class="review-text">{{ reviewItem.review }}</p>
    </article>
</template>

<script>
export default {
    name: 'reviewItem',
    props: {
        reviewItem: Object
    }
}
</script>

<style lang="scss" scoped>
    .review {
        @include gradient(0deg);
        width: 100%;
        border-radius: 1rem;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;

        &-text {
            font-weight: 300;
            font-size: .8rem;
            opacity: .8;
        }
    }
</style>