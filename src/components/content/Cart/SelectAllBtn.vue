<template>
    <div class="SelectAllBtn">
       <div class="SelectAllClass">
           <div class="BtnLeft">
               <check-btn class="Sbtn" @click.native="checkAllFun" :isClass="isAllcheck"></check-btn>
               <span >全选</span>
               <span style="display:none">{{bindIsAllCheck}}</span>
               <span>合计:￥{{checkObj.menry}}</span>
           </div>
           <div class="goCount" @click="goComputed()">去计算（{{checkObj.count}}）</div>
       </div>
    </div>
</template>

<script>
//按钮组件
import checkBtn from "./checkBtn"
export default {
    data(){
        return {
            isAllcheck:false,//全选按钮
        }
    },
    components:{
        checkBtn
    },
    computed:{
        bindIsAllCheck(){
            //监听点击单个商品是否触发全选按钮
            return this.isAllcheck = this.$store.state.isBoolean
        }
    },
    methods:{
        checkAllFun(){
            //全选
            this.isAllcheck = !this.isAllcheck;
            this.$store.commit("checkAllFun",this.isAllcheck);
        },
        goComputed(){
            //计算购物车选中的购买金额
            if(this.checkObj.count != 0){
                this.$toast.showFun("付款---",1500);
                return  
            }
            this.$toast.showFun("当前没有选中商品",1500);
        }
    },
    props:{
        checkObj:{
            //监听当前选中商品的价格和数量
            type:Object,
            default(){
                return {
                    menry:0,//价格
                    count:0,//数量
                }
            }
        }
    }
}
</script>

<style scoped>
.SelectAllBtn{
    width: 100%;
    z-index: 3;
    position: fixed;
    bottom: 48px;
    border-bottom: 1px solid #f1f1f1;
    background-color: #fff;
}
.SelectAllClass{
    display: flex;
    align-items: center;
    height: 40px;
    background: #f1f1f1;
}
.BtnLeft{
    flex: 3;
}
.Sbtn{
    display:inline;
    padding: 0 3px 0 20px;
    vertical-align: middle;
}
.BtnLeft span{
    padding: 0 10px;
}
.goCount{
    flex: 1.4;
    background: red;
    height: 100%;
    text-align: center;
    line-height: 40px;
    color: #fff;
}
</style>