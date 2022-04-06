<template>
  <div class="category">
      <h3>{{title}}分类</h3>
      <slot :games="games" :demo="demo">这是一个默认值</slot>
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['title'],
    data(){
        return{
            games:['a','b','c'],
            demo:'a'
        }
    }
}
</script>

<style>

</style>