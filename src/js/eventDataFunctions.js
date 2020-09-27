import store from '../store'
let getEvent = {
    findReviews(data, reviewsArray) {
        const reviews = data.reviews;

        let reviewsData = [];

        for(let i = 0; i < reviewsArray.length; i++) {
            let reviewIdToInt = parseInt(reviewsArray[i]);
            let reviewItem = reviews.find( ({ reviewId }) => reviewId === reviewIdToInt );
            
            reviewsData.push(reviewItem);
        }
        
        return reviewsData;
    },
    byId(id) {
        const data = store.state.data;
        const events = data.events;
        const eventIdToInt = parseInt(id);
        const eventItem = events.find( ({ eventId }) => eventId === eventIdToInt );
        const reviewsData = this.findReviews(data, eventItem.reviews);
        let newEventItem = eventItem;

        newEventItem.reviews = reviewsData;

        return newEventItem;
    },
    all() {       
        const data = store.state.data;
        const events = data.events;

        return events;
    },
    fromSearch(searchTerm) {
        const data = store.state.data;
        const events = data.events;
        let resultArray = [];
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        console.log(events);

        for(let i = 0; i < events.length; i++) {
            const lowerCaseTitle = events[i].eventTitle.toLowerCase();

            if(lowerCaseTitle.includes(lowerCaseSearchTerm)) {
                resultArray.push(events[i]);
            }
        }

        return resultArray;
    }
}

export default getEvent;
