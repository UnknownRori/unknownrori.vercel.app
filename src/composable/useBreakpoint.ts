import { ref, onMounted, onUnmounted } from 'vue';

export function useBreakpoint() {
  const isMobile = ref(false);

  const mobileQuery = window.matchMedia('(max-width: 720px)');

  const update = (event: MediaQueryListEvent | MediaQueryList) => {
    isMobile.value = event.matches;
  };

  onMounted(() => {
    update(mobileQuery);
    mobileQuery.addEventListener('change', update);
  });

  onUnmounted(() => {
    mobileQuery.removeEventListener('change', update);
  });

  return { isMobile };
}
