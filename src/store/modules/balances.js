import { BALANCES_REQUEST, BALANCES_SUCCESS, BALANCES_ERROR } from '../actions/balances'
import Vue from 'vue'

const state = { status: '', balances: {} }

const getters = {
  getBalances: state => state.balances,
  isBalancesLoaded: state => !!state.balances.id,
}

const actions = {
  [BALANCES_REQUEST]: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => {
      commit(BALANCES_REQUEST)
      axios({url: 'balances', method: 'GET'})
      .then(resp => {
        commit(BALANCES_SUCCESS, resp)
        resolve(resp)
      })
      .catch(err => {
        commit(BALANCES_ERROR, err)
        reject(err)
      })
    })
  }
}

const mutations = {
  [BALANCES_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [BALANCES_SUCCESS]: (state, resp) => {
    state.status = 'success'
    state.balances = resp.data
  },
  [BALANCES_ERROR]: (state) => {
    state.status = 'error'
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
