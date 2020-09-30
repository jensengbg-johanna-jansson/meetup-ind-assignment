import store from '../store';
import axios from "axios";

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
        const data = store.state.data;
        const user = data.users.find( ({ email }) => email === userEmail );
        return user;
    },
    setUserInfo(user) {
        return {
            name: user.name,
            email: user.email,
            events: user.events
        }
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
                let userData = this.setUserInfo(user);
                let sessionObject = {
                    userId: user.userId,
                    token: USER_TOKEN
                }

                sessionStorage.setItem("miitoAppuUser", JSON.stringify(sessionObject));

                response.success = true;
                response.user = {
                    userId: user.userId,
                    token: USER_TOKEN,
                    userData: userData
                }
            }
        }

        return response;
    },
    matchAUTH(user, session) {
        let isMatch = {
            isUserId: false,
            isToken: false
        }

        if(user.userId === parseInt(session.userId)) {
            isMatch.isUserId = true;
        }
        if(user.token === session.token) {
            isMatch.isToken = true;
        }

        return isMatch;
    },
    IS_AUTH() {
        const userData = store.state.user;
        const sessionData = JSON.parse(sessionStorage.getItem("miitoAppuUser"));
        
        if(userData.userId != null 
            && userData.token != null
            && sessionData != null) {
                const isMatch = this.matchAUTH(userData, sessionData);
                
                if(isMatch.isUserId && isMatch.isToken) {
                    return true;
                } else {
                    return false;
                }
        } else {
            return false;
        }
    },
    END_SESSION() {
        sessionStorage.removeItem("miitoAppuUser");
        store.dispatch('logOut');
    },
    byId(id, withFullData) {
        const data = store.state.data;
        const events = data.events;
        const user = data.users.find( ({ userId }) => userId === parseInt(id) );


        if(user.events[0].eventId) {
            return user;
        } else {       
            if(withFullData) {
                const userEventsArray = user.events;
                let fullEventsList = [];
                let userWithEvents = user; 

                for(let i = 0; i < userEventsArray.length; i++) {
                    let event = events.find( ({ eventId }) => eventId === parseInt(userEventsArray[i]) ); 
                    fullEventsList.push(event);
                }

                userWithEvents.events = fullEventsList;

                return userWithEvents;
            } else {
                return user; 
            }
        }
    },
    findUserToUpdate(users) {
        let userId = store.state.user.userId;
        for (let i = 0; i < users.length; i++) {
            if (userId === users[i].userId) {
                return i;
            }
        }
    },
    addEvent(eventId) {
        const getUrl = 'https://api.jsonbin.io/b/5f745be2302a837e9571098f';
        const token = '$2b$10$yK7Wd8VYpPBMMgz591x2WeUPqba/X66/n0vsSS7AQsXM90RmkyS.a';
        let data;
        
        return axios.get(getUrl, {
            headers: {
                "secret-key": token,
            },
        }).then(res => {
            data = res.data;

            let newDataObject = data; 
            let eventToAdd = parseInt(eventId);
            let userToUpdate = this.findUserToUpdate(data.users);    
    
            newDataObject.users[userToUpdate].events.push(eventToAdd);
            console.log(newDataObject);
            
            return axios.put(getUrl, newDataObject, {
                headers: {
                    "secret-key": token,
                    "versioning": false
                },
            })
        })
        .then(req => {
            console.log(req);
            if(req.data.success) {
                let userId = store.state.user.userId;
                store.dispatch('getData');
                store.dispatch('updateUserData', userId);
                return { success: true }
            } else {
                return { success: false }
            }
        })
        .catch(error => console.log(error))
    }
}

export default getUser;