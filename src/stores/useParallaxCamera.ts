import type { Camera2D } from "@/models/Parallax";
import { animate } from "animejs";
import { defineStore } from "pinia";
import { ref } from "vue";

const useParallaxCamera = defineStore('_cam', function() {
  const camera = ref({
    x: 0, y: 0, zoom: 1.,
  });


  function setCamera(newCamera: Camera2D) {
    camera.value = newCamera;
  }

  function animateCamera(newCamera: Camera2D) {
    animate(camera.value, {
      ...camera.value,
      ...newCamera,
      duration: 2000,
    });
  }

  return {
    camera, setCamera, animateCamera,
  }
});
export default useParallaxCamera;
