<template>
    <div class="detail">
        <div id="#hhh" style="display:none">{{imgCount}}</div>
        <detail-img-row class="detailnav">
            <div class="leftGo" slot="leftGo" @click="returnPage">《</div>
            <div ref="selectTab" class="content" slot="content" v-for="(item,index) in navText" :key="index">
                <detali-top-nav :navText="item" @click.native="NavToHeight(index)"></detali-top-nav>
            </div>
        </detail-img-row>
        <scroll class="scrollContent" ref="scroll" @scrollHeightFun="scrollHeightFun">
            <detail-img-show :topImages="[...itemDataClass.topImages]" ></detail-img-show>
            <detail-title :title="itemDataClass.title" :price="itemDataClass.price" :oldPrice="itemDataClass.oldPrice" :discountDesc="itemDataClass.discountDesc" :columns="[...itemDataClass.columns]" :services="[...itemDataClass.services]"></detail-title>
            <detail-shop :shopClass="{...shopClass}"></detail-shop>
            <img-detailed :imgDetailedClass="{...this.imgDetailedClass}"></img-detailed>
            <parameter ref="parameterRef" :parameterClass="{...parameterClass}"></parameter>
            <comment ref="commentRef" :userCommentClass="{...userCommentClass}"></comment>
            <recommend ref="recommendRef" :recommend="[...recommend]"></recommend>
        </scroll>
        <bottom-bar @addCart="addCart"></bottom-bar>
        <!-- <toast :message="message" :isShow="isShow"></toast> -->
    </div>
</template>

<script>
import scroll from '../../components/common/scroll'
import {debonuse} from '../../common/utils/debonuse'
import {mixin} from '../../common/utils/mixin'
import { detailData,recommendData,detailItem,shop,imgDetailedC,userComment,parameterC} from '../../network/detail.js';
import detailImgRow from '../../components/content/detail/detailImgRow';
import detaliTopNav from '../../components/content/detail/topNav';
import detailImgShow from '../../components/content/detail/ImgShow';
import detailTitle from '../../components/content/detail/title';
import detailShop from '../../components/content/detail/shop'
import imgDetailed from '../../components/content/detail/imgDetailed'
import parameter from '../../components/content/detail/parameter'
import comment from '../../components/content/detail/comment'
import recommend from '../../components/content/detail/recommend'
import bottomBar from '../../components/content/detail/bottomBar'
import {mapActions} from 'vuex'
// import toast from '../../components/common/Toast/Toast'
export default {
    name:'detail',
    data(){
        return{
            navText:['商品','参数','评论','推荐'],
            natPostionTop:[],
            navPpostonNum:0,
            itemDataClass:Object,
            shopClass:Object,
            imgDetailedClass:Object,
            userCommentClass:Object,
            debonuseRow:function(){},
            recommend:Array,
            parameterClass:Object,
            // message:"",
            // isShow:null
        }
    },
    computed:{
        imgCount(){
            if(typeof(this.$refs.scroll)=='undefined'){
                return this.$store.state.detailImg
            }else{
                this.debonuseRow()
                this.natPostionTop.push(0);
                this.natPostionTop.push(this.$refs.parameterRef.$el.offsetTop);
                this.natPostionTop.push(this.$refs.commentRef.$el.offsetTop);
                this.natPostionTop.push(this.$refs.recommendRef.$el.offsetTop);
                // console.log(this.natPostionTop);
                return this.$store.state.detailImg
            }
        },
    },
    components:{
        scroll,
        detaliTopNav,
        detailImgRow,
        detailImgShow,
        detailTitle,
        detailShop,
        imgDetailed,
        parameter,
        comment,
        recommend,
        bottomBar,
        // toast
    },
    methods:{
        ...mapActions(['isCarObj']),
        detailData(iid){
            detailData(iid).then(res=>{
                const head = res.data.result;
                //店铺信息
                const DetailItemInfo = head.itemInfo
                const Detailcolumns = head.columns
                const DetailServices = [head.shopInfo .services[0].name,head.shopInfo .services[1].name]
                this.itemDataClass = new detailItem(DetailItemInfo,Detailcolumns,DetailServices);
                this.shopClass = new shop(head.shopInfo);
                this.imgDetailedClass = new imgDetailedC(head.detailInfo.detailImage[0]);
                this.userCommentClass = new userComment(head.rate.list[0]);
                this.parameterClass = new parameterC(head.itemParams);
            }).catch(err =>{
                console.log(err);
            });
        },
        recommendData(){
            recommendData().then(res=>{
                const data = res.data.data.list
                this.recommend = data;
            }).catch(err=>{
                console.log(err);
            })
        },
        returnPage(){
            this.$router.go(-1);
        },
        NavToHeight(index){
            console.log(index);
            // console.log(this.$refs.parameterRef.$el.offsetHeight);
            for(let j = 0; j < this.natPostionTop.length; j++){
                this.$refs.a[j].style.color = "#000"
            }
            this.$refs.a[index].style.color = "red"
            this.$refs.scroll.scrollTopTo(0,-this.natPostionTop[index],500);
        },
        scrollHeightFun(position){
            let positionY = Math.abs(position.y)
            // console.log(positionY+" "+this.navPpostonNum);
            for (let i = 0; i < this.natPostionTop.length; i++) {
                if(positionY>=this.natPostionTop[i+1] && this.navPpostonNum<i+1){
                    for(let j = 0; j < this.natPostionTop.length; j++){
                        this.$refs.selectTab[j].style.color = "#000"
                    }
                    this.navPpostonNum = i+1
                    this.$refs.selectTab[this.navPpostonNum].style.color = "red"
                    console.log(this.navPpostonNum);
                }
            }
        },
        addCart(){
            //加入购物车
            let CarObj = {
                title:this.itemDataClass.title,
                Price:this.itemDataClass.oldPrice,
                image:this.itemDataClass.topImages[0],
                count:1,
                iid:this.$route.query.iid
            }
             //传数据到vuex第一种方法
            this.isCarObj(CarObj).then(res=>{
                // this.isShow = true;
                // this.message = res
                
                this.$toast.showFun(res,1500);
             
            }).catch(err=>{
                console.log(err);
            })
            //传数据到vuex第二种方法
            // this.$store.dispatch("isCarObj",CarObj).then(res=>{
            //     this.isShow = true;
            //     this.message = res
            //     setTimeout(()=>{
            //         this.isShow = false;
            //     },1000)
            // }).catch(err=>{
            //     console.log(err);
            // })
        }
    },
    mixins:[mixin()],
    created(){
        this.detailData(this.$route.query.iid);
        this.recommendData();
    },
    mounted(){
        this.debonuseRow = debonuse(this.$refs.scroll.scrollrefresh,100);
        this.$refs.selectTab[0].style.color = "red"
    },
    updated(){}
}
</script>

<style scoped>
    .detailnav{
        position: relative;
        z-index: 3;
        background: #fff;
    }
    .content{
        flex: 1;
    }    
    .leftGo{
        width: 44px;
    }
    .detail{
        position: relative;
        height: 100vh;
        background: #fff;
        overflow: hidden;
    }
    .scrollContent{
        height:calc(100%-93px);
        position: fixed;
        top:44px;
        left: 0;
        right: 0;
        bottom: -50px;
        z-index: 2;
    }
</style>