<template>
  <div>
      <button @click="getData1">获取数据1</button>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'App',
        methods:{
            getData1(){
                axios.get('http://localhost:8080/api/rest/api3.do?api=mtop.common.getTimestamp').then(
                    response => {
                        console.log('success', response.data)
                    },
                    error => {
                        console.log('error',error.message)
                    }
                )
            }
        }
    }
</script>