import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import app from './modules/app'
import block from './modules/block'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
  	app,
    block
  },
  strict: debug,
  plugins: [createLogger()]
})
