<template>
  <div>
      <div class="todo-container">
          <div class="todo-wrap">
              <Top :receive="receive"/>
              <List :doList="doList" />
              <Bottom :doList="doList" :checkData="checkData" :clearData="clearData"/>
          </div>
      </div>
  </div>
</template>

<script>

    import pubsub from 'pubsub-js'
    import Top from './components/Top'
    import List from './components/List'
    import Bottom from './components/Bottom'
    export default {
        name:'App',
        data() {
            return {
                doList:JSON.parse(localStorage.getItem('doList')) || []
            }
        },
        methods: {
            receive(item){
                this.doList.unshift(item)
            },
            removeData(id){
                this.doList = this.doList.filter(todo=>todo.id !== id)
            },
            checkData(status){
                this.doList.forEach(todo=>todo.status=status)
            },
            checkItem(id){
                this.doList.forEach((todo)=>{
                    if (todo.id == id) todo.status = !todo.status
                })
            },
            clearData(){
                this.doList = this.doList.filter(todo=>!todo.status)
            },
            // _表示占位，因为消息订阅第一个参数是消息名
            updateItem(_,params) {
                this.doList.forEach((todo)=>{
                    if (todo.id == params.id) todo.title = params.title
                })
            }
        },
        watch:{
            doList:{
                //深度监视
                deep:true,
                handler(value){
                    localStorage.setItem('doList', JSON.stringify(value))
                }
            }
        },
        components:{
            Top,
            List,
            Bottom
        },
        mounted(){
            this.$bus.$on('checkItem',this.checkItem)
            this.$bus.$on('removeData',this.removeData)
            this.pubid = pubsub.subscribe('updateItem', this.updateItem)
        },
        beforeDestroy(){
            this.$bus.$off('checkItem')
            this.$bus.$off('removeData')
            pubsub.unsubscribe(this.pubid)
        }
    }
</script>

<style>
    body {
        background: #fff;
    }
    .btn {
        display: inline-block;
        padding:4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }
    .btn-edit{
        color: #fff;
        background-color: #7549da;
        border: 1px solid #712fbd;
    }
    .btn-edit:hover{
        color: #fff;
        background: #712fbd;
    }
    .btn-danger{
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }
    .btn-danger:hover{
        color: #fff;
        background: #bd362f;
    }
    .btn:focus{
        outline: none;
    }
    .todo-container {
        width: 600px;
        margin: 0 auto;
    }
    .todo-container .todo-wrap{
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>