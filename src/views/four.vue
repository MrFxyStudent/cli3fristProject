<template>
    <div>
        <h1>four</h1>
        <button @click="getQuery">four</button>
    </div>
</template>

<script>
export default {
    name:'fourview',
    create(){
        console.log(this.$route.query);
    },
    methods:{
        getQuery(){
            console.log(this.$route.query);
        }
    }
}
</script>