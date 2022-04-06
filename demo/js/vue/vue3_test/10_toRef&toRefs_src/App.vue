<template>
  <div>
    <h3>{{name}}</h3>
    <h3>{{info.addr.city}}</h3>
    <button @click="name+='-'"> change name</button>
    <br>
    <button @click="info.addr.city+='!!'"> change city </button>
  </div>
</template>

<script>

import {reactive, toRef, toRefs} from 'vue'
export default {
  name: 'App',
  setup() {
    let data = reactive({
      name: 'jri',
      info: {
        addr: {
          city: 'beijin'
        }
      }
    })

    const toRefsData = toRefs(data)

    return {
      //不使用，变量无法变成响应式
      // name: data.name,
      // city: data.info.addr.city,

      //使用 toRef
      // name: toRef(data, 'name'),
      // city: toRef(data.info.addr, 'city'),

      //使用 toRefs
      ...toRefsData
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
