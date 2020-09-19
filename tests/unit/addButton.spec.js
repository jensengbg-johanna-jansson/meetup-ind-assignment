import { shallowMount } from '@vue/test-utils';
import addButton from '@/components/ui-components/addButton.vue';

describe('addButton tests', () => {
    it('should display join-icon as default', () => {
        let wrapper = shallowMount(addButton);

        const expected = true;

        let icon = wrapper.find('i');
        const iconClass = 'fa-user-plus';

        let actual = icon.classes().includes(iconClass);

        expect(actual).toBe(expected);
    })

    it('should not disable button if user has not joined event', () => {
        let wrapper = shallowMount( addButton, {
            propsData: {
                hasJoined: false
            }
        });
        let button = wrapper.find('button');

        const expected = undefined;
        let actual = button.attributes('disabled');
        
        expect(actual).toBe(expected);
    })

    it('should display check-icon if the user has already joined the event', () => {
        let wrapper = shallowMount( addButton, {
            propsData: {
                hasJoined: true
            }
        });
        let icon = wrapper.find('i');
        const iconClass = 'fa-user-check';
        
        const expectedIcon = true;
        let actualIcon = icon.classes().includes(iconClass);

        expect(actualIcon).toBe(expectedIcon);
    })

    it('should disable button if the user has already joined the event', () => {
        let wrapper = shallowMount( addButton, {
            propsData: {
                hasJoined: true
            }
        });
        let button = wrapper.find('button');
        
        const expected = 'disabled';
        let actual = button.attributes().disabled;
        
        expect(actual).toBe(expected);
    })

    it('should disable the button if the meetup has already taken place', () => {
        let wrapper = shallowMount( addButton, {
            propsData: {
                hasEnded: true
            }
        });
        let button = wrapper.find('button');

        const expected = 'disabled';
        let actual = button.attributes().disabled;
        
        expect(actual).toBe(expected);
    })
})
