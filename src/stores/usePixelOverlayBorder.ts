import { defineStore } from "pinia";
import { ref } from "vue";

const usePixelOverlayBoder = defineStore('_pixelBorder', () => {
  const padding = ref('p-2');

  function setPadding(str: string) {
    padding.value = str;
  }

  return {
    padding,
    setPadding,
  }
});

export default usePixelOverlayBoder;
