import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations.js'
import { actions } from './actions.js'
import getters from './getters.js'

Vue.use(Vuex)

const state = {
    imgNum: 0, //首页的图片加载计数
    tabcontrolIndex: 0,
    detailImg: 0, //detail图片加载计数
    CartArr: [], //购物车
    checkObj: {
        menry: 0,
        count: 0
    },
    isBoolean: false,

}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {}
})