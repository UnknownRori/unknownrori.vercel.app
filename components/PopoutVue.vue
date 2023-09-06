<script setup lang="ts">
defineProps<{
  isOpen: boolean;
}>();
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      aria-label="Modal Wrapper"
      class="fixed flex justify-center items-center w-screen h-screen text-white bg-slate-950 bg-opacity-40"
    >
      <slot />
    </div>
  </Teleport>
</template>
