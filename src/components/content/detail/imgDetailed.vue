<template>
    <div class="imgDetailed">
        <div class="imgDetailed-key">{{imgDetailedClass.key}}</div>
        <div class="imgDetailed-img" v-for="(item,index) in imgDetailedClass.list" :key="index">
            <img :src="item" alt="" srcset="" @load="imgLoad">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            imgLoadNum:0
        }
    },
    computed:{

    },
    methods:{
        imgLoad(){
            this.imgLoadNum++
            if(this.imgLoadNum == this.imgDetailedClass.list.length){
                this.$store.state.detailImg++
            }
        }
    },
    // props:['itemDataClass'],
    props:{
        imgDetailedClass:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
    .imgDetailed{}
    .imgDetailed-key{
        padding: 15px 27px;
        border-bottom: 1.2px solid #f1f1f1;
    }
    .imgDetailed-img img{
        width: 100%;
    }
</style>