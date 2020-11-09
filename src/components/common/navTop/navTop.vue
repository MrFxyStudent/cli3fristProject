<template>
    <div id="navTop">
        <div class="Navleft"><slot name="left">left</slot></div>
        <div class="Navcontent" ><slot name="content">首页</slot></div>
        <div class="Navright" ><slot name="right">right</slot></div>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    methods:{},
    computed:{},
    watch:{},
    fliters:{},
    components:{},
    props:{}
}
</script>

<style>
#navTop{
    width: 100%;
    display: flex;
    line-height: 44px;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    color: #fff;
    background: pink;
    z-index: 1;

}
.Navleft{
    width: 44px;
    height: 44px;
}
.Navcontent{
   flex: 1;
   text-align: center;
}
.Navright{
 width: 44px;
}
</style>