<template>
    <li>
        <label>
            <input type="checkbox" name="" 
            :checked="propData.status" 
            @click="checkItem(propData.id)"
            >
            <span v-show="!propData.isEdit">{{propData.title}}</span>
            <input  type="text" name="" id=""
            v-show="propData.isEdit"
            :value="propData.title"
            @blur="blurItem(propData,$event)"
            ref="inputTitle"
            >
        </label>
        <button class="btn btn-danger" @click="removeItem(propData.id)">删除</button>
        <button v-show="!propData.isEdit" class="btn btn-edit" @click="editItem(propData)">编辑</button>
    </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'Item',
    data:function(){
        return {
            
        }
    },
    props:['propData'],
    methods:{
        checkItem(id){
            this.$bus.$emit('checkItem', id)
        },
        removeItem(id){
            if(confirm('确定删除吗')) {
                this.$bus.$emit('removeData', id)
            }
        },
        editItem(data){
            //如果todo身上没 有isEdit则追加，
            if (data.hasOwnProperty('isEdit')) {
                data.isEdit = true
            } else {
                this.$set(data, 'isEdit', true)
            }
            console.log(data.isEdit)
            console.log(data)
            
            //nextTick 会在dom节点更新之后再执行
            this.$nextTick(function(){
                this.$refs.inputTitle.focus()
            })
        },
        blurItem(data,e){
            data.isEdit = false
            if (!e.target.value.trim()) return alert('输入不能为空')
            pubsub.publish('updateItem',{id:data.id,title:e.target.value})
        }
    }
}
</script>

<style scoped>
    li {
        list-style:none;
        height: 36px;
        line-height: 36px;
        padding:0 5px;
        border-bottom: 1px solid #ddd;
    }
    li:hover {
        background-color: gray;
    }
    li:hover button {
        display: block;
    }
    li label {
        float: left;
        cursor: pointer;
    }
    li label li input {
        vertical-align: middle;
        margin-left: 6px;
        position:relative;
        top:-1px;
    }
    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }
    li:before {
        content:initial
    }
    li:last-child {
        border-bottom: none;
    }
</style>