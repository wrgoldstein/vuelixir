
// initial state
// shape: [{ id, quantity }]
const state = {
  sql: 'hello'
}

// getters
const getters = {
  getSQL: state => state.sql
}

// actions
const actions = {
  updateSQL ({ commit, state }, sql) {
    commit('updateSQL', { sql })
  }
}

// mutations
const mutations = {
  updateSQL (state, { sql }) {
    state.sql = sql
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
