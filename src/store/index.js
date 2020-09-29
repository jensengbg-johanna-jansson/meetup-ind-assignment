import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import getUser from '@/js/userDataFunctions.js';
import apiEnum from '@/js/apiEnum.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiState: apiEnum.INIT,
    data: '',
    user: {
      userId: null,
      token: null,
      userData: ''
    }
  },
  mutations: {
    setData(state, payload) {
      state.data = payload;
      state.apiState = apiEnum.LOADED;
    },
    setUser(state, payload) {
      state.user.userId = payload.userId;
      state.user.token = payload.token;
      state.user.userData = payload.userData;
    },
    updateUser(state, payload) {
      state.user.userData = payload;
    }
  },
  actions: {
    async loginUser(context, payload) {
      let res = await getUser.AUTH_LOGIN(payload.email, payload.password);

      if(res.success) {
        context.commit('setUser', res.user);
      }
    },
    getData(context) {
      const getUrl = 'https://api.jsonbin.io/b/5f733b1d65b18913fc5624cb';
      const token = '$2b$10$yK7Wd8VYpPBMMgz591x2WeUPqba/X66/n0vsSS7AQsXM90RmkyS.a';
      
      return axios.get(getUrl, {
          headers: {
            "secret-key": token,
          },
      }).then(res => {
        context.commit('setData', res.data);

        return res.data.users;
      })
    },
    updateUserData(context, userId) {
      const user = getUser.byId(userId, false);
      const userData = {
        name: user.name,
        email: user.email,
        events: user.events
      }

      context.commit('updateUser', userData);
    },
    isLoggedIn(context) {
      const session = JSON.parse(sessionStorage.getItem("miitoAppuUser"));
      
      if(session != null) {
        const user = getUser.byId(session.userId, false);
        const userData = {
          userId: session.userId,
          token: session.token,
          userData: {
            name: user.name,
            email: user.email,
            events: user.events
          }
        }
        context.commit('setUser', userData);
      }
    }
  },
  modules: {
  }
})
