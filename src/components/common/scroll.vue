<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
    data(){
        return{
            scroll:null,
            viewPosition:null
        }
    },
    props:{
        // styleHeight:{
        //     type:Number,
        //     default:200
        // }
        scrollHeight:{
            type:Number,
            default:null
        }
    },
    methods:{
        scrollTopTo(){
            this.scroll.scrollTo(0,0,500);
        },
         scrollrefresh(){
            // console.log('refresh');
            this.scroll.refresh();
        }
    },
    mounted(){
        let that = this;
        that.scroll = new BetterScroll(this.$refs.wrapper, {
            // movable: true,
            // zoom: true,
            click:true,
            pullUpLoad: true,//上拉加载
            probeType:3 //设置记录滚动条定位
        })
        //监听滚动坐标
        that.scroll.on('scroll',function(position){
            // if(that.scrollHeight==null){
            //     return;
            // }
            // console.log(position);

            that.viewPosition = position
            that.$emit("scrollHeightFun",position)
        })
        //下上拉加载
        that.scroll.on('pullingUp',function(){
            console.log('Loading...');
            //发起网络请求
             that.$emit("LoadingAxios",1)
            //渲染界面
            that.scroll.finishPullUp();//finishPullUp结束加载行为
        })
        this.scroll = that.scroll;
    }
}
</script>

<style scoped>
.wrapper{
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    background: #fff;
}
</style>