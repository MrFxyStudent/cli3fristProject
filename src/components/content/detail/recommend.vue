<template>
    <div class="classification">
        <class-list v-for="(classArr,index) in recommend" :key="index" :item="{...classArr}"></class-list>
    </div>
</template>

<script>
import classList from '../two/classification/classList'

export default {
    data(){
        return {}
    },
    components:{
        classList
    },
    props:{
        recommend:{
            type:Array,
            default:[]
        }
    },
    mounted(){}
}
</script>

<style scoped>
.classification{
    display: flex;
    flex-wrap:wrap;
    padding: 10px 3px 0;
}

</style>