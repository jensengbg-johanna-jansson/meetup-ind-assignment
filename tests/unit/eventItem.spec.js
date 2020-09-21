import { shallowMount } from '@vue/test-utils';
import eventItem from '@/components/eventItem.vue';

describe('eventItem tests', () => {
    it('should call router with path "/event/:eventId" on click', async () => {
        const testId = 1;
        const route = '/event/' + testId;
        let $router = {
            push: jest.fn()
        }
       
        let wrapper = shallowMount(eventItem, {
            mocks: {
                $router,
            },
            propsData: {
                eventItem: {
                    eventId: testId
                }
            }
        });

        await wrapper.find('.event-item').trigger('click');          
        
        expect($router.push).toHaveBeenCalledWith(route); 
    })
})