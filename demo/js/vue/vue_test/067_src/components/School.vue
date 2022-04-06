<template>
  <div class="school">
      <h2>{{title}}</h2>
      <h2>号码:{{num}}</h2>
      <h2>学校名称:{{name}}</h2>
      <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
export default {
    name:'school',
    data() {
        return {
            title:'你好',
        }
    },
    //简单接受
    // props:['num','name','address'] 
    //接受类型数据限制
    // props:{
    //     'num':Number,
    //     'name':String,
    //     'address':String
    // },
    //完整形式
    props:{
        name:{
            type:String,    //name的类型是字符串
            required:true   //name是必须传的
        },
        num: {
            type:Number,
            default:99      //不传的时候的默认值
        },
        address:{
            type:String,
            required:true
        }
    }
}
</script>

<style scoped>
.school{
    background-color: gray;
}
</style>