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
   1. 配置路由规则
   ```javascript
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component: News
                },
                {
                    path:'message',
                    component: Message
                }
            ]
        }
    ]
   ```
   2. 跳转 写完整路径
   > <router-link class="list-group-item" active-class="active" to="/home/message">message</router-link> 
4. 路由的query参数
    1. 传递参数
   ```javascript
    <!-- 传统传参写法 -->
    <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>
    <!-- 对象写法 -->
    <router-link :to="{
        path:'/home/message/detail',
        query:{
            id: m.id,
            title: m.title
        }
        }">
        {{m.title}}
    </router-link>
   ```

   2. 接收参数
   ```javascript
    $router.query.xxx
   ```
5. 命名路由
   1. 方便跳转
   2. 如何使用
   ```javascript
    {
        path:'demo',
        component: Demo,
        children: [
            {
                path:'test',
                'component': Test,
                'name': 'test1'
            }
        ]
    }
   ```
    3. 简化跳转
   ```javascript
    <!-- 完整写法 -->
    <router-link to="/demo/test">news</router-link>
    <!-- 简化写法1 -->
    <router-link :to="{name:'test1'}">news</router-link>
    简化写法2
    <router-link :to="{name:'test1', query:{id:66, title:'hello'}}">news</router-link>

   ```
6. params参数
   1. 配置路由声明
   ```javascript
    routes:[
        {
            path:'/about',
            component:About,
            children:[
                {
                    name:'xiangqing',
                    path: 'detail2/:id/:title',
                    component:Detail2
                }
            ]
        }
    ]
   ```
   2. 传递参数
   ```javascript
    <!-- 正常写法 -->
    <router-link to="/about/detail2/123/aaa1">展示</router-link>
    <!-- 配置项写法 -->
    <router-link :to="{
      // 使用params 这边必须使用name 不能用path
      name: 'xiangqing',
      params: {
        id: 111,
        title: 'aaa'
      }
    }">展示</router-link>
   ```
    3. 接受参数
   ```javascript
    $route.params.id
   ```
7. 路由的props配置
   作用：让路由组件更加方便的接收到参数
   ```javascript
   {
        path:'detail',
        component:Detail,
        //props的第一种写法 值为对象，该对象中的所有kv都会以props的形式传给Detail组件
        // props:{a:1,b:2}
        //props的第二种写法 值为bool值， 若bool值为真就会把该路由组件收到的所有params参数以props的形式传给Detail组件
        // props:true,
        //props的第三种写法，值为函数，函数的返回值会以kv的形式传递给Detail组件
        props($route){
            return {id:$route.query.id, title:$route.query.title}
        }
    }
   ```
8. router-link 的replace属性
    1. 作用：控制路由跳转时操作浏览器历史的模式
    2. 浏览器的历史记录有两种写入方式：分别为push 和replace，push时追加历史记录，replace是替换当前记录，路由跳转的时候默认是push
    3. 如何开启replace模式：<router-link replace></router-link>