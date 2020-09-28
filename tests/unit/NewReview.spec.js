import { shallowMount } from '@vue/test-utils';
import NewReview from '@/views/NewReview.vue';

describe('New review tests', () => {
    it('letter count should be 0 by default', async () => {       
        let wrapper = shallowMount(NewReview);
        let letterCounter = wrapper.find('.input-limit-counter');

        let actual = parseInt(letterCounter.text());
        
        expect(actual).toBe(0); 
    })
    /*
        //Går inte att simulera input i textarea?
    it('should change the letter counter on input to the number of letters currently inside the textarea', async () => {       
        let wrapper = shallowMount(NewReview);
        let textarea = wrapper.find('.new-review-textarea');
        let letterCounter = wrapper.find('.input-limit-counter');
        let testLetterCount = 5;

        textarea.value = 'some value';

        console.log('textarea val: ' + textarea.value);

        await textarea.trigger('input');

        let actual = parseInt(letterCounter.text());
        
        expect(actual).toBe(testLetterCount); 
    })
    */
})