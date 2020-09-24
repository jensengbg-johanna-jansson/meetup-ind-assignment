const data = require('../assets/database.json');
const users = data.users;

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
    }
}

export default getUser;