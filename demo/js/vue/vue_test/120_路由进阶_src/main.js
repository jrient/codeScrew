//引入vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入
import VueRouter from 'vue-router'


//关闭vue的生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(VueRouter)

// 引入路由
import router from './router'


//实例化vue
new Vue({
    el:'#root',
    render: h=>h(App),
    router,
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})