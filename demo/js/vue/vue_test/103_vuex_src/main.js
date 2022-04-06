//引入vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
import vueResource from 'vue-resource'


//关闭vue的生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(vueResource)

//引入 store
import store from './store/index'


//实例化vue
new Vue({
    el:'#root',
    render: h=>h(App),
    store,
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})