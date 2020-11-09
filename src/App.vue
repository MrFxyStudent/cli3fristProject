<template>
<div id="app">
  <keep-alive>
     <router-view></router-view>
  </keep-alive>
  <MentTab :dataFu="dataFu"></MentTab>
</div>
</template>
<script>
import MentTab from "./components/common/MentTab/MentTab.vue"

export default {
  data(){
    return {
      dataFu:'dataFu'
    }
  },
    methods:{},
    watch:{},
    filters:{},
    computed:{},
    props:{},
    components:{
      MentTab,
    },
    created(){}
}
</script>
<style>
@import url('./assets/css/base.css');
</style>
