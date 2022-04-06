<template>
    <div>
        <h2>学生姓名:{{name}}</h2>
        <h2>学生年龄:{{age}}</h2>
        <button @click="showName">点我提示学生名</button>
    </div>
</template>

<script>
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
            showName(){
                alert(this.name)
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