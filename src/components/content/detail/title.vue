<template>
    <div class="titleRow">
        <div class="titleText">
            {{title}}
        </div>
        <div class="price">
            <div class="priceRow">
                <span class="priceNow">{{price}}</span>
                <s class="priceAfter">{{oldPrice}}</s>
            </div>
            <span class="acvtionP">{{discountDesc}}</span>
        </div>
        <div class="userMessage">
            <span v-for="(item,index) in columns"  :key="index">{{item}}</span>
        </div>
        <div class="discountRow">
            <span>{{services[0]}}</span>
            <span>{{services[1]}}</span>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
        }
    },
    computed:{
    },
    props:{
        title:{
            type:String,
            default:""
        },
        price:{
            type:String,
            default:""
        },
        oldPrice:{
            type:String,
            default:""
        },
        discountDesc:{
            type:String,
            default:""
        },
        columns:{
            type:Array,
            default:[]
        },
        services:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.titleRow{
    padding: 15px 10px 0;
}
.titleText{
    font-size: 18px;
    /* font-weight: 600; */
    letter-spacing: 1px;
    text-indent: .1rem;
    line-height: 20px;
    font-family: '微软雅黑';
}
.price{
    padding-top: 15px;
    display: flex;
    align-items: center;
}
.priceNow{
    color: red;
    font-size: 25px;
}
.priceAfter{
    font-size: 14px;
    padding:0 10px 0 5px;
    color: #999;
    /* text-decoration:line-through; */
}
.priceRow{
    display: inline-block;
}
.acvtionP{
    padding: 1px 3px;
    background: pink;
    color: #fff;
    border-radius: 15px;
    font-size: 14px;
}
.userMessage{
    display: flex;
    justify-content: space-between;
    color: #999;
    font-size: 14px;
    padding-top: 20px;
    padding-bottom: 10px;
    box-shadow: 0 .4px #f1f1f1;
}
.discountRow{
    display: flex;
    box-shadow: 0 .4px #f1f1f1;
    padding: 10px 0 10px;
    border-bottom: 1.2px solid #f1f1f1;
    justify-content: space-between;
    font-size: 14px;
}
</style>