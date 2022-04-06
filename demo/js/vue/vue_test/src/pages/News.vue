<template>
    <ul>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
    </ul>
</template>

<script>
export default {
    name:'News',
    activated(){
        //组件激活
        console.log('组件被激活')
    },
    deactivated(){
        //组件失活
        console.log('组件失活')
    }
}
</script>

<style>

</style>