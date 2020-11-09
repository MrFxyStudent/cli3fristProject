import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        imgNum: 0,
        tabcontrolIndex: 0
    },
    mutations: {
        imgNumAdd(state) {
            state.imgNum++;
        }
    },
    actions: {},
    modules: {}
})