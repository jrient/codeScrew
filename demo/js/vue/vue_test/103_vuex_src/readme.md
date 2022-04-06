Vuex

1. 概念
   在Vue中实现集中式状态（数据）管理的一个vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间的通信方式，且适用于任意组件间通信。
2. 环境搭建
   1. 创建文件: src/store/index.js
   ```
    //引入Vue核心库
    import Vue from 'vue'
    //引入Vuex
    import Vuex from 'vuex'
    //应用Vuex插件
    Vue.use(Vuex)

    // 准备actions - 相应组件里的动作
    const actions = {}
    // 准备 Mutaions - 用于操作数据(state)
    const mutations = {}
    // 准备 state - 存储数据
    const state = {}
    //创建store实例 并暴露store
    export default new Vuex.Store({
        actions,
        mutations,
        state
    })
   ```
   2. 在main.js中创建vm时传入store配置项
   ```
    //引入store
    import store from './store'

    ···

    //创建vm
    new Vue({
        el:'#app',
        render: h=> h(App),
        store
    })

   ```

3. 基本使用
   1. 初始化数据、配置actions、配置mutations，操作文件store.js
   
   ```javascript
    //引入Vue核心库
    import Vue from 'vue'
    //引入Vuex
    import Vuex from 'vuex'
    Vue.use(Vuex)
    
    const actions = {
        //相应组件中加的动作
        jia(context, value){
            context.commit('JIA',value)
        },
    }

    const mutations = {
        //执行加
        JIA(state, value) {
            state.sum += value
        }
    }

    //初始化数据
    const state = {
        sum: 0
    }

    // 创建并暴露store
    export default new Vuex.Store({
        actions,
        mutations,
        state,
    })
   ```
   2. 组件中读取vuex中的数据，$store.state.sum
   3. 组件中修改vuex中的数据，$store.dispatch('actions中的方法名', 数据)或者$store.commit('mutations中的方法名',数据)。如果没有其他业务逻辑，组件中也可绕过actions,即不写dispatch,直接commit

4. getters的使用
    1. 概念： 当state中的数据需要经过加工后在使用时，可以使用getters加工
    2. 在store.js中追加getters配置
   
   ``` javascript
    const getters = {
        bigSum(state) {
            return state.sum * 10
        }
    },

    //创建并暴露store
    export default new Vuex.Store({
        ....
        getters
    })
   ```
   3. 组件中读取数据: $store.getters.bigSum
5. 四个map方法的使用
   1. mapState：帮助映射state中的数据为计算属性
   ```javascript
    computed:{
        //对象写法
        ...mapState({sum:'sum',school:'school'})
        //数组写法(要求计算属性名和state数据名一致)
        ...mapState(['sum','school'])
    }
   ```
   2. mapGetters: 帮助映射getters中的数据为计算属性
   写法同mapState

   3. mapActions: 帮助生成与actions对话的方法，即包含：$store.dispatch(xxx)的函数
   写法通mapState，需要在绑定事件时传入参数 sum(xxx)，否则参数就是默认的事件对象

   4. mapMutations:帮助生成与mutations对话的方法，即包含：$store.commmit
   写法通mapState，需要在绑定事件时传入参数 sum(xxx)，否则参数就是默认的事件对象

6. 模块化+命名空间
   1. 目的：让代码更好维护，让多种数据分类更加明确
   2. 修改store/index.js
   
   ```javascript
    const CountAbout = {
        namespace:true, //开启命名空间
        state:{sum:1},
        mutations: {....},
        actions:{....},
        getters:{
            bigSum(state){
                return state.sum = 10
            }
        }
    }

    const personAbout = {
        namespace:true, 
        state:{...},
        mutations:{...},
        actions:{...}
    }

    const store = new Vuex.Store({
        modules:{
            countAb:countAbout,
            personAb:personAbout
        }
    })

   ```
   3. 开启命名空间后，组件中读取state数据
    ```javascript
    //方式1 自己读取
    this.$store.personAb.list
    // 方式2，借助mapState工具
    ...mapState('countAb', ['sum', 'subject'])
    ```
   4. 开启命名空间后，组件中读取getters数据
   ```javascript
   //方式1 自己读取
   this.$store.getters['personAb/firstPersonName']
   // 方式2，借助mapGetters工具
   ...mapGetters('countAb', ['bigSum'])
   ```
   5. 开启命名空间后，组件中调用dispatch
   ```javascript
   //方式1 自己读取
   this.$store.dispatch('personAb/addPerson', person)
   // 方式2，借助mapActions工具
   ...mapActions('countAb', [increment:'jiaOdd'])
   ```
   6. 开启命名空间后，组件中调用commit
   ```javascript
   //方式1 自己读取
   this.$store.commit('personAb/ADD_PERSON', person)
   // 方式2，借助mapMutations工具
   ...mapMutations('countAb', [incrementa, 'JIA'])
   ```