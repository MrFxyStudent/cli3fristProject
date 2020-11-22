<template>
    <div>
        <div class="shopLogo">
            <img :src="shopClass.shopLogo" alt="">
            <span>{{shopClass.name}}</span>
        </div>
        <div class="shopMessageRow">
            <div class="shopMessageLeft">
                <div class="shopLeftNewsLeft">
                    <p class="bigZize">{{shopClass.cSells}}</p>
                    <p>总销量</p>
                </div>
                <div class="shopLeftNewsRight">
                    <p class="bigZize">{{shopClass.cGoods}}</p>
                    <p>总销量</p>
                </div>
            </div>
            <div class="shopMessageRight">
                <ul>
                    <li v-for="(item,index) in shopClass.score" :key="index">
                        <span>{{item.name}}</span>
                        <span>{{item.score}}</span>
                        <span>低</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            scoreText:['高','低']
        }
    },
    watch:{},
    props:{
        shopClass:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
.shopLogo{
    display: flex;
    align-items: center;
    padding: 10px;
}
.shopLogo img{
    height: 80px;
}
.shopLogo span{
    font-size: 15px;
    padding-left: 7px;

}
.shopMessageRow{
    display: flex;
    padding: 0 5px;

}
.shopMessageLeft{
    flex: 1;
    display: flex;
    align-items: center;
    border-right: .5px solid rgb(201, 201, 201);
    justify-items: center;
}
.shopLeftNewsLeft{
     flex: 1;
     text-align: center;
}
.shopLeftNewsRight{
    flex: 1;
    text-align: center;
}
.bigZize{
    font-size: 17px;
    font-weight: 600;
    padding-bottom: 15px;
}

.shopMessageRight{
    flex: 1;
}
.shopMessageRight ul li{
    display: flex;
    justify-content: space-between;
    padding: 5px 35px;
    font-size: 13px;
    line-height: 15px;

}
.shopMessageRight ul li span:nth-child(1){
       font-size: 14px;
}

.shopMessageRight ul li span:nth-child(2){
    color: red;
}
.shopMessageRight ul li span:nth-child(3){
    padding:2px;
    background: red;
    color: #fff;
}
.fontColor{
    color: red;
}
.bckColor{
    background: red;
}
</style>