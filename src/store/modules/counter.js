import { INCREASE_COUNT, DECREASE_COUNT, INCREMENT, DECREMENT } from '../../store/types'

const state = {
  count: 0
}

const mutations = {
  [INCREASE_COUNT]: state => state.count++,
  [DECREASE_COUNT]: state => state.count--
}

const actions = {
  [INCREMENT]: ({ commit }) => commit(INCREASE_COUNT),
  [DECREMENT]: ({ commit }) => commit(DECREASE_COUNT)
}

export default {
  state,
  mutations,
  actions
}
