<template>
  <div class="todo-header">
      <input type="text" placeholder="请输入任务，按回车确认" v-model="inputText" @keyup.enter="addItem">
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'Top',
    data:function(){
        return {
            inputText: ''
        }
    },
    props:['receive'],
    methods:{
        addItem(){
            if (this.inputText != '') {
                const itemObj= {id:nanoid(), title:this.inputText, status:false}
                this.receive(itemObj)
                this.inputText = ''
            }
        }
    },
}
</script>

<style scoped>
    .todo-header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }

    .todo-headeere input:focus{
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.8);
    }
</style>