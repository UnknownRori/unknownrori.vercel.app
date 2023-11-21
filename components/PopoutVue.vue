<script setup lang="ts">
defineProps<{
  isOpen: boolean;
}>();

defineEmits<{
  (e: "click-outside"): void;
}>();
</script>

<template>
  <OverlayVue>
    <div
      v-show="isOpen"
      aria-label="Modal Wrapper"
      class="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center text-white"
    >
      <div
        class="absolute left-0 top-0 z-20 h-full w-full bg-slate-950 bg-opacity-40"
        @click="$emit('click-outside')"
      ></div>
      <div class="z-30">
        <slot />
      </div>
    </div>
  </OverlayVue>
</template>
