import { shallowMount } from '@vue/test-utils';
import mainNav from '@/components/nav.vue';

describe('mainNav tests', () => {
    it('should show menu on click', async () => {
        let wrapper = shallowMount(mainNav);
        const button =  wrapper.find('button');

        await button.trigger('click');
        
        expect(wrapper.find('nav').exists()).toBe(true); 
    })

    it('should hide menu if clicked twice', async () => {
        let wrapper = shallowMount(mainNav);
        const button =  wrapper.find('button');

        await button.trigger('click');
        await button.trigger('click');
        
        expect(wrapper.find('nav').exists()).toBe(false); 
    })
})