import Vue from 'vue'
import Vuex from 'vuex'

import { INCREASE_COUNT, DECREASE_COUNT } from '../mutation_types'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  [INCREASE_COUNT]: state => state.count++,
  [DECREASE_COUNT]: state => state.count--
}

export default new Vuex.Store({
  state,
  mutations
})
