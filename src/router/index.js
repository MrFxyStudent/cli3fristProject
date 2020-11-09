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
const routes = [{
        path: '/:id',
        redirect: '/one/:id'
    },
    {
        path: '/one/:id',
        name: 'one',
        component: one
    },
    {
        path: '/two/:id',
        name: 'two',
        component: two
    },
    {
        path: '/three/:id',
        name: 'three',
        component: three
    },
    {
        path: '/four/:id',
        name: 'four',
        component: four
    }
]


export default new Router({
    mode: 'history',
    routes
})