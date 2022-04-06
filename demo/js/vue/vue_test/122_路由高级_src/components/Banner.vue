<template>
<div class="col-8 offset-2">
    <div class="page-header">
        <h2>Vue Router Dem1o</h2>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="go">go</button>
    </div>
</div>
</template>

<script>
export default {
    name:'Banner',
    methods:{
        back(){
            this.$router.back()
        },
        forward(){
            this.$router.forward()
        },
        go(){
            //和 history.go一样
            this.$router.go(-1)
        }
    }
}
</script>

<style>

</style>