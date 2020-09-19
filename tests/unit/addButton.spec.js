import { shallowMount } from '@vue/test-utils';
import addButton from '@/components/ui-components/addButton.vue';

describe('addButton tests', () => {
    it('should display join-icon as default', () => {
        let wrapper = shallowMount( addButton );

        const expected = true;

        let icon = wrapper.find('i');
        const iconClass = 'fa-user-plus';

        let actual = icon.classList.contains(iconClass);

        expect(actual).toBe(expected);
    })

    it('should display check-icon and disable button if the user has already joined the event', () => {
        let wrapper = shallowMount( addButton );
        let icon = wrapper.find('i');
        let button = wrapper.find('button');
        const iconClass = 'fa-user-check';
        
        const expectedIcon = true;
        let actualIcon = icon.classList.contains(iconClass);

        expect(actualIcon).toBe(expectedIcon);
        expect(button.props().disabled).toBe(true);
    })

    it('should disable the button if the meetup has already taken place', () => {
        let wrapper = shallowMount( addButton );
        let button = wrapper.find('button');

        expect(button.props().disabled).toBe(true);
    })
})