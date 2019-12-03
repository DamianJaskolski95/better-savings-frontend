import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import auth from './modules/auth'
import categories from './modules/categories'
import balances from './modules/balances'
import cycles from './modules/cycles'
import counts from './modules/counts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    auth,
    categories,
    balances,
    cycles,
    counts
  }
})
