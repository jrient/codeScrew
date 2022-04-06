<template>
  <div>
    <input type="text" name="" id="" v-model="data.name">
    <input type="text" name="" id="" v-model="data.age">
    <input type="text" name="" id="" v-model="data.content">
  </div>
</template>

<script>

import {reactive, computed} from 'vue'
export default {
  name: 'App',
  setup() {
    let data = reactive({
      name : 'jri',
      age: 18
    })
    
    data.content = computed({
      get() {
        return data.name+':'+data.age
      },
      set(value) {
        const personAttr = value.split(':')
        data.name = personAttr[0]
        data.age = personAttr[1]
      }
    })

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
