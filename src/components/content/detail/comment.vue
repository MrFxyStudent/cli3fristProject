<template>
    <div class="comment" v-if="Object.keys(userCommentClass).length !== 0">
        <div class="commentTop">
            <span>用户评价</span>
            <span>更多</span>
        </div>
        <div class="commentContent">
            <div class="user">
                <img :src="userCommentClass.user.avatar" alt="" srcset="">
                <span>{{userCommentClass.user.uname}}</span>
            </div>
            <div class="userContent">
                <P class="userContent-text">
                    {{userCommentClass.content}}
                </P>
                <p class="userContent-time">
                    <span>{{userCommentClass.style}}</span>
                </p>
                <P class="userImage">
                    <img v-for="(item,index) in userCommentClass.images" :key="index" :src="item" alt="" srcset="">
                    <!-- <img src="../../../assets/img/twoImg/timg.jpg" alt="" srcset=""> -->
                </P>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    props:{
        userCommentClass:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{}
}
</script>

<style scoped>
    .comment{
        width: 100%;
        padding: 20px 10px;
        box-sizing: border-box;
    }
    .commentTop{
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        border:.5px solid #f1f1f1;
    }
    .commentContent{

    }
    .user{
        vertical-align: middle;
        display: flex;
        align-items: center;
        padding: 10px 0 5px;
         border:.5px solid #f1f1f1;

    }
    .user img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
    }
    .userContent{

    }
    .userContent-text{
        font-size: 16px;
        color: #474747;
        letter-spacing: 1.51px;
        line-height: 20px;
         padding: 10px 0 0px;
    }
    .userContent-time{
        color: #999;
        font-size: 14px; 
        padding: 14px 0 15px;
    }
    .userContent-time span{
        padding-right: 5px;
    }
    .userImage{

    }
    .userImage img{
        width: 25%;
        height: 100px;
        padding: .1px;
    }

</style>