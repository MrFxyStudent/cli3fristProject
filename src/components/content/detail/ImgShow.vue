<template>
    <div class="imgShowRow">
        <div class="itemImgRow" :style="{width:itemRowW+'%'}">
            <div class="imgRow" v-for="(item,index) in topImages" :key="index">
                <img :src="item" alt="" @load="imgLoad">
            </div>
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
        itemRowW(){
            return this.topImages.length*100;
        }
    },
    methods:{
        imgLoad(){
            if(this.imgLoadNum == this.topImages.length){
                this.$store.state.detailImg++
            }
        }
    },
    // props:['itemDataClass'],
    props:{
        topImages:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.imgShowRow{
    height: 250px;
    overflow-x: auto;
    overflow: hidden;
}
.itemImgRow{
    display: flex;
    word-wrap: normal;
    overflow-x: auto;
    overflow: hidden;
}
.imgRow{
    display: inline-block;
    width:100%;
}
.imgRow img{
    width:100%;
}
</style>