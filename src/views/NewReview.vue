<template>
    <section class="new-review">
        <button class="new-review-back-button"><i class="fas fa-arrow-left"></i></button>
        <h1 class="new-review-main-heading">What did you think of...</h1>
        <eventItem :eventItem="eventData" :disabled="true" />
        <h2 class="new-review-heading">Overall rating</h2>
        <addRating @update-rating="setRating" />
        <h2 class="new-review-heading">Write your review</h2>
        <div class="new-review-textarea">
            <textarea 
                class="new-review-textarea-input" 
                name="review" 
                id="review"
                placeholder="Add a few words..."
                v-model="reviewInput"
                @input="countLetters"></textarea>
            <span class="input-limit"><p class="input-limit-counter">{{ letterCount }}</p>/250</span>
        </div>
        <span class="new-review-error">{{ errorMsg }}</span>
        <filledButton 
            class="new-review-submit-button" 
            :buttonText="'submit review'"
            @click.native="addReview"
        />
    </section>
</template>

<script>
import eventItem from '@/components/eventItem.vue';
import filledButton from '@/components/ui-components/filledButton.vue';
import addRating from '@/components/ui-components/addRating.vue';
import getEvent from '@/js/eventDataFunctions.js';
import postReview from '@/js/postReviewFunctions.js';

export default {
    name: 'NewReview',
    components: {
        eventItem,
        filledButton,
        addRating
    },
    data() {
        return {
            eventData: '',
            reviewInput: '',
            letterCount: 0,
            rating: null,
            errorMsg: ''
        }
    },
    methods: {
        countLetters() {
            this.letterCount = this.reviewInput.length;
        },
        setEventData() {
            let eventId = this.$route.params.eventId;
            let event = getEvent.byId(eventId);
            this.eventData = event;
        },
        setRating(value) {
            this.rating = parseInt(value);
        },
        async addReview() {
            if(this.rating === null) {
                this.errorMsg = 'Please select a rating';
            } else if(this.reviewInput === '') {
                this.errorMsg = 'Please write a review';
            } else {
                let reviewObject = {
                    rating: this.rating, 
                    review: this.reviewInput,
                    userId: this.$store.state.user.userId,
                    eventId: this.$route.params.eventId
                }

                postReview.post(reviewObject)               
                .then((res) => {
                    if(res.success) {
                        this.errorMsg = 'Review was added';
                    } else {
                        this.errorMsg = 'Error: Could not add review';
                    }                
                });
            }
        }
    },
    created() {
        this.setEventData();
    }
}
</script>

<style lang="scss" scoped>
    .new-review {
        padding: $mainPadding;
        display: flex;
        flex-direction: column;

        &-back-button {
            width: 3.5rem;
            height: 3.5rem;
            @include centeredFlex();
            box-shadow: 0 0 4px rgba(0, 0, 0, .5);
            border-radius: 4rem;
            border: none;
            background: #fff;
            font-size: 1.5rem;
            color: $pink;
            margin-bottom: 2rem;
        }
        &-main-heading {
            color: $pink;
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        &-heading {
            color: $pink;
            font-size: 1.3rem;
            margin-bottom: 1rem;
        }
        &-textarea {
            border: 1px solid $pink;
            border-radius: 1rem;
            padding: 1rem;
            padding-bottom: .2rem;
            width: 100%;
            margin-bottom: 1rem;
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            &-input {               
                width: 100%;
                min-height: 13rem;
                font-family: 'Roboto', sans-serif;
                letter-spacing: .2px;
                line-height: 1.4rem;
                color: $text;
                font-size: 1rem;
                border: none;
            }
            &-input:focus {
                outline: none;
            }
            .input-limit {
                display: flex;
                opacity: .6;
            }
        }
        &-error {
            @include centeredFlex();
            min-height: 1.5rem;
            color: $error;

        }
        &-submit-button {
            align-self: center;
        }
    }
</style>