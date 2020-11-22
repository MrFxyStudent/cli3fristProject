<template>
<!-- // 首页商品展示 -->
        <div class="classProduct" @click="detailGo(iid)">
            <img v-lazy="imageUrl" alt="" srcset="" @load="imgloadFun">
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
            default(){
                return {}
            }
        }
    },
    computed:{
        iid(){
            return this.item.item_id || this.item.iid
        },
        imageUrl(){
            if(this.item.show+"" == "undefined") return this.item.image
            return this.item.show.img
        }
    },
    methods:{
        detailGo(iid){
            //跳转到detail页面
            // console.log(this.$router);
            this.$router.push({
                path:'/detail',
                query:{
                    iid:iid
                }
            })
        },
        imgloadFun(){
            // console.log('图片加载完成');
            this.$store.commit('imgNumAdd');
            //  this.$bus.$emit('imgLoadFunEmit','图片加载完成')
        },
    },
    created(){
        // console.log('created');
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
    text-overflow:ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.classProduct .money {
    font-size: 13px;
    padding-top: 5px;
}
.classProduct .money span{
    color: red;
}
</style>