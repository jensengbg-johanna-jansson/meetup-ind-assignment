import { shallowMount } from '@vue/test-utils';
import mainNav from '@/components/nav.vue';

describe('mainNav tests', () => {
    it('should show menu on click', async () => {
        let wrapper = shallowMount(mainNav, {
            stubs: ['router-link', 'router-view'],
            computed: {
                isLoggedIn() {
                    return false
                }
            }
        });
        const button =  wrapper.find('button');

        await button.trigger('click');
        
        expect(wrapper.find('nav').exists()).toBe(true); 
    })

    it('should hide menu if clicked twice', async () => {
        let wrapper = shallowMount(mainNav, {
            stubs: ['router-link', 'router-view'],
            computed: {
                isLoggedIn() {
                    return false
                }
            }
        });
        const button =  wrapper.find('button');

        await button.trigger('click');
        await button.trigger('click');
        
        expect(wrapper.find('nav').exists()).toBe(false); 
    })

    it('should show sign in icon if user is not logged in', () => {
        let wrapper = shallowMount(mainNav, {
            stubs: ['router-link', 'router-view'],
            computed: {
                isLoggedIn() {
                    return false
                }
            }
        });
        const buttonExist =  wrapper.find('.menu-sign-in').exists();
        
        expect(buttonExist).toBe(true); 
    })

    it('should show profile icon if user is logged in', () => {
        let wrapper = shallowMount(mainNav, {
            stubs: ['router-link', 'router-view'],
            computed: {
                isLoggedIn() {
                    return true
                }
            }
        });
        const buttonExist =  wrapper.find('.menu-profile').exists();
        
        expect(buttonExist).toBe(true); 
    })
})