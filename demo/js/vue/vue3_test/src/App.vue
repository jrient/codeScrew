<template>
  <div>
    <input type="text" v-model="keyWord">
    <h3>{{keyWord}}</h3>
  </div>
</template>

<script>

import {customRef } from 'vue'
export default {
  name: 'App',
  setup() {
    let timer
    //自定义ref
    function myRef(value){
      return customRef((track, trigger) => {
        return {
          get(){
            track()
            return value
          },
          set(newValue) {
            value = newValue
            clearTimeout(timer)
            timer = setTimeout(()=>{
              trigger()
            }, 500)
          }
        }
      })
    }

    // let keyWord = ref('hello')

    //自定义ref
    let keyWord = myRef('hello')

    return {
      keyWord
    }
  },
  components:{
    // SavePoint
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
