<template>
  <div>
      <School></School>
      <Student></Student>
  </div>
</template>

<script>
    import School from './School'
    import Student from './Student'
import Student from './Student.vue'

    export default {
  components: { Student },
        name:'App',
        cmoponent:{
            School,
            Student
        }
    }
</script>

<style>

</style>