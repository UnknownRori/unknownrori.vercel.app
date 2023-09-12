<script setup lang="ts">
import InfoIcon from "~/assets/icon/Info.svg";

// TODO : Make this only appear once in every visit
const underConstructionWarning = ref(true);
const isDummyLoadingDone = ref(false);
</script>

<template>
  <LoadingScreenVue
    @done="isDummyLoadingDone = true"
    :show="!isDummyLoadingDone"
  />

  <PopoutVue
    :is-open="underConstructionWarning"
    @click-outside="underConstructionWarning = false"
  >
    <CardVue
      class="flex flex-col gap-4 p-5 sm:min-w-[80vw] sm:max-w-[80vw] md:min-w-[80vw] md:max-w-[80vw] lg:min-w-[50vw] lg:max-w-[50vw] xl:min-w-[40vw] xl:max-w-[40vw]"
    >
      <header class="flex items-center gap-4">
        <InfoIcon class="h-12 w-12" :font-controlled="false" filled />
        <h1 class="text-2xl">Alpha Version</h1>
      </header>
      <main class="flex flex-col gap-4">
        <p class="text-justify">
          This site is in active development, the layout, responsiveness, mobile
          support, color may changes throughout development cycles. feel free to
          fill an issue if something is really bad happening
        </p>
        <button
          class="rounded bg-green-500 p-2 font-bold"
          @click="underConstructionWarning = false"
        >
          Ok
        </button>
      </main>
    </CardVue>
  </PopoutVue>

  <Transition>
    <NuxtLayout name="default-layout">
      <main v-show="isDummyLoadingDone" class="h-full">
        <NuxtPage />
      </main>
    </NuxtLayout>
  </Transition>
</template>
