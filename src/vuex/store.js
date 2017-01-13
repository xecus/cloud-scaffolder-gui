import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  user: null
}
const getters = {}

export default new Vuex.Store({
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
})

