import { mount } from '@vue/test-utils';
import searchBar from '@/components/ui-components/searchBar.vue';

describe('searchBar tests', () => {
    it('should call router with search query on click', async () => {
        const testQuery = 'test';
        const route = { path: 'search', query: {'term': testQuery}};
        let $router = {
            push: jest.fn()
        }
       
        let wrapper = mount(searchBar, {
            mocks: {
                $router,
            },
        });

        await wrapper.find('.search-button').trigger('click');          
        
        expect($router.push).toHaveBeenCalledWith(route); 
    })
})