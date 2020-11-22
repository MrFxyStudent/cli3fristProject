<template>
      <nav-com>
    <nav-one path="/one" fontColor="red">
    <template v-slot:img1="data">
        <img src="../../../assets/img/logo.png" alt />
        <p>{{data.text}}</p>
    </template>
    </nav-one>

    <nav-one path="/two" fontColor="blue">
    <template v-slot:img1>
    <img slot="img" src="../../../assets/img/logo.png" alt />
        <p slot="text">分类</p>
        </template>
    </nav-one>

    <nav-one path="/three" fontColor="green">
    <template v-slot:img1>
        <img slot="img" src="../../../assets/img/logo.png" alt />
        <p slot="text">购物车</p>
        </template>
    </nav-one>

    <nav-one path="/four" fontColor="pink">
    <template v-slot:img1>
    <img slot="img" src="../../../assets/img/logo.png" alt />
        <p slot="text">我的</p>
        </template>
    </nav-one>

  </nav-com>
</template>

<script>
import navCom from '../../content/navCom/nav'
import navOne from '../../content/navCom/navOne'
export default {
  data(){
    return {}
  },
  props:{
  },
  methods:{},
  filters:{},
  computed:{},
  watch:{},
  components:{
    navCom,
    navOne
  }
}
</script>