<template>
    <div>
        <div class="row">
            <Banner></Banner>
        </div>
        <div class="row">
            <div class="col-2 offset-2">
                <div class="list-group">
                    <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
                    <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
                </div>
            </div>
            <div class="col-6">
                <div class="panel">
                    <div class="panel-body">
                        <router-view>
                            
                        </router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Banner from './components/Banner'
    export default {
        name:'App',
        components:{
            Banner
        }
    }
</script>