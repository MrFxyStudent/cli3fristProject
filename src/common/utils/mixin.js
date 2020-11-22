export function mixin() {
    //vue混入，相当于一个class继承
    return {
        created() {
            console.log('mixin');
        },
        data() {
            return {
                mixinData: '我是mixin的数据'
            }
        }
    }
}