import { shallowMount } from '@vue/test-utils';
import Profile from '@/views/Profile.vue';

describe('Profile page tests', () => {
    it('should extract userId from the URL', () => {
        const testId = 1;
        let wrapper = shallowMount(Profile, {
            mocks: {
                $route: {
                    params: {
                        userId: testId
                    }
                }
            }
        });

        const expected = testId;

        let actual = wrapper.vm.userData.userId;

        expect(actual).toBe(expected);
    })
})