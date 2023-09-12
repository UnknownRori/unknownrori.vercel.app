<script setup lang="ts">
const ready = ref(false);
const mouse: Ref<null | HTMLElement> = ref(null);
const pressed = ref(false);

function mouseMoveHandler(e: MouseEvent) {
  if (mouse.value == null) return;

  ready.value = true;

  moveMouse(e.clientX, e.clientY);
}

function moveMouse(x: number, y: number) {
  mouse.value.style.top = `calc(${y}px - 1rem)`;
  mouse.value.style.left = `calc(${x}px - 1rem)`;
}

function mouseClickHandler(e: MouseEvent) {
  if (e.button == 0 || e.button == 2) {
    pressed.value = !pressed.value;
    setTimeout(() => {
      pressed.value = !pressed.value;
    }, 300);
  }
}

onMounted(() => {
  document.addEventListener("mousemove", mouseMoveHandler);
  document.addEventListener("click", mouseClickHandler);
  document.addEventListener("contextmenu", mouseClickHandler);
});

onUnmounted(() => {
  document.removeEventListener("mousemove", mouseMoveHandler);
  document.removeEventListener("click", mouseClickHandler);
  document.removeEventListener("contextmenu", mouseClickHandler);
});
</script>

<template>
  <span
    v-show="ready"
    ref="mouse"
    :class="`pointer-events-none fixed z-[100000] flex items-center justify-center rounded-full p-[0.8rem] mix-blend-difference shadow shadow-cod-gray-800 sm:bg-transparent xl:bg-white ${
      pressed ? 'animate-click' : ''
    }`"
  >
    <span class="rounded-full bg-green-600 p-[0.2rem]"></span>
  </span>
</template>

<style scoped>
.animate-click {
  animation: animate-click 300ms ease-in-out forwards;
}

@keyframes animate-click {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.3);
  }

  100% {
    transform: scale(1);
  }
}
</style>
