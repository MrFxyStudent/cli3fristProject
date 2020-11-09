<template>
    <div id="three">
        <!-- <scroll class="therrContent" @scrollHeight="tScrollHeight" ref="scroll" :scrollHeight="scrollHeight"> 
            <ul class="content">
                <li>列表1</li>
                <li>列表2</li>
                <li>列表3</li>
                <li>列表4</li>
                <li>列表5</li>
                <li>列表6</li>
                <li>列表7</li>
                <li>列表8</li>
                <li>列表9</li>
            </ul>
        </scroll> -->
        <twoScrollTop @click.native="scrollTopFun" v-show="isShowScrlloTop"></twoScrollTop>
        <h1>{{comImgNumTime}}</h1>
        <button @click="hhAdd">1</button>
    </div>
</template>

<script>
function debonuse(fun,time){
    //防抖函数
    let timer = null;
    return function(){
        if(timer) clearTimeout(timer);
        timer = setTimeout(()=>{
            fun()
        },time)
    }
}
let a = debonuse(name,1110)

function name(params) {
    // console.log('name');
}
for(let i=0;i<30;i++){
    a()
}
import scroll from '../components/common/scroll'
import twoScrollTop from '../components/common/scrollTop/scrollTop'
export default {
    name:'threeview',
    data(){
        return {
            isShowScrlloTop:false,
            scrollHeight:-300,
            tabType:'tabType:',
            imgNumTime:-1
        }
    },    
    computed:{
        comImgNumTime(){
            return this.tabType+this.imgNumTime
        }
    },
    methods:{
        hhAdd(){
            this.tabType = this.tabType+(this.scrollHeight+'')
        },
        tScrollHeight(position){
            // console.log(position);
            position.y<this.scrollHeight?this.isShowScrlloTop=true:this.isShowScrlloTop=false
        },
        scrollTopFun(){
            // console.log('scrollTopFun');
            this.$refs.scroll.scrollTopTo()
            // console.log(this.$refs.scroll.scroll.scrollTo(0,0,500));
        },
    },
    components:{
        scroll,
        twoScrollTop
    },
    mounted(){
        this.imgNumTime = this.$store.state.imgNum
    },
    created(){
    }
       
}
</script>

<style scoped>
#three{
    position: relative;
    height: 100vh;
    overflow: hidden;
}
.therrContent{
    background: red;
}
</style>