<template>
    <div class="Toast" v-show="isShow">
        <span>
            {{message}}
        </span>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isShow:false,
            message:""
        }
    },
    props:{
        // message:{
        //     type:String,
        //     default(){
        //         return "加入购物车失败"
        //     }
        // },
        // isShow:{
        //     type:Boolean,
        //     default(){
        //         return false
        //     }
        // }
    },
    methods:{
        showFun(message="默认文字",time=2000){
            this.isShow = true;
            this.message = message;
            setTimeout(()=>{
                this.isShow = false;
            },time)
        }
    }
}
</script>

<style scoped>
.Toast{
    position: fixed;
    left: 50%;
    top:50%;
    background: rgba(0, 0, 0, .7);
    color: #fff;
    padding: 5px 15px;
    transform: translate(-50%,-50%);
    z-index: 999;
}
</style>