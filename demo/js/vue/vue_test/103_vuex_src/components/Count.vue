<template>
  <div class="category">
      <!-- <h1>当前求和为：{{$store.state.sum}}</h1>
      <h2>放大10倍后为：{{$store.getters.bigSum}}</h2> -->
      <!-- 使用计算属性简写 -->
      <h1>当前求和为：{{sum}}</h1>
      <h2>放大10倍后为：{{bigSum}}</h2>
      <h2>下方组件中人数为：{{personList.length}}</h2>
      <select name="" id="" v-model.number="n">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <button @click="increment(n)">+</button>
      <button @click="decrement(n)">-</button>
      <button @click="incrementOdd">奇数+</button>
      <button @click="incrementWait">等待+</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    name:'Count',
    data(){
        return{
            n:1,
        }
    },
    computed:{
        // 手写形式
        // sum(){
        //     return $this.$store.state.sum
        // },
        //通过mapState生成计算属性(对象写法)
        // ...mapState({sum:'sum'}),
        //通过mapState生成计算属性(数组写法)
        ...mapState(['sum','personList']),

        // bigSum(){
        //     return this.$store.getters.bigsum
        // }
        ...mapGetters(['bigSum'])
    },
    methods:{
        
        // 手写dispatch
        // increment(){
        //     this.$store.dispatch('increment', this.n)
        // },
        ...mapActions({increment:'increment'}),
        // 手写commit
        // decrement(){
        //     this.$store.commit('DECREMENT', this.n)
        // },
        //通过mapMutations 参数this.n 通过调用decrement(this.n)传递
        ...mapMutations({decrement:'DECREMENT'}),
        incrementOdd(){
            this.$store.dispatch('incrementOdd', this.n)                
        },
        incrementWait(){
            this.$store.dispatch('incrementWait', this.n)
        }
    },
    mounted(){
        
    }
}
</script>

<style>

</style>