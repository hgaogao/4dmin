import PerfectScrollbar from 'perfect-scrollbar'
import { nextTick, onMounted, onUnmounted, ref } from 'vue'

export const useScrollBar = () => {
  const scrollContainer = ref<HTMLElement>()
  let ps: any = null
  onMounted(() => {
    nextTick(() => {
      if (scrollContainer.value)
        ps = new PerfectScrollbar(scrollContainer.value)
    })
  })
  const resize = () => {
    ps && ps.update()
  }
  window.addEventListener('resize', resize)

  onUnmounted(() => {
    ps.destroy()
    ps = null
    window.removeEventListener('resize', resize)
  })
  return {
    scrollContainer,
  }
}
