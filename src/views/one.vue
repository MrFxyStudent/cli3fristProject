<template>
<div>
   <h1 @click="oneFun">{{$route.params.id}}</h1>
</div>
</template>

<script>

export default {
    name:'oneview',
    data(){
        return {}
    },
    methods:{
        oneFun(){
            console.log(this.$route.params);
            console.log(this);
        }
    },
    unmounted(){
        console.log('destroyed');
    }
}
</script>