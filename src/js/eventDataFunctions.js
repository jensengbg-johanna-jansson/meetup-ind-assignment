const data = require('../assets/database.json');
const events = data.events;

let getEvent = {
    byId(id) {
        //console.log(events);
        return events.find( ({ eventId }) => eventId === id );
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
