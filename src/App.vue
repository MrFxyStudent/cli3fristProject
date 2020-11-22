<template>
<div id="app">
  <!-- <keep-alive exclude="detail"> -->
     <router-view></router-view>
  <!-- </keep-alive> -->
  <MentTab></MentTab>
</div>
</template>
<script>
import MentTab from "./components/common/MentTab/MentTab.vue"

export default {
  data(){
    return {}
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
