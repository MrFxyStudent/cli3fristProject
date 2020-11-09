<template>
    <div id="nav">
     <slot></slot>
    </div>
</template>

<script>

export default {
      data(){
    return {}
  },
  methods:{},
  filters:{},
  computed:{},
  watch:{},
  components:{
  }
}
</script>


<style>
#nav{
  height: 49px;
  background: #f6f6f6;
  display: flex;
  align-items: center;
  position:fixed;
  right: 0;
  left:0;
  bottom: 0;
  box-shadow: 0px 0px 5px rgba(000, 000, 000, 0.5);
}
</style>