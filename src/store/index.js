import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'
import user22 from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tab,
    user22
  }
})

