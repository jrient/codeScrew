<template>
    <div>
        <h2>学生姓名:{{name}}</h2>
        <h2>学生年龄:{{age}}</h2>
        <button @click="sendStudentName">学生名给school</button>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    //交互脚本
    export default {
        name:'Student',
        data(){
            return {
                name: 'abc',
                age: '12'
            }
        },
        methods:{
            sendStudentName(){
                // this.$bus.$emit('hello', 666)
                pubsub.publish('hello', 666)
            }
        }
    }

</script>

<style>
    /* 样式 */
    /* .demo{
        background-color: orange;
    } */
</style>