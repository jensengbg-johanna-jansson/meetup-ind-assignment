import { shallowMount } from '@vue/test-utils';
import Profile from '@/views/Profile.vue';

const mockUser = {
    "userId": 1,
    "name": "Sarah Williams",
    "email": "sarah.williams@gmail.com",
    "password": "12345678",
    "events": []
}

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
            },
            computed: {
                userData() {
                  return mockUser
                }
            }
        });

        const expected = testId;

        let actual = wrapper.vm.userData.userId;

        expect(actual).toBe(expected);
    })
})