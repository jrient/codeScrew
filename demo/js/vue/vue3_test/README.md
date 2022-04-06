# vue3

## 安装

> vue create xxx

## 申明

```javascript
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

## 配置项
所有的data/methods/computed等，都放在setup中
兼容vue2写法，不建议混写
vue2/3配置同时出现，3优先
setup不能是个async函数，因为返回值不再是一个return的对象，而是一个promise

后期也可以定义未async函数，但是必须要配合异步引入和suspence组件

## ref函数
ref函数用来定义一个响应式的数据
语法：
> const xxx = ref(val)
js中操作数据使用 xxx.value
模板中使用 直接 {{xxx}}

接受的数据可以是：基本类型、对象类型
基本类型的数据：响应式依然是靠Object.defineProperty()实现
对象类型的数据：内部求助vue3中的reactive函数

## reactive函数
reactive函数用来定义对象类型的响应式数，基本类型用ref
语法：
> const xxx = reactive({}),返回一个代理对象(proxy对象)
reactive定义的响应式是深层次的
内部基于ES6的Proxy实现，通过代理对象操作源对象内部数据

## 响应式原理

### vue2

#### 原理

- 对象类型：通过 `Object.defineProperty()`对属性的读取、修改进行拦截(数据劫持)
- 数组类型：通过重写更新数组的一系列方法来实现拦截

#### 存在问题
- 新增属性、删除属性，界面不会更新
- 直接通过下标修改数组，界面不会自动更新

### vue3

#### 实现原理
- 通过Proxy(代理)：拦截对象中任意属性的变化，包括读写添加修改
- 通过Reflect(反射)：对被代理对象的属性经行操作
- VUE3实现的简单案例
```javascript
new Proxy(data, {
    //拦截
    get(target, prop) {
        return Reflect.get(target, prop)
    }
    set(target, prop, value){
        return Reflect.set(target, prop, value)
    }
    deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop)
    }
})

```
## setup的注意点

### 执行时间
setup在beforeCreate之前执行一次，this是undefined

### setup的参数

- props: 值为对象，包含：组件外部传递过来，且组件内声明接受了的属性
- context：上下文对象
  - attrs：值为对象，包含：组件外部传递过来，但是没有在props配置中声明的属性，相当于this.$attr
  - slots:收到的插槽内容，相当于this.$slots
  - emit:分发自定义事件的函数，相当于this.$emit

## 计算属性

### computed

与vue2中的配置功能一样，写法:

```javascript
import {computed} from 'vue'
setup(){
    //简写
    let xxx = computed(()=>{
        return xxx
    })
    //完整
    let xxx = computed({
        get(){
            return xxx
        }
        set(value) {
            xxb = value
        }
    })
}
```

## watch

用法：与vue2中一致

问题：
    1. 监视reactive定义的响应式数据时，oldvalue无法获取正确的值
    2. 监视reactive定义的响应式数据时，默认开启深度监视(deep配置失效)；
       监视reatvice定义的响应式数据中的某个属性时，depp有效

```javascript
//监视ref定义的单个响应式数据
watch(sum, (newValue, oldValue) => {
    cosole.log(newValue, oldValue)
}, {immediate:true})

//监视ref定义的多个响应式数据
//newValue和oldValue的值是 [sumNewValue,sumOldValue]格式
watch([sum,msg], (newValue, oldValue) => {
    cosole.log(newValue, oldValue)
}, {immediate:true})

//监视reactive定义的单个响应式数据
//oldvalue无法获取正确的值
//强制开启了deep:true
watch(data, (newValue, oldValue) => {
    cosole.log(newValue, oldValue)
}, {immediate:true})

//监视reactive定义的响应式数据中的某个属性
//如果此属性是一个对象，则需要开启deep才能监视到深度变化，且oldvalue也会存在无法获取正确值的问题
watch(()=>data.name, (newValue, oldValue) => {
    cosole.log(newValue, oldValue)
}, {immediate:true})

//监视reactive定义的响应式数据中的多个属性
watch([()=>data.name,()=>data.age], (newValue, oldValue) => {
    cosole.log(newValue, oldValue)
}, {immediate:true})

```

## watchEffect

功能：不指明监视的属性，回调中用到了哪个属性就监视哪个属性

watchEffect和computed有些类似：
  - computed注重的是计算出来的值，所以必须要写返回值
  - watchEffect注重的是过程，不需要写返回值

```javascript
//watchEffect所指定的回调中的数据只要发生了变化，则直接重新执行回调
watchEffect(()=>{
    const x1 = sum.value
    const x2 = person.age
    const.log('watchEffect执行了')
})

