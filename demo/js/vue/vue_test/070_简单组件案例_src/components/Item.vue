<template>
    <li>
        <label>
            <input type="checkbox" name="" id="" v-model="propData.status">
            <span>{{propData.title}}</span>
        </label>
        <button class="btn btn-danger" @click="removeItem(propData.id)">删除</button>
    </li>
</template>

<script>
export default {
    name:'Item',
    data:function(){
        return {
            
        }
    },
    props:['propData','removeData'],
    methods:{
        removeItem(id){
            if(confirm('确定删除吗')) {
                this.removeData(id)
            }
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