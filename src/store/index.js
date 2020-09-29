import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import getUser from '@/js/userDataFunctions.js'
import apiEnum from '@/js/apiEnum.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiState: apiEnum.INIT,
    data: '',
    user: {
      userId: 1,
      token: '',
      userData: {
        name: "Sarah Williams",
        email: "sarah.williams@gmail.com",
        events: [1, 4, 5, 6]
      }
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user.userId = payload.userId;
      state.user.token = payload.token;
    },
    setData(state, payload) {
      state.data = payload;
      state.apiState = apiEnum.LOADED;
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
      const getUrl = 'https://api.jsonbin.io/b/5f6dedf2302a837e956d798a';
      const token = '$2b$10$yK7Wd8VYpPBMMgz591x2WeUPqba/X66/n0vsSS7AQsXM90RmkyS.a';
      
      axios.get(getUrl, {
          headers: {
            "secret-key": token,
          },
      }).then(res => {
        context.commit('setData', res.data);
      })
    }
  },
  modules: {
  }
})
