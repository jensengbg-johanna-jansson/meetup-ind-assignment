import Vue from 'vue'
import Vuex from 'vuex'
import getUser from '@/js/userDataFunctions.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      userId: null,
      token: '',
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user.userId = payload.userId;
      state.user.token = payload.token;
    }
  },
  actions: {
    async loginUser(context, payload) {
      let res = await getUser.AUTH_LOGIN(payload.email, payload.password);

      if(res.success) {
        context.commit('setUser', res.user);
      }
    }
  },
  modules: {
  }
})
