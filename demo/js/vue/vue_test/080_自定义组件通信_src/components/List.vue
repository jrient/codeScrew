<template>
  <div>
      <ul class="todo-main">
          <Item v-for="doObj in doList" :key="doObj.id" :propData="doObj" :removeData="removeData" />
      </ul>
  </div>
</template>

<script>
import Item from "./Item"
export default {
    name:'List',
    data:function(){
        return {
            
        }
    },
    props:['doList','removeData'],
    components:{Item}
}
</script>

<style scoped>
    .todo-main{
        margin-left:0px;
        border:1px solid #ddd;
        border-radius:2px;
        padding: 0px;
    }
    .todo-empty{
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>