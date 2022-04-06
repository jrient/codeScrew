<template>
  <div>
      <ul>
          <li v-for="m in messageList" :key="m.id">
              <!-- 传统传参写法 -->
              <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link> -->
              <!-- 对象写法 -->
              <router-link :to="{
                  path:'/home/message/detail',
                  query:{
                      id: m.id,
                      title: m.title
                  }
                  }">
                  {{m.title}}
              </router-link>
              <button @click="pushShow(m)">push查看</button>
              <button @click="replaceShow(m)">replace查看</button>
          </li>
      </ul>
      <hr>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'Message',
    data(){
        return {
            messageList:[
                {id:'001', title:'消息001'},
                {id:'002', title:'消息002'},
                {id:'003', title:'消息003'},
            ]
        }
    },
    methods:{
        pushShow(m){
            this.$router.push({
                path:'/home/message/detail',
                query:{
                    id: m.id,
                    title: m.title
                }
            })
        },
        replaceShow(m){
            this.$router.replace({
                path:'/home/message/detail',
                query:{
                    id: m.id,
                    title: m.title
                }
            })
        }
    }
}
</script>

<style>

</style>