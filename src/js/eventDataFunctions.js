const data = require('../assets/database.json');
const events = data.events;
const reviews = data.reviews;

let getEvent = {
    findReviews(reviewsArray) {
        let reviewsData = [];

        for(let i = 0; i < reviewsArray.length; i++) {
            let reviewIdToInt = parseInt(reviewsArray[i]);
            let reviewItem = reviews.find( ({ reviewId }) => reviewId === reviewIdToInt );
            
            reviewsData.push(reviewItem);
        }
        
        return reviewsData;
    },
    byId(id) {
        const eventIdToInt = parseInt(id);
        const eventItem = events.find( ({ eventId }) => eventId === eventIdToInt );
        const reviewsData = this.findReviews(eventItem.reviews);
        let newEventItem = eventItem;

        newEventItem.reviews = reviewsData;

        return newEventItem;
    },
    all() {
        return events;
    },
    fromSearch(searchTerm) {
        let resultArray = [];
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

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