```

## 生命周期钩子

与vue2对比如下

> beforeCreate => setup()
> created      => setup()
> beforeMount  => onMount
> mounted      => onMounted
> beforeUpdate => onUpdate
> updated      => onUpdated
> beforeDistory=> onUnmount
> distoryed    => onUnmounted

## hook

hook的本质是一个函数，把setup函数中使用到的composition api进行封装

类似于vue2中的mixin

优势：复用代码，让setup中的逻辑更清晰

## toRef/toRefs

### toRef

- 作用: 创建一个ref对象，其value只想另一个对象中的某个属性
- 语法： `const name = toRef(person, 'name')`
- 应用: 要将响应式对象中的某个属性单独提供给外部使用
  
### toRefs

- 作用:批量创建多个ref对象
- 语法: `const xxx = toRefs(person)`
- 坑: person中的多级对象不能直接被提供给外部，如：

```javascript
let person = reactive({
    name: 'wang',
    info: {
        addr: {
            city: 'beijin'
        }
    }
})
const toRefsPerson = toRefs(person)
return {
    // city将是一个undefined
    city: toRefsPerson.info.addr.city
}
```

## 其他Composition API

### shallowRef 和 shallowReactive

- 功能：只处理对象最外层的响应式(浅响应式)
- 使用情况：
  - 如果有一个对象数据，数据结构比较深，单变化的只是外城属性
  - 如果有一个对象数据，后续功能不会修改该对象中的属性，直接拿一个新的对象来替换

### readonly 和 shallowReadonly

- 功能：不允许数据修改

### toRaw 和 markRaw

- toRaw
  - 功能：将响应式数据恢复成原始数据
  - toRaw 只能处理reactive生成的响应式对象，无法处理ref生成的对象
  - 用途：用于读取响应式对象对应普通对象，对这个普通对象的所有操作都不会引起页面的更新
- markRow
  - 功能：标记一个对象，使其永远不再成为响应式对象
  - 用途：
    - 有些值不应被设置为响应式，如复杂的第三方库
    - 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能
  
### customRef

- 功能：创建一个自定义的ref，并对其以来项跟踪和更新触发进行显示控制
- 用法：

```javascript
function xxx(value) {
  return customRef((track, trigger) => {
    return {
      get(){
        track()
        return value
      },
      set(newValue){
        value = newValue
        trigger()
      }
    }
  })
}

```

### provide 和 inject

- 用法： 实现祖/后代组件通信
- 祖组件使用provide来提供数据，后代组件通过inject来获取数据
- 用法：
  1. 祖组件中
```javascript
  setup(){
    let person = reactive({name:'aaa'})
    provide('person', person)
  }
```

  2. 后代组件中
```javascript
  setup(){
    const person = inject('person')
  }
```

#### 响应式数据的判断

- isRef: 检查一个值是否是一个ref对象
- isReactive: 检查一个对象是否是一个reactive对象
- isReadonly: 检查一个对象是否是readonly对象
- isProxy: 检查一个对象是否是由reacive或者readonly创建的proxy对象


## 新组件

### fragment

- 在vue2中，组件必须要有一个根标签
- 在vue3中，组件可以没有根标签，内部会自动将多个标签包含在一个fragment虚拟标签中
- 好处：减少标签层级，减少内存占用

### teleport

- 作用：将子组件中的html元素渲染到指定的位置(如body等)
- 用法

```html
    <teleport to="移动的位置">
        <div v-if="isShow">
            <h3>xxx</h3>
        </div>
    </teleport>
```

### suspense

- 作用：等待异步组件渲染一些额外的内容
- 使用：

异步引入组件
```javascript
//静态引入
import Child from './components/Child'
//异步引入
import {defineAsyncComponent} from 'vue'
const Child = defineAsyncComponent(()=>import('./components/Child'))
```

使用suspense包裹组件，并配置好default和fallback

```html
<template>
    <div class="app">
        <h3>我是App组件</h3>
        <Suspence>
            <template v-slot:default>
                <!-- 需要等待加载的组件 -->
                <Clild />
            </template>
            <template v-slot:fallback>
                <!-- 等待时展示的内容 -->
                <h3>加载中....</h3>
            </template>
        </Suspence>
    </div>
</template>
```