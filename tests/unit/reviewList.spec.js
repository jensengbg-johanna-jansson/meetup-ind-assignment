import { shallowMount } from '@vue/test-utils';
import reviewList from '@/components/reviewList.vue';
import reviewItem from '@/components/reviewItem.vue';

describe('reviewItem tests', () => {
    it('should display as many reviewItem components as there are objects in the prop data', () => {
        const testObjectArray = [{reviewId:1}, {reviewId:2}, {reviewId:3}]
        let wrapper = shallowMount(reviewList, {
            propsData: {
                reviewData: testObjectArray
            }
        });

        let list = wrapper.findAllComponents(reviewItem);          
        
        expect(list.length).toBe(testObjectArray.length);        
    })
})