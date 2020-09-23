import { mount } from '@vue/test-utils';
import SearchEvent from '@/views/SearchEvent.vue';
import eventItem from '@/components/eventItem.vue';

describe('SearchEvent tests', () => {
    it('should show a list of all events', async () => {
        const testObjectArray = [{eventId: 1}, {eventId: 2}, {eventId: 3}];
       
        let wrapper = mount(SearchEvent, {
            computed: {
                eventsList: () => { return testObjectArray }
            }
        });

        let list = wrapper.findAllComponents(eventItem);          
        
        expect(list.length).toBe(testObjectArray.length); 
    })
})