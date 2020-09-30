import { shallowMount } from '@vue/test-utils';
import NewReview from '@/views/NewReview.vue';

describe('New review tests', () => {
    it('letter count should be 0 by default', async () => {       
        let wrapper = shallowMount(NewReview, {
            methods: {
                setEventData: () => {}
            }
        });
        let letterCounter = wrapper.find('.input-limit-counter');

        let actual = parseInt(letterCounter.text());
        
        expect(actual).toBe(0); 
    })
})