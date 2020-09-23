import { shallowMount } from '@vue/test-utils';
import reviewItem from '@/components/reviewItem.vue';

describe('reviewItem tests', () => {
    it('should display the data from the recieved prop', () => {
        const testData = {
            reviewId: 1,
            userId: 1,
            rating: 3,
            review: 'Lorem ipsum dolor et sit.'
        }
        let wrapper = shallowMount(reviewItem, {
            propsData: {
                reviewItem: testData
            }
        });

        let expected = testData.review;
        let actual = wrapper.find('.review-text').text();
       
        expect(actual).toBe(expected); 
    })
})