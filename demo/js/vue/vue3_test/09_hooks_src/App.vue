<template>
  <div>
    <SavePoint />
  </div>
</template>

<script>

import SavePoint from './components/SavePoint.vue'
import {reactive, onMounted} from 'vue'
export default {
  name: 'App',
  setup() {
    

    return {
      
    }
  },
  components:{
    SavePoint
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
