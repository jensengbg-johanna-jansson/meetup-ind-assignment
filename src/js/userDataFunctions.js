const data = require('../assets/database.json');
const users = data.users;
const events = data.events;

let getUser = {
    createToken(userEmail) {
        const token = window.btoa(userEmail);

        return token;
    },
    matchPassword(userPassword, inputPassword) {
        if(inputPassword === userPassword) {
            return true;
        } else {
            return false;
        }
    },
    findUser(userEmail) {
        const user = users.find( ({ email }) => email === userEmail );
        return user;
    },
    AUTH_LOGIN(email, password) {
        const user = this.findUser(email);
        let response = {
            success: false,
            user: null
        }

        if(user) {
            const passwordIsMatch = this.matchPassword(user.password, password);

            if(passwordIsMatch) {
                const USER_TOKEN = this.createToken();

                response.success = true;
                response.user = {
                    userId: user.userId,
                    token: USER_TOKEN
                }
            }
        }

        return response;
    },
    byId(id) {
        const user = users.find( ({ userId }) => userId === parseInt(id) );
        const userEventsArray = user.events;
        let fullEventsList = [];
        let userWithEvents = user; 

        for(let i = 0; i < userEventsArray.length; i++) {
            const event = events.find( ({ eventId }) => eventId === parseInt(userEventsArray[i]) ); 
            fullEventsList.push(event);
        }

        userWithEvents.events = fullEventsList;

        return userWithEvents;
    }
}

export default getUser;