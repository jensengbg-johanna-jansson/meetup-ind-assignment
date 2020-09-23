import { shallowMount } from '@vue/test-utils';
import primaryButton from '@/components/ui-components/primaryButton.vue';

describe('primaryButton tests', () => {
    it('should display the text that is recieved with props', () => {
        const buttonText = 'A button';

        let wrapper = shallowMount(primaryButton, {
                propsData: {
                    buttonText: buttonText
                }}
            );
        
        const expected = buttonText;
        let actual = wrapper.find('button').text();

        expect(actual).toBe(expected);
    })
})