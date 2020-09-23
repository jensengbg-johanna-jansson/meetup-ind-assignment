import { shallowMount } from '@vue/test-utils';
import rating from '@/components/ui-components/rating.vue';

describe('rating tests', () => {
    it('should color as many stars as the rating is', () => {
        const testRating = 3;
        let wrapper = shallowMount(rating, {
            propsData: {
                rating: testRating
            }
        });

        const starsArray = wrapper.findAll('.rated');
       
        expect(starsArray.length).toBe(testRating); 
    })
})