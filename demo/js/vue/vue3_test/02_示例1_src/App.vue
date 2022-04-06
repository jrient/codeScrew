<template>
  <div>
    <h1>info</h1>
    <h2>name:{{name}}</h2>
    <h2>age:{{age}}</h2>
    <h3>{{detail.job}},{{detail.addr}}</h3>
    <button @click="sayHello">hello</button>
    <button @click="changeInfo">changeInfo</button>
    
  </div>
</template>

<script>

import {ref,reactive} from 'vue'
export default {
  name: 'App',
  setup() {
    let name = ref('aa')
    let age = ref(19)
    let detail = reactive({
      job:'work',
      addr:'nnj'
    })
    function sayHello(){
      alert(`hello,my name is ${name},my age ${age}`)
    }
    function changeInfo(){
      name.value = 'bb'
      age.value = 20
      detail.job='zz'
      detail.addr='bbc'
    }
    
    return {
      name,
      age,
      detail,
      sayHello,
      changeInfo
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
