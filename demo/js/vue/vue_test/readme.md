# 笔记1

### 基础

用引入的方式 引入vue.js `<script src="/js/vue.js"></script>`
Vue全局配置 Vue.config.xxx=xxx
创建vue对象
```
new Vue({
    el: '#test', //绑定id="test"的容器
    data: {
        name:'xxx'
    }
})
```

插值语法 {{name}} 可以放表达式
指令语法 v-bind:url="youUrl"  简写 :url="youUrl" 用于绑定属性和数值

### 指令

- v-bind 单项绑定 数据只能从data流向页面
  普通写法v-bind:type="xxx"   简写 :type="xxx"
- v-model 双向绑定 v-model 只能应用在表单类元素，存在value值
  普通写法v-model:value="xxx" 简写 v-model="xxx"


### 属性

el:"#root" 可外部指派
var vm = new Vue({}); vm.$mount('#root');

computed 计算属性
1.定义： 要用的属性不存在，是通过已有的属性计算得来
2.原理： 底层借助了Object.defineproperty方法提供的getter和setter
3.get函数在： 1.第一次被调用的时候执行一次；2.依赖的数据发生改变调用
4.优势：computed与methods相比，内部有缓存机制，效率更高，调试器可以显示其值，调试方便
5.如果计算属性要被修改，必须声明set函数去响应修改，且set中要将依赖数据一并修改

watch 监视属性
当属性变化时，触发监视属性
配置：
  immediate:true,//初始化的时候调用一次
  deep:true,//监视多级结构中所有属性的变化
watch默认不检测多层内部中的改变，使用deep配置项可以进行深度监视

computed 和 watch区别:
computed能完成的功能,watch都能完成；反之则不行

所有被Vue管理的函数，最好写成普通函数，这样this才能指向vm或组件实例对象
所有不被vue管理的函数(定时器的回调函数,ajax的回调函数,Promise的回调函数),最好写成箭头函数，这样this才能指向vm或组件实例对象

条件渲染
v-show="true"  判断是否展示，display:none
v-if="true" 判断是否进行渲染，如果时false则不进行渲染元素
<div v-if="a==1">1</div>
<div v-else-if="a==2">2</div>
<div v-else>3</div>
命令条件组之间不允许打断
<template v-if="a==1"></template> template不被实际渲染，template包裹的内容直接展示

react/vue中的key的作用
1. 虚拟DOM中key的作用
   key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据‘新数据’生成‘新的虚拟DOM’
   随后Vue进行‘新虚拟DOM’与‘旧虚拟DOM’的差异比较
2. 对比规则
  - 旧虚拟DOM找到了与新虚拟DOM相同的key：
      若虚拟DOM中的内容没变，直接生成之前的真实DOM
      若虚拟DOM中的内容变了，则生成新的真实DOM，随后替换掉页面中之前的真实DOM
  - 旧虚拟DOM中未找到与新虚拟DOM相同的key
      创建新的真实DOM，随后渲染页面
3. 用index作为key可能会引发的问题：
   1、 若数据进行 逆向添加、逆序删除等破坏顺序操作，会产生没必要的真实DOM更新 => 页面效果没问题但是效率低
   2、 如果结构中还包含输入类DOM => 界面会产生问题
4. 开发中如何选择key
   1、 最好使用每条数据的唯一标识作为key，比如id等
   2、 如果不存在对数据的逆向添加、逆序删除等破坏顺序操作，仅用于渲染不作过多的操作使用，可以使用index作为key

vue中对象通过Vue自动生成的set方法触发模板渲染
vue中数组只有在调用以下数组操作方法是才会触发模板渲染：push、pop、shift、unshift、splice、sort、reverse


#### 收集表单数据
1. input:type=text,v-model收集的是value值
2. input:type=radio,v-model收集的是value值，需要在标签上声明
3. input:type=checkbox：
    如果没有配置value，则收集checked属性值，结果为true/false
    如果配置了value：
      v-model中初始值是非数组，收集checked
      v-model中初始值是数组，收集value组成的数组
