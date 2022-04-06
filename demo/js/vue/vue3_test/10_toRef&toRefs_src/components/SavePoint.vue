<template>
  <div>
    <h2>当前鼠标坐标为:x:{{data.x}} y:{{data.y}}</h2>
  </div>
</template>

<script>
import usePoint from '../hooks/usePoint.js'
export default {
    name:'SavePoint',
    setup(){
        let data = usePoint()

        return {
            data
        }
    }
}
</script>

<style>

</style>