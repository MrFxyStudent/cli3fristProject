import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const one = () =>
    import ('../views/one');
const two = () =>
    import ('../views/two')
const three = () =>
    import ('../views/three')
const four = () =>
    import ('../views/four')
const detail = () =>
    import ('../views/detail/detail')
const routes = [{
        path: '/',
        redirect: '/one'
    },
    {
        path: '/one',
        name: 'one',
        component: one
    },
    {
        path: '/two',
        name: 'two',
        component: two
    },
    {
        path: '/three',
        name: 'three',
        component: three
    },
    {
        path: '/four',
        name: 'four',
        component: four
    }, {
        path: '/detail',
        name: 'detail',
        component: detail
    }
]


export default new Router({
    mode: 'history',
    routes
})