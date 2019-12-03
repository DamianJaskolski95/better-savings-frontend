import { CYCLES_REQUEST, CYCLES_SUCCESS, CYCLES_ERROR } from '../actions/cycles'
import Vue from 'vue'

const state = { status: '', cycles: {} }

const getters = {
  getCycles: state => state.cycles,
  isCyclesLoaded: state => !!state.cycles.id,
}

const actions = {
  [CYCLES_REQUEST]: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => {
      commit(CYCLES_REQUEST)
      axios({url: 'cycles', method: 'GET'})
      .then(resp => {
        commit(CYCLES_SUCCESS, resp)
        resolve(resp)
      })
      .catch(err => {
        commit(CYCLES_ERROR, err)
        reject(err)
      })
    })
  }
}

const mutations = {
  [CYCLES_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [CYCLES_SUCCESS]: (state, resp) => {
    state.status = 'success'
    state.cycles = resp.data
  },
  [CYCLES_ERROR]: (state) => {
    state.status = 'error'
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
