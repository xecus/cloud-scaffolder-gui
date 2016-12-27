import * as types from './mutation-types'
export default {
  [types.CHANGE_KEYWORD] (state, keyword) {
    state.keyword = keyword
  }
}
