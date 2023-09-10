<script setup lang="ts">
const ready = ref(false);
const mouse: Ref<null | HTMLElement>= ref(null);
const pressed = ref(false);

function mouseMoveHandler(e: MouseEvent) {
  if (mouse.value == null)
    return;

  ready.value = true;

  moveMouse(e.pageX, e.pageY);
}

function moveMouse(x: number, y: number) {
  mouse.value.style.top = `calc(${y}px - 1rem)`;
  mouse.value.style.left = `calc(${x}px - 1rem)`;
}

function mouseClickHandler(e: MouseEvent) {
  if (e.button == 0 || e.button == 2)  {
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
})

onUnmounted(() => {
  document.removeEventListener("mousemove", mouseMoveHandler);
  document.removeEventListener("click", mouseClickHandler);
  document.removeEventListener("contextmenu", mouseClickHandler);
})
</script>

<template>
  <span v-show="ready" ref="mouse" :class="`absolute bg-white p-[1rem] rounded-full mix-blend-difference pointer-events-none z-[100000] shadow shadow-cod-gray-800 ${pressed ? 'animate-click' : ''}`"></span>
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
