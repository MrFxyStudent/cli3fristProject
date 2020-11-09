<template>
      <nav-com>
    <nav-one path="/one" fontColor="red" :dataFu="dataFu">
    <template v-slot:img1="data ">
        <img src="../../../assets/img/logo.png" alt />
        <p>{{data.text}}</p>
    </template>
    </nav-one>

    <nav-one path="/two" fontColor="blue" :dataFu="dataFu">
    <template v-slot:img1>
    <img slot="img" src="../../../assets/img/logo.png" alt />
        <p slot="text">home2</p>
        </template>
    </nav-one>

    <nav-one path="/three" fontColor="green" :dataFu="dataFu">
    <template v-slot:img1>
        <img slot="img" src="../../../assets/img/logo.png" alt />
        <p slot="text">home3</p>
        </template>
    </nav-one>

    <nav-one path="/four" fontColor="pink" :dataFu="dataFu">
    <template v-slot:img1>
    <img slot="img" src="../../../assets/img/logo.png" alt />
        <p slot="text">home4</p>
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
    dataFu:String
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