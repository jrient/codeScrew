<template>
    <section class="jumbotron">
        <h3 class="jumbotrom-heading">Search Github users</h3>
        <div>
            <input type="text" name="" id="" v-model="keyWord">
            <button @click="searchUsers">search</button>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name:"Search",
    data(){
        return {
            keyWord:''
        }
    },
    methods:{
        searchUsers(){
            this.$bus.$emit('updateListData', {
                isFirst:false,
                isLoading:true,
                errMsg:'',
                users:[]
            })
            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response => {
                    this.$bus.$emit('updateListData', {
                        isLoading:false,
                        errMsg:'',
                        users:response.data.items
                    })
                },
                error => {
                    this.$bus.$emit('updateListData', {
                        isLoading:false,
                        errMsg:error.message,
                        users:[]
                    })
                }
            )
        }
    }
}
</script>

<style>

</style>