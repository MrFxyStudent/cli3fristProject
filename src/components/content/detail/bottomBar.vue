<template>
    <div class="bottomBar">
        <div class="bottomBar-left">
            <div class="bottomBar-leftText">
                <span>客服</span>
                <span>店铺</span>
                <span>收藏</span>
            </div>
            
        </div>
        <div class="bottomBar-right">
            <span class="bottomBar-addCart" @click="addCart">加入购物车</span>
            <span class="bottomBar-shopping">购买</span>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    methods:{
        addCart(){
            // console.log('addCart');
            this.$emit("addCart");
        }
    }
}
</script>

<style scoped>
.bottomBar{
    display: flex;
    width: 100%;
    height: 50px;
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 2;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    justify-items: center;
    border-top: 1px solid #999;
}
.bottomBar>div{
    
}
.bottomBar-left{
    text-align: center;
    flex: 1;
}
.bottomBar-leftText{
    display: initial;
}
.bottomBar-leftText span{
    padding: 0 8px;
}
.bottomBar-right{
    display: flex;
    justify-items: center;
    align-items: center;
}
.bottomBar-right>span{
    display: inline-block;
    height: 50px;
    line-height: 50px;
    text-align: center;
}
.bottomBar-addCart{
    width: 110px;
    background: #e3e34d;
    color: #474747;
}
.bottomBar-shopping{
    width: 80px;
    background: #ea778b;
    color:azure;
}

</style>