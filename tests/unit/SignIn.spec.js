import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import SignIn from '@/views/SignIn.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('SignIn page tests', () => {
    it('should dispatch login action with input values on click', async () => {
        let user = {
            email: 'sarah.williams@gmail.com',
            password: '12345678'
        }
        let actions = {
            loginUser: jest.fn()
          };
        let store = new Vuex.Store({
            actions
        });   
        let wrapper = mount(SignIn, {
            store,
            localVue
        });
        
        let button = wrapper.find('.sign-in-form-button');
        
        wrapper.find('#email').setValue(user.email);
        wrapper.find('#password').setValue(user.password);
        
        await button.trigger('click');
        
        expect(actions.loginUser).toHaveBeenCalled();
        let actual = actions.loginUser.mock.calls[0][1];

        expect(actual).toStrictEqual(user);
    
    })
})