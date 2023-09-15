<script setup lang="ts">
const isDummyLoadingDone = ref(false);
</script>

<template>
  <LoadingScreenVue
    @done="isDummyLoadingDone = true"
    :show="!isDummyLoadingDone"
  />

  <Transition>
    <NuxtLayout name="default-layout">
      <main v-show="isDummyLoadingDone" class="h-full">
          <NuxtPage />
      </main>
    </NuxtLayout>
  </Transition>
</template>
