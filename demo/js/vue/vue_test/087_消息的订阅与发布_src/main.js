//引入vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false

const Demo = Vue.extend({})

//实例化vue
new Vue({
    el:'#root',
    render: h=>h(App),
    // beforeCreate(){
    //     Vue.prototype.$bus = this  //安装全局事件总线
    // }
})