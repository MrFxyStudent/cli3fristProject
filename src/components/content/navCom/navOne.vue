<template>
        <div class="imgText" @click="tabActive" :style="isAvtive">
           <slot name="img1" :text="text"></slot>
           <!-- <slot name="text1"></slot> -->
        </div>
</template>

<script>
export default {
  data(){
    return {
         text:"子组件"
    }
  },
  props:{ 
      dataFu:String,
      path:String,
      fontColor:{
          type:String,
          default:'red'
          }
      },
  methods:{
    tabActive(val){
      // console.log(this.fontColor);
      // console.log(this.path+'/'+this.dataFu);
      this.$router.replace(this.path+'/'+this.dataFu)
    }
  },
  filters:{},
  computed:{
      avtiveColor(){
        //   console.log(this.$route.path.indexOf(this.path));
          return this.$route.path.indexOf(this.path) == 0
      },
      isAvtive(){
          return this.avtiveColor ? {color:this.fontColor}:{}
      }
  },
  watch:{},
  components:{
  }
}
</script>


<style>
.imgText{
    flex: 1;
    justify-content: center;
    text-align: center;
}
.imgText img{
  width: 20px;
}
.imgText p{
  margin: 0;
  font-size: 14px;
}
.redFont{
    color: red;
}
</style>