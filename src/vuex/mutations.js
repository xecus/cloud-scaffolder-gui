import * as types from './mutation-types'
export default {
  [types.SET_USER] (state, val) {
    state.user = val
  }
}
