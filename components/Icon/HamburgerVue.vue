<script setup lang="ts">
// TODO : Refactor this Hamburger so it's little bit more optimized on using `ref`
const emits = defineEmits<{
  (e: "click"): void;
}>();

const state = ref(false);
const style = ref("");

function clickAction() {
  style.value = state.value == true ? "animate-hamburger-block-open" : "";
  state.value = !state.value;
  emits("click");
}
</script>

<template>
  <button @click="clickAction" class="flex flex-col gap-[5px]">
    <span
      :class="`w-10 py-[3px] duration-500 bg-white rounded-full ${style}`"
    ></span>
    <span
      :class="`w-10 py-[3px] duration-500 bg-white rounded-full ${style}`"
    ></span>
    <span
      :class="`w-10 py-[3px] duration-500 bg-white rounded-full ${style}`"
    ></span>
  </button>
</template>

<style scoped>
.animate-hamburger-block-open:nth-child(1) {
  transform: translateY(12px) rotate(-45deg);
}

.animate-hamburger-block-open:nth-child(2) {
  transform: translateY(1px) rotate(45deg);
}

.animate-hamburger-block-open:nth-child(3) {
  transform: translateY(-9px) rotate(45deg);
}
</style>
