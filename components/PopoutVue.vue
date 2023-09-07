<script setup lang="ts">
defineProps<{
  isOpen: boolean;
}>();

defineEmits<{
  (e: "click-outside"): void;
}>();
</script>

<template>
  <Teleport to="body">
    <Transition>
      <div
        v-if="isOpen"
        aria-label="Modal Wrapper"
        class="fixed flex justify-center items-center w-screen h-screen text-white z-30"
      >
        <div
          @click="$emit('click-outside')"
          class="absolute w-full h-full top-0 left-0 bg-slate-950 bg-opacity-40 z-20"
        ></div>
        <div class="z-30">
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
