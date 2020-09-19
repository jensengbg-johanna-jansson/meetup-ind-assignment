import { shallowMount } from '@vue/test-utils';
import locationDetails from '@/components/locationDetails.vue';

describe('locationDetails tests', () => {
    it('should show the information from the data prop inside the elements', () => {
        let propDataPayload = { 
            locationPlace: 'Botaniska Trädgården',
            locationStreet: 'Carl Skottsbergs Gata 22A',
            locationZip: '413 19',
            locationCity: 'Gothenburg',
            locationNotes: 'Vi samlas vid huvudentrén för att sedan röra oss mot japandalen'
         };
        let wrapper = shallowMount(locationDetails, {
                propsData: {
                    locationData: propDataPayload
                }}
            );
        
        // Test variables. change these to test different text elements
        let testData = propDataPayload.locationPlace;
        let dataContainer = wrapper.find('.location-place-text');

        const expected = testData;

        let actual = dataContainer.text();

        expect(actual).toBe(expected);
    })
})