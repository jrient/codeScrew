<template>
  <div>
    <h2>About 的内容</h2>
    <!-- 正常写法 -->
    <router-link to="/about/detail2/123/aaa1">-></router-link>
    <!-- 配置项写法 -->
    <router-link :to="{
      // 使用params 这边必须使用name 不能用path
      name: 'xiangqing',
      params: {
        id: 111,
        title: 'aaa'
      }
    }">-></router-link>


    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'About',

    //通过路由规则，进组该组件时被调用
    beforeRouteEnter (to, from, next) {
      // ...
    },
    //通过路由规则，离开该组件时被调用
    beforeRouteLeave (to, from, next) {
      // ...
    }
}
</script>

<style>

</style>