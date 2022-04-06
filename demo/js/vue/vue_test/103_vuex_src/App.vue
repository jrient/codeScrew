<template>
    <div>
        <Count />
        <hr>
        <Person />
    </div>
</template>

<script>
    import axios from 'axios'
    import Count from './components/Count.vue'
    import Person from './components/Person.vue'
    export default {
        name:'App',
        components:{
            Count,
            Person
        }
    }
</script>
<style lang="css">

</style>