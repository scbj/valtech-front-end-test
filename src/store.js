import Vue from 'vue'
import Vuex from 'vuex'

import { articles } from '@/assets/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles,
    selected: null
  },
  mutations: {
    setSelected (state, selectedArticle) {
      state.selected = selectedArticle
    }
  },
  actions: {
    setSelectedFromId ({ commit, state }, id) {
      const article = state.articles.find(x => x.id.toString() === id)
      if (article) {
        commit('setSelected', article)
      }
    }
  }
})
