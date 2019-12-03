import { COUNTS_REQUEST, COUNTS_SUCCESS, COUNTS_ERROR } from '../actions/counts'
import Vue from 'vue'

const state = { status: '', counts: {} }

const getters = {
  getCounts: state => state.counts,
  isCountsLoaded: state => !!state.counts.id,
}

const actions = {
  [COUNTS_REQUEST]: ({commit, dispatch}, {user, category_id} ) => {
    return new Promise((resolve, reject) => {
      commit(COUNTS_REQUEST)
      axios({url: 'categories/' + category_id + '/countz', method: 'GET'})
      .then(resp => {
        commit(COUNTS_SUCCESS, resp)
        resolve(resp)
      })
      .catch(err => {
        commit(COUNTS_ERROR, err)
        reject(err)
      })
    })
  }
}

const mutations = {
  [COUNTS_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [COUNTS_SUCCESS]: (state, resp) => {
    state.status = 'success'
    state.counts = resp.data
  },
  [COUNTS_ERROR]: (state) => {
    state.status = 'error'
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
