<template>
    <div class="container">
        <Search></Search>
        <List></List>
    </div>
</template>

<script>
    import axios from 'axios'
    import Search from './components/Search.vue'
    import List from './components/List.vue'
    export default {
        name:'App',
        components:{
            Search,List
        }
    }
</script>
<style lang="css">

</style>