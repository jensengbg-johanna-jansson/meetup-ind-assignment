import { shallowMount } from '@vue/test-utils';
import locationDetails from '@/components/locationDetails.vue';

describe('locationDetails tests', () => {
    it('should show the information from the data prop inside the elements', () => {
        let propDataPayload = { 
            date: '15 september',
            startTime: '12:00',
            endTime: '15:30',
            locationPlace: 'Botaniska Trädgården',
            locationStreet: 'Carl Skottsbergs Gata 22A',
            locationZip: '413 19',
            locationCity: 'Gothenburg',
            locationNotes: 'Vi samlas vid huvudentrén för att sedan röra oss mot japandalen'
         };
        let wrapper = shallowMount(locationDetails, {
                propsData: {
                    detailsData: propDataPayload
                }}
            );
        
        // Test variables. change these to test different text elements
        let testData = propDataPayload.locationPlace;
        let dataContainer = wrapper.find('.details-list-item-place');

        const expected = testData;

        let actual = dataContainer.text();

        expect(actual).toBe(expected);
    })
})