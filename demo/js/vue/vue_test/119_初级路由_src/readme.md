路由

1. 基本使用

    1. 安装vue-router, 命令 npm i vue-router
    2. 应用插件: Vue.use(VueRouter)
    3. 编写router配置项
   
   ```javascript
    // 创建应用路由
    import VueRouter from "vue-router"

    import About from '../components/About'
    import Home from '../components/Home'

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

   ```

    4. 超链接

    > <router-link active-class="active" to="/home">home</router-link>

    5. 指定显示位置
    > <router-view></router-view>

2. 注意点
   1. 路由组件通常存放在 pages 文件夹下，一般组件通常存放在 components 文件夹
   2. 通过切换, "隐藏"了路由组件，默认是被销毁的，需要的时候再去挂载
   3. 每个组件都有自己的$route属性，里面存储着自己的路由信息
   4. 整个应用只有一个router，可以通过组件的$router属性获取到
3. 嵌套路由
4. 