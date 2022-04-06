<template>
    <div class="school">
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    //交互脚本
    export default {
        name:'School',
        data(){
            return {
                name: 'abc',
                address: '南京',
            }
        },
        methods:{
            showName(){
                alert(this.schoolName)
            }
        },
        mounted(){
            // this.$bus.$on('hello',(data)=>{
            //     console.log(data)
            // })
            this.pubid = pubsub.subscribe('hello', (data,params)=>{
                console.log(data,params)
            })
        },
        beforeDestroy(){
            // this.$bus.$off('hello')
            pubsub.unsubscribe(this.pubid)
        }
    }

</script>

<style>
    /* 样式 */
    .school{
        background-color: orange;
    }
</style>