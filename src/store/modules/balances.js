import { BALANCES_REQUEST, BALANCES_SUCCESS, BALANCES_ERROR, BALANCES_POST } from '../actions/balances'
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
  },
  [BALANCES_POST]: ({commit, dispatch}, balance) => {
    return new Promise((resolve, reject) => {
      commit(BALANCES_POST)
      axios({url: 'balances', method: 'POST', data: balance})
      .then(resp => {
        commit(BALANCES_SUCCESS, resp)
        resolve(resp)
      })
      .catch(err => {
        commit(BALANCES_ERROR, err)
        reject(err)
      })
    })
  },
}

const mutations = {
  [BALANCES_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [BALANCES_POST]: (state) => {
    state.status = 'success'
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
