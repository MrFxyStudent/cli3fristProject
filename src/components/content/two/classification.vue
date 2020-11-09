<template>
    <div class="classification">
            <class-list v-for="(classArr,index) in twoClassificationData" :key="index" :item="classArr"></class-list>
    </div>
</template>

<script>
import classList from './classification/classList'

export default {
    data(){
        return {
        }
    },
    components:{
        classList
    },
    props:{
        twoClassificationData:{
            type:Array,
            default:[]
        }
    }
}
</script>

<style scoped>
.classification{
    display: flex;
    flex-wrap:wrap;
    padding: 10px 3px 0;
}

</style>