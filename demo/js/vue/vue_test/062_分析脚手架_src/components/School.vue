<template>
    <div class="demo">
        <h2>学校名称:{{schoolName}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>

<script>
    //交互脚本
    export default {
        name:'School',
        data(){
            return {
                schoolName: 'abc',
                address: '南京'
            }
        },
        methods:{
            showName(){
                alert(this.schoolName)
            }
        }
    }

</script>

<style>
    /* 样式 */
    .demo{
        background-color: orange;
    }
</style>