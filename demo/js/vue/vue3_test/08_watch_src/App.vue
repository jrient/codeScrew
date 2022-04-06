<template>
  <div>
    <input type="text" name="" id="" v-model="data.name">
    <input type="text" name="" id="" v-model="data.age">
    <h3>{{data}}</h3>
  </div>
</template>

<script>

import {reactive, watch} from 'vue'
export default {
  name: 'App',
  setup() {
    let data = reactive({
      name : 'jri',
      age: 18
    })
    
    watch(data, (newValue, oldValue)=>{
      console.log(newValue, oldValue)
    },{deep:true})

    return {
      data
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
