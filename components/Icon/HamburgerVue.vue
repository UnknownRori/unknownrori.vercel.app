<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean;
}>();

const emits = defineEmits<{
  (e: "click"): void;
}>();

const state = ref(false);
const style = ref("");

watch(
  () => props.isOpen,
  () => {
    style.value = props.isOpen ? "animate-hamburger-block-open" : "";
  },
);
</script>

<template>
  <button @click="$emit('click')" class="flex flex-col gap-[5px]">
    <span
      :class="`w-10 rounded-full bg-white py-[3px] duration-500 ${style}`"
    ></span>
    <span
      :class="`w-10 rounded-full bg-white py-[3px] duration-500 ${style}`"
    ></span>
    <span
      :class="`w-10 rounded-full bg-white py-[3px] duration-500 ${style}`"
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
