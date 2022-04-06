import {reactive, onMounted, onUnmounted} from 'vue'
export default function (){
    // 获取鼠标当前坐标点
    let data = reactive({
        x : 0,
        y: 0
    })
    
    function savePoint(event) {
        data.x = event.pageX
        data.y = event.pageY
    }
  
    onMounted(() => {
        window.addEventListener('click', savePoint)
    })
    
    onUnmounted(() => {
        window.removeEventListener('click', savePoint)
    })
    return data
}