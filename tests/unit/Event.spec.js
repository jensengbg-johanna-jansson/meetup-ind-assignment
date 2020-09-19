import { shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Event from '@/views/Event.vue';

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
})