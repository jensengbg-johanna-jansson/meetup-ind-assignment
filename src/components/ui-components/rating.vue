<template>
    <div class="rating">
        <i class="fas fa-star rated" v-for="n in rating" :key="n"></i>
        <i class="fas fa-star" v-for="n in unRated" :key="n"></i>
    </div>
</template>

<script>
export default {
    name: 'rating',
    props: {
        rating: Number
    },
    computed: {
        unRated() {
            return 5 - this.rating;
        }
    }
}
</script>

<style lang="scss" scoped>
    .rating {
        display: flex;
        i {
            color: #fff;
            font-size: 1.2rem;
            opacity: .5;
        }
        .rated {
            color: #93E046;
            opacity: 1;
        }
    }
</style>