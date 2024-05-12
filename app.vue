<script setup lang="ts">
const isDummyLoadingDone = ref(false);
const route = useRoute();
const isRaw = ref("raw" in route.query && route.query.raw === "true");
const isUwU = ref("uwu" in route.query && route.query.uwu === "true");
</script>

<template>
  <div :class="isUwU ? 'font-[Yuruka]' : ''">
    <LoadingScreenVue v-if="!isRaw" :show="!isDummyLoadingDone" @done="isDummyLoadingDone = true" />

    <Transition v-if="!isRaw">
      <NuxtLayout name="default-layout">
        <main v-show="isDummyLoadingDone" class="h-full">
          <NuxtPage />
        </main>
      </NuxtLayout>
    </Transition>

    <NuxtPage v-if="isRaw" />
  </div>
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
