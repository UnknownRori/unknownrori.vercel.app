<script setup lang="ts">
import { ref, watch } from 'vue';
import { cn } from '@/utils';

const props = defineProps<{
  isOpen: boolean;
}>();

defineEmits<{
  (e: "click"): void;
}>();

const style = ref("");

watch(
  () => props.isOpen,
  () => {
    style.value = props.isOpen ? "animate-hamburger-block-open" : "";
  },
);
</script>

<template>
  <button class="group flex flex-col gap-[5px]" @click="$emit('click')">
    <span
      :class="cn('group-hover:bg-white w-6 rounded-md bg-white/20 py-[1.5px] duration-300', style, $props.isOpen ? 'w-10' : '')"></span>
    <span
      :class="cn('group-hover:bg-white w-8 rounded-md bg-white/20 py-[1.5px] duration-300', style, $props.isOpen ? 'w-10' : '')"></span>
    <span
      :class="cn('group-hover:bg-white w-10 rounded-md bg-white/20 py-[1.5px] duration-300', style, $props.isOpen ? 'w-10' : '')"></span>
  </button>
</template>

<style scoped>
.animate-hamburger-block-open:nth-child(1) {
  transform: translateY(8px) rotate(-45deg);
}

.animate-hamburger-block-open:nth-child(2) {
  transform: translateY(-0px) rotate(45deg);
}

.animate-hamburger-block-open:nth-child(3) {
  transform: translateY(-9px) rotate(45deg);
}
</style>
