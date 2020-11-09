<template>
        <div class="classProduct">
            <img :src="item.show.img" alt="" srcset="" @load="imgloadFun">
            <p class="title">{{item.title}}</p>
            <p class="money"><span>❤{{item.price}}</span>★{{item.cfav}}</p>
        </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    props:{
        item:{
            type:Object,
            default:{}
        }
    },
    methods:{
        imgloadFun(){
            // console.log('图片加载完成');
            this.$store.commit('imgNumAdd');
            //  this.$bus.$emit('imgLoadFunEmit','图片加载完成')
        },


    }

}
</script>

<style scoped>
.classProduct{
    box-sizing: border-box;
    padding: 2px 3px 5px;
    width: 50%;
    text-align: center;
}
.classProduct img{
    border-radius: 10px;
    width: 100%;
}
.classProduct .title{
    font-size: 14px;
    padding-top: 5px;
}
.classProduct .money {
    font-size: 13px;
    padding-top: 5px;
}
.classProduct .money span{
    color: red;
}
</style>