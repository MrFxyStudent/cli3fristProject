<template>
    <div class="parameter">
       <div class="rule">
           <ul>
               <li v-for="(item,index) in parameterClass.rule" :key="index">
                   <div class="ruleTables">
                       <span v-for="(itemValue,index) in item" :key="index">{{itemValue}}</span>
                   </div>
               </li>
           </ul>
       </div>
       <div class="appearance">
           <ul>
               <li v-for="(item,index) in parameterClass.info" :key="index">
                    <span class="appearanceTitle">{{item.key}}</span>
                    <span class="message">{{item.value}}</span>
               </li>
           </ul>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            ruleArr:[]
        }
    },
    methods:{

    },
    watch:{},
    filters:{},
    props:{
        parameterClass:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    watch:{

    },
    mounted(){
    }
}
</script>

<style scoped>
.parameter{
    padding: 0 15px;
    font-size: 13px;
    color: #474747;
}
.rule{
    border-bottom: 1px solid #cac2c2;
}
.rule ul li{
    padding: 10px 0;
    border-bottom: .3px solid #f1f1f1;
}
.ruleTables{
    display: inline-block;
}
.ruleTables span:nth-child(1){
    padding-right: 140px;
}
.ruleTables span{
    padding-right: 30px;
}
.appearance{

}
.appearance ul li{
    padding: 10px 0;
}
.appearanceTitle{

}
.message{
    padding-left: 70px;
    letter-spacing: 1px;
    color: palevioletred;
}
</style>