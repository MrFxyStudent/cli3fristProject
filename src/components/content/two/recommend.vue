<template>
    <div class="recommend">
        <div class="recommendRow">
            <div class="recommendA" v-for="(rArr,i) in recommend.list" :key="i">
                <img :src="rArr.image" alt="">
                <p>{{rArr.title}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    methods:{
   
    },
    components:{},
    props:['recommend']
}
</script>

<style scoped>
.recommendRow{
    border-bottom: 10px solid #eee;
    padding: 10px 0 20px;

}
.recommendRow{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.recommendA{
    text-align: center;
}
.recommendA img{
    width: 66px;
    height: 66px;
    border-radius: 50%;
}
.recommendA p{
    font-size: 12px;
}
</style>