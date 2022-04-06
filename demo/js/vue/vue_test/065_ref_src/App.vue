<template>
  <div>
      <h1 v-text="msg" ref="h1"></h1>
      <button @click="showDom" >点我输出上方的DOM元素</button>
      <School ref="school" />
  </div>
</template>

<script>

    import School from './components/School'
    export default {
        name:'App',
        data() {
            return {
                msg:"123123123123"
            }
        },
        methods: {
            showDom(){
                console.log(this.$refs.h1)      //dom元素
                console.log(this.$refs.school)  //子组件的VueComponent实例
            }
        },
        components:{
            School
        }
    }
</script>

<style>

</style>