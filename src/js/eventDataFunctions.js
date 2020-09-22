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

        for(let i = 0; i < events.length; i++) {
            if(events[i].eventTitle.includes(searchTerm)) {
                resultArray.push(events[i]);
            }
        }

        return resultArray;
    }
}

export default getEvent;
