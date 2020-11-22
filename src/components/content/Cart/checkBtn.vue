<template>
    <div class="checkBtn">
        <span class="checkBtnA" @click="isCheck" :class="{styleColor:isClass}"></span>
    </div>
</template>

<script>
export default {
    data(){
        return {
        }
    },
    computed:{

    },
    props:{
        isClass:{
            type:Boolean,
            default(){
                return false
            }
        },
 
    },
    methods:{
        isCheck(){}
    }
}
</script>

<style scoped>
.checkBtn{
    text-align: center;
}
.checkBtnA{
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    /* background: red; */
    border:1px solid #999;
}
.styleColor{
    background: red;
    border:1px solid red;
}
</style>