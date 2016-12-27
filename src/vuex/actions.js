import * as actionTypes from './action-types'

export default {
  [actionTypes.TEST_ACTION] ({ commit }, id) {
    return new Promise((resolve, reject) => {
      resolve('Hello')
      return
    })
  }
}
