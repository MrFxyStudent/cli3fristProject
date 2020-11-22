<template>
    <div class="detailImg">
        <slot class="leftGo" name="leftGo"></slot>
        <slot name="content"></slot>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    props:{},
    methods:{
     
    }
}
</script>

<style scoped>
    .detailImg{
        display: flex;
        height: 44px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        justify-items: center;
        text-align: center;
        padding-right: 44px;
        box-shadow: 1px 0 0 #888888;
    }


</style>