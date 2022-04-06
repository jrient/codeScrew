<template>
  <div class="todo-footer" v-show="doneCount">
      <label>
          <!-- <input type="checkbox" name="" id="" :checked="doneCount == doneTotal" @click="checkAll"> -->
          <input type="checkbox" v-model="doneAll">
      </label>
      <span>
          <span>已完成{{doneTotal}}</span>/ 全部{{doneCount}}
      </span>
      <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
    name:'Bottom',
    data:function(){
        return {
            // inputText: ''
        }
    },
    computed:{
        doneCount(){
            return this.doList.length
        },
        doneTotal(){
            return this.doList.reduce((pre,current)=>pre + (current.status ? 1 : 0),0)
        },
        doneAll:{
            get(){
                return this.doneCount == this.datadoneTotal
            },
            set(value){
                // this.checkData(value)
                this.$emit('checkData', value)
            }
        }
    },
    methods:{
        checkAll(e){
            // this.checkData(e.target.checked)
            this.$emit('checkData', e.target.checked)
        },
        clearAll(e){
            // this.clearData()
            this.$emit('clearData')
        }
    },
    props:['doList']
}
</script>

<style scoped>
    .todo-footer{
        height: 40px;
        line-height: 40px;
        padding-left:6px;
        margin-top: 5px;
    }
    .todo-footer label{
        display: inline-block;
        margin-right: 20px;
        cursor:pointer;
    }
    .todo-footer label input{
        position: relative;
        top:-1px;
        vertical-align: middle;
        margin-right: 5px;
    }
    .todo-footer button {
        float: right;
        margin-top:5px;
    }
</style>