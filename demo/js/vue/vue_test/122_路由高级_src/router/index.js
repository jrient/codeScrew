// 创建应用路由
import VueRouter from "vue-router"

import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
import Detail2 from '../pages/Detail2'

// 创建路由
export default new VueRouter({
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
                    component: Message,
                    children:[
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
                    ]
                }
            ]
        }
    ]
})
