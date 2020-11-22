import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
//导入自封装的插件
import toast from './components/common/Toast/index'
//导入快速点击解决移动端的300延迟
import FastClick from 'fastclick'
//引入图片懒加载插件
import VueLazyload from 'vue-lazyload'
//直接使用图片懒加载 :src更改成 v-lazy
// Vue.use(VueLazyload)
Vue.use(VueLazyload, {
    // error: './assets/img/load/loadImg.gif',
    //必须通过require引入图片
    loading: require('./assets/img/load/timg.gif'),
})

Vue.config.productionTip = false

//引用插件,引用后会自动执行该插件的 install 函数 这个函数名字是固定的
Vue.use(toast)

new Vue({
    router,
    store,
    toast,
    render: h => h(App)
}).$mount('#app')

//将fastclick在body引入
FastClick.attach(document.body);