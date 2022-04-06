<template>
  <div>
      <h1 v-text="msg" ref="h1"></h1>
      <School ref="school" name="学校1" address="南京" :num="1" />
      <School ref="school" name="学校2" address="北京"/>
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

        },
        components:{
            School
        }
    }
</script>

<style>

</style>