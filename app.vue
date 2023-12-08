<script setup lang="ts">
const isDummyLoadingDone = ref(false);
</script>

<template>
  <LoadingScreenVue :show="!isDummyLoadingDone" @done="isDummyLoadingDone = true" />

  <Transition>
    <NuxtLayout name="default-layout">
      <main v-show="isDummyLoadingDone" class="h-full">
        <NuxtPage />
      </main>
    </NuxtLayout>
  </Transition>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
