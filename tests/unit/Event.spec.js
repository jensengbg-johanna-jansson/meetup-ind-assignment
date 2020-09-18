import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Event from '@/views/Event.vue';

describe('Event page tests', () => {
    it('should extract eventId from the URL', () => {
        const localVue = createLocalVue();
        localVue.use(VueRouter);
        const router = new VueRouter();

        // route path base  /event/eventId
        const $route = {
            path: '/event/1'
        }

        let wrapper = shallowMount(Event, {
            localVue,
            router,
            mocks: {
                $route
            }
        });

        const expected = '1';

        let actual = wrapper.vm.eventData.eventId;

        expect(actual).toBe(expected);
    })
})