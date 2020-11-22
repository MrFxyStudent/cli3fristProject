import Toast from './Toast'
const obj = {}
    //install函数名是定死的
obj.install = function(Vue) {
    //第一个参数是Vue实例

    //1.创建组件构造器
    const toastContrustor = Vue.extend(Toast);
    //2.new的方式，根据组件构造器，可以创建出来一个组件对象
    const toast = new toastContrustor();
    //3.将组件对象手动挂载到一个自创建的div上
    toast.$mount(document.createElement('div'));
    //4.把自创建的div添加到body钟 （toast.$el就是刚创建的div）
    document.body.appendChild(toast.$el);
    //5.在Vue的原型上绑定toast组件
    Vue.prototype.$toast = toast;
}
export default obj