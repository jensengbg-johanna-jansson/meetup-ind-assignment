import { shallowMount, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Event from '@/views/Event.vue';

function createConfig (overrides) {
    const id = 1;
    const mocks = {
        // Vue Router
        $router: {
            push: () => {}
        },
        // Vuex
        $store: {
            state: [ { id } ],
            commit: () => {}
        }
    };
    const propsData = { id };
    return Object.assign({ mocks, propsData }, overrides);
}

describe('Event page tests', () => {
    it('should extract eventId from the URL', () => {
        const testId = 1;
        let wrapper = shallowMount(Event, {
            mocks: {
                $route: {
                    params: {
                        eventId: testId
                    }
                }
            }
        });

        const expected = testId;

        let actual = wrapper.vm.eventData.eventId;

        expect(actual).toBe(expected);
    })

    it('should call router when join-button is clicked', async () => {
        const testId = 1; 
        const route = '/event/' + testId + '/join';
        let $router = {
            push: jest.fn()
        }
       
        let wrapper = mount(Event, {
            mocks: {
                $router,
            }
        });

        
        await wrapper.find('.event-info-join-button').trigger('click');          
        
        expect($router.push).toHaveBeenCalledWith(route); 
    })
})