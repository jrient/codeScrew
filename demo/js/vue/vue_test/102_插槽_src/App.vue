<template>
    <div class="container">
        <Category>
            <!-- <template scope="testname"> -->
            <template scope="{games,demo}">
                <ul>
                    <li v-for="(g,index) in games" :key="index">{{g}}</li>
                </ul>
                {{demo}}
            </template>
        </Category>
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