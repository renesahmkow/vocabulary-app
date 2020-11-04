import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    vocabularys: {
      list: []
    },
    navigation: {
      show: false
    }
  },
  mutations: {
    setVocabularysList(state, value) {
      state.vocabularys.list = value;
    },
    setShowNavigation(state, value) {
      state.navigation.show = value;
    }
  },
  actions: {
    async getData({ commit }) {
      const data = await axios.get('http://localhost:5000/posts');

      commit('setVocabularysList', data.data);
    },
    toggleNav({ commit }, value) {
      commit('setShowNavigation', value);
    }
  },
  modules: {}
});
