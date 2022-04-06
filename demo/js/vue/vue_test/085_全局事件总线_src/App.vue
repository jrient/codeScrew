<template>
  <div class="app">
      <h1>{{msg}}</h1>
      <School />
      <Student />
  </div>
</template>

<script>

    import Student from './components/Student'
    import School from './components/School'
    export default {
        name:'App',
        data() {
            return {
                msg:'xxxx',
            }
        },
        methods: {
            
        },
        watch:{
            doList:{
                //深度监视
                deep:true,
                handler(value){
                    localStorage.setItem('doList', JSON.stringify(value))
                }
            }
        },
        components:{
            School,
            Student
        }
    }
</script>

