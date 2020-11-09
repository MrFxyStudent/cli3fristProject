<template>
    <div class="tabControl">
        <div class="tabitem" v-for="(TabText,index) in tabTextlist" :key="index" @click="tabColorFun(index)" :class="{tabColorClass:index === tabColor}">
            <span>{{TabText}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tabColor:0,
            typeData:['pop','new','sell']
        }
    },
    props:{
        tabTextlist:{
            type:Array,
            default:['112321321']
        },
    },
    methods:{
        tabColorFun(index){
            console.log(index);
            this.tabColor = index;
            this.$store.tabcontrolIndex = index;
            this.$emit('typeFun',this.typeData[index]);
        }
    }
}
</script>

<style scoped>
.tabControl{
    display: flex;
    /* position:sticky;
    top: 43px; */
    background: #fff;
}
.tabitem{
    flex:1;
    text-align: center;
    height: 44px;
    justify-content: center;
    line-height: 44px;
}
.tabColorClass span{
    border-bottom: 2px solid red;
    padding: 0px 5px 4px;
}
.tabColorClass{
    color: red;
}
</style>

