import { ref, computed, onMounted, onUnmounted } from 'vue';

export function useDevice() {
  const width = ref(window.innerWidth)

  const onResize = () => { width.value = window.innerWidth }

  onMounted(() => window.addEventListener('resize', onResize))
  onUnmounted(() => window.removeEventListener('resize', onResize))

  const isMobile = computed(() => width.value < 768)

  return { isMobile, width }
}
