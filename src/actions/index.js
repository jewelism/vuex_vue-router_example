import store from '../store'
import { INCREASE_COUNT, DECREASE_COUNT } from '../mutation_types'

export const callIncreaseCount = () => {
  store.commit(INCREASE_COUNT)
}

export const callDecreaseCount = () => {
  store.commit(DECREASE_COUNT)
}
