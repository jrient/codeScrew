// 创建应用路由
import VueRouter from "vue-router"

import About from '../pages/About'
import Home from '../pages/Home'

// 创建路由
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        }
    ]
})
