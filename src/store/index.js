import Vue from 'vue'
import Vuex from 'vuex'
import state from './rootStore/state'
import getters from './rootStore/getters'
import mutations from './rootStore/mutations'
import actions from './rootStore/actions'

import login from './login'
import main from './main'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    login,
    main
  }
})