4. v-model的三个修饰符：
   - lazy: 失去焦点再收集数据
   - number: 输入字符串转换为数字 和input:type=number 一起使用效果最佳
   - trim: 过滤首尾字符串

#### 过滤器
过滤器是对要显示的数据进行特定格式化后显示
语法：
  1. 注册过滤器：Vue.filter(name,callback),  new Vue{filter:{}}
  2. 使用过滤器 {{x | 过滤器name}} 、 v-bind:xxx="xx | 过滤器name"
备注
  1. 过滤器也可以接受额外参数、多个过滤器可以串联
  2. 并没有改变原本的数据，产生新的数据

#### 常用内置指令汇总
  v-bind: 单向绑定;简写 :xxx
  v-model: 双向绑定; 简写v-model="xxx"
  v-for: 遍历数组/对象/字符串
  v-on: 绑定事件监听，可以简写为@
  v-if/v-else: 条件渲染，动态控制节点是否存在
  v-show: 条件显示，控制节点是否display:none
  v-text: 类似于插值语法{{xxx}}  ,v-text会替换掉节点中的内容 ,不会解析html标签
  v-html: 可以解析html标签
  v-cloak:本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删除v-cloak属性。
                  使用css配合v-cloak可以解决网速慢时显示出{{xx}}的问题 
  v-once:在初次动态渲染后，就视为静态内容了，以后数据的改变不会引起v-once所在结构的更新
  v-pre: 忽略vue编译

#### 自定义指令总结
- 语法
  1. 局部指令: new Vue({directives:{指令名:配置对象}}) 或者  new Vue({directives:{指令名:回调函数}})
  2. 全局指令：Vue.directive(指令名,配置对象) 或者 Vue.directive(指令名,回调函数)
- 配置对象中常用的三个回调
  1. bind: 指令与元素成功绑定时回调
  2. inserted: 指令所在元素被插入页面中时调用
  3. update:指令所在模板结构被重新解析时调用
  4. 使用回调函数时，相当于定义了bind和update
- 其他
  1. 指令定义时不加v-,但是使用时要加v-
  2. 指令名如果时多个单词，要使用kebab-case命名方式，不要用camelCase命名，指令名使用单引号包裹

#### vue的生命周期
分为4个阶段： create mount update destroy
有8个钩子: 
beforeCreate:此时，无法通过vm访问到data中的数据、methods中的方法
created:此时，可以通过vm访问到data中的数据、methods中的方法
beforeMount:此时，页面呈现的时未经Vue编译的DOM,所有对DOM的操作都不生效
mounted:此时，页面上呈现的是经过编译的DOM，对DOM的操作均有效。至此初始化过程结束，一般在此进行：开启定时器、发送网络请求、订阅消息、绑定自定义事件、等初始化操作
beforeUpdate:此时，数据是新的，但是页面是旧的，即：页面尚未和数据保持同步
updated:此时，数据时新的，页面也是新的，即：页面和数据保持同步
beforeDestroy:此时，vm中所有的:data/methods/指令等等，都处于可用状态，马上要执行销毁过程
destroyed:destroyed


### 组件

#### 组件定义
1. 定义组件：
const vc = Vue.extend(options) 可简写为 const vc = options；options是组件的配置对象，和vm的配置对象基本一致，但是要求data以函数的形式来声明
2. 声明组件
vm = new Vue({components:{vcname:vc}}) 其中vcname是声明时使用的别名，vc是定义的组件或者配置对象（后面vue会自动帮其创建组件实例VueComponent）
3. 使用组件
<vcname></vcname>   或者 <vcname /> ;标签式的写法可以重复使用，但是自闭和的写法多次使用只会展示一次

#### 关于VueComponent
1. 组件的本质是一个名为VueComponent的构造函数，是由Vue.extend自动生成的
2. 当我们在页面上添加<vcname></vcname>标签的时候，Vue会解析并创建vc组件实例对象
3. 每次Vue.extend返回的都是一个全新的VueComponent
4. 在组件配置中，this是VueComponent实例对象

## vue常用ui组件库

### 移动端

1. vant
2. cube ui
3. mint ui

### pc端
1. element ui
2. iview ui