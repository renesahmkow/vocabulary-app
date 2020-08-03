import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    vocabularys: {
      list: []
    }
  },
  mutations: {
    setVocabularysList(state, value) {
      state.vocabularys.list = value;
    }
  },
  actions: {
    async getData({ commit }) {
      const data = await axios.get("http://localhost:5000/posts");

      commit("setVocabularysList", data.data);
    }
  },
  modules: {}
});
