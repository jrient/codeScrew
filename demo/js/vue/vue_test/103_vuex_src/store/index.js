
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'

Vue.use(Vuex)

// 准备actions - 相应组件里的动作
const actions = {
    increment(context, value){
        context.commit('INCREMENT', value)
    },
    incrementOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('INCREMENT', value)
        }
    },
    incrementWait(context, value) {
        setTimeout(()=>{
            context.commit('INCREMENT', value)
        }, 1000)
    }
}

// 准备 Mutations - 用于操作数据(state)
const mutations = {
    INCREMENT(state, value){
        state.sum += value
    },
    DECREMENT(state, value) {
        state.sum -= value
    },
    ADD_PERSON(state, value) {
        state.personList.unshift(value)
    }
}

// 准备 state - 存储数据
const state = {
    sum : 0,
    school: 'a',
    subject: 'b',
    personList:[
        {'id':'001','name':'张三'}
    ]
}

// 准备getters -- 用于将state中的数据进行数据加工 类似于computed
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}

//创建store实例 并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
