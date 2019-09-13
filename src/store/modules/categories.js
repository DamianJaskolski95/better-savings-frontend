import { CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_ERROR } from '../actions/categories'
import Vue from 'vue'

const state = { status: '', categories: {} }

const getters = {
  getCategories: state => state.categories,
  isCategoriesLoaded: state => !!state.categories.name,
}

const actions = {
  [CATEGORIES_REQUEST]: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => {
      commit(CATEGORIES_REQUEST)
      axios({url: 'categories', method: 'GET'})
      .then(resp => {
        commit(CATEGORIES_SUCCESS, resp)
        resolve(resp)
      })
      .catch(err => {
        commit(CATEGORIES_ERROR, err)
        reject(err)
      })
    })
  }
}

const mutations = {
  [CATEGORIES_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [CATEGORIES_SUCCESS]: (state, resp) => {
    state.status = 'success'
    state.categories = resp.data
  },
  [CATEGORIES_ERROR]: (state) => {
    state.status = 'error'
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
