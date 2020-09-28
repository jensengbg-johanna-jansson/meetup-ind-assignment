<template>
    <div class="add-rating">
        <label class="add-rating-star" v-for="rating in 5" :key="rating" 
            v-on:click="setRating(rating)" 
            v-on:mouseover="starHover(rating)" 
            v-on:mouseout="starHoverOut"
            :class="{'is-selected': ((value >= rating) && value != null)}"
        >
            <input class="add-rating-radio" type="radio" 
                :value="rating" 
                v-model="value" 
            >
            <i class="fas fa-star"></i>
        </label>
    </div>
</template>

<script>
export default {
    name: 'addRating',
    data() {
        return {
            temp_value: null,
            ratings: [1, 2, 3, 4, 5],
            value: null
        }
    },
    methods: {
        starHover(index) {
            this.temp_value = this.value;
            return this.value = index;
        },
        starHoverOut() {     
            return this.value = this.temp_value;
        },
        setRating(value) {
            this.temp_value = value;
            this.$emit('update-rating', value);
            
            return this.value = value;
        }
    }
}
</script>

<style lang="scss" scoped>
    .add-rating {   
        margin-bottom: 2rem;
        
        &-star {
            color: #000;
            font-size: 1.8rem;
            opacity: .5;
        }
        &-radio {
            display: none;
        }
        .is-selected {
            color: #93E046;
            opacity: 1;
        }
    }
</style>