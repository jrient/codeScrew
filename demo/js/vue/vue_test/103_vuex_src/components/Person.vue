<template>
  <div>
      <h1>当前用户为</h1>
      <h2>count组件求和为:{{$store.state.sum}}</h2>
      <input type="text" placeholder="请输入名字" v-model="name">
      <button @click="add">添加</button>
      <ul>
          <li v-for="p in $store.state.personList" :key="p.id">{{p.name}}</li>
      </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'Person',
    data(){
        return{
            name:''
        }
    },
    methods:{
        add(){
            console.log(this.name)
            const personObj = {id:nanoid(),name:this.name}
            this.$store.commit('ADD_PERSON', personObj)
            this.name = ''
        }
    }
}
</script>

<style>

</style>