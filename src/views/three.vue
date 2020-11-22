<template>
    <div id="three">
          <nav-top>
            <div slot='left'></div>
            <div slot='content'>购物车({{cartCount}})</div>
            <div slot='right'></div>
        </nav-top>
        <scroll ref="scroll">
            <div class="cart" v-for="(item,index) in cartArr" :key="index">
                <div class="cartCheckbox">
                    <check-btn :isClass="item.isClass" @click.native="countIsCheck(index)"></check-btn>
                </div>
                <div class="cartImg">
                    <img :src="item.image" alt="" srcset="">
                </div>
                <div class="cartMessage">
                    <h3>{{item.title}}</h3>
                    <p>{{item.title}}</p>
                    <div>
                        <span>{{item.Price}}</span>
                        <span>X{{item.count}}</span>
                    </div>
                </div>
            </div>
        </scroll>
        <select-all-btn :checkObj="this.$store.state.checkObj"></select-all-btn>
    </div>
</template>

<script>
import scroll from "../components/common/scroll"
import {mapGetters} from "vuex";
import navTop from "../components/common/navTop/navTop"
import checkBtn from "../components/content/Cart/checkBtn"
import selectAllBtn from "../components/content/Cart/SelectAllBtn"
export default {
    name:'threeview',
    data(){
        return {
            cartArr:null,
            checkObj:this.$store.state.checkObj
        }
    },
    methods:{
        countIsCheck(index){
            this.$store.commit("countIsCheck",index)
        }
    },
    mounted(){
        this.cartArr = this.$store.state.CartArr;
    },
    updated(){
        this.$refs.scroll.scrollrefresh()
    },
    computed:{
        ...mapGetters({
            cartCount:"cartCount"
        })
    },
    components:{
        scroll,
        navTop,
        checkBtn,
        selectAllBtn
    }
}
</script>

<style scoped>
#three{

}
.cart{
    background-color: #fff;
    padding: 10px 15px;
    box-shadow: 0 .1px 1px #888888;
}
.cart::after{
    content: '';
    display: block;
    clear: both;
}
.cart>div{
    float: left;
}
.cartCheckbox{
    width: 7%;
    height: 100px;
    line-height: 100px;
}
.cartImg{
    width: 25%;
    overflow: hidden;
    padding-left: 5px;
    box-sizing: border-box;
}
.cartImg img{
    width: 100%;
    height: 100px;
    border-radius: 4px;
}
.cartMessage{
    width: 68%;
    padding-left: 10px;
    box-sizing: border-box;
}
.cartMessage h3{
    font-size: 18px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.cartMessage p{
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding: 17px 0;
}
.cartMessage div{
    display: flex;
    font-size: 14px;
    justify-content: space-between;
}
.cartMessage div span:nth-child(1){
    color: red;
    font-size: 18px;
    font-weight: 600;
}
</style>