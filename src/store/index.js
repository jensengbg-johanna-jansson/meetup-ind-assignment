import Vue from 'vue'
import Vuex from 'vuex'

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
      state.user.userId = parseInt(payload.password);
      state.user.token = payload.email;
    }
  },
  actions: {
    loginUser(context, payload) {
      context.commit('setUser', payload);
    }
  },
  modules: {
  }
})
