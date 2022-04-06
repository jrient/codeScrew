<template>
  <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <transition name="hello" appear>
        <h1 v-show="isShow">你好啊！</h1>
      </transition>
  </div>
</template>

<script>
export default {
    name:'Test',
    data(){
        return {
            isShow: true
        }
    }
}
</script>

<style scoped>
    h1 {
        background-color: orange;
    }

    /* 默认.v-enter-active */
    .hello-enter-active{
        animation:demo 1s;
    }
    .hello-leave-active {
        animation:demo 1s reverse;
    }

    @keyframes demo {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0px);
        }
    }
</style>