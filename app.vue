<script setup lang="ts">
import InfoIcon from "~/assets/icon/Info.svg";

// TODO : Make this only appear once in every visit
const underConstructionWarning = ref(true);
const isDummyLoadingDone = ref(false);

</script>

<template>
  <LoadingScreenVue @done="isDummyLoadingDone = true" :show="!isDummyLoadingDone" />

  <PopoutVue
    :is-open="underConstructionWarning"
    @click-outside="underConstructionWarning = false"
  >
    <CardVue
      class="flex flex-col gap-4 p-5 xl:min-w-[40vw] xl:max-w-[40vw] lg:min-w-[50vw] lg:max-w-[50vw] md:min-w-[80vw] md:max-w-[80vw] sm:min-w-[80vw] sm:max-w-[80vw]"
    >
      <header class="flex items-center gap-4">
        <InfoIcon class="w-12 h-12" :font-controlled="false" filled />
        <h1 class="text-2xl">Alpha Version</h1>
      </header>
      <main class="flex flex-col gap-4">
        <p class="text-justify">
          This site is in active development, the layout, responsiveness, mobile
          support, color may changes throughout development cycles. feel free to
          fill an issue if something is really bad happening
        </p>
        <button
          class="bg-green-500 font-bold rounded p-2"
          @click="underConstructionWarning = false"
        >
          Ok
        </button>
      </main>
    </CardVue>
  </PopoutVue>

  <Transition>
    <NuxtLayout v-if="isDummyLoadingDone" name="default-layout">
      <NavigationBarVue />
      <div class="h-8 overflow-hidden mx-10">
        <div
          class="bg-[url(~/assets/icon/Seperator.svg)] bg-repeat-x py-4"
        ></div>
      </div>
      <NuxtLoadingIndicator />

      <main>
        <NuxtPage />
      </main>
    </NuxtLayout>
  </Transition>
</template>
