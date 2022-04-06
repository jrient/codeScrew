<template>
    <div class="school">
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>

<script>
    //交互脚本
    export default {
        name:'School',
        data(){
            return {
                name: 'abc',
                address: '南京'
            }
        },
        methods:{
            showName(){
                alert(this.schoolName)
            }
        },
        mounted(){
            this.$bus.$on('hello',(data)=>{
                console.log(data)
            })
        },
        beforeDestroy(){
            this.$bus.$off('hello')
        }
    }

</script>

<style>
    /* 样式 */
    .school{
        background-color: orange;
    }
</style>