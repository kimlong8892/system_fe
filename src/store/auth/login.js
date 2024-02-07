import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const login = new Vuex.Store({
  state: {
    token: "",
    user: null,
    error: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.token = user.token; // Assuming your user object has a 'token' property
      state.error = null;
    },
    setError(state, error) {
      state.error = error;
      state.user = null;
      state.token = "";
    },
    logout(state) {
      state.user = null;
      state.token = "";
      state.error = null;
    }
  },
  actions: {
    login(context, credentials) {
      fetch('http://127.0.0.1:4400/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Invalid credentials');
          }
          return response.json();
        })
        .then(user => {
          context.commit('setUser', user);
        })
        .catch(error => {
          context.commit('setError', error.message);
        });
    },
    logout(context) {
      // Perform any additional logout logic, e.g., clearing local storage, etc.
      context.commit('logout');
    }
  }
});

export default login;
