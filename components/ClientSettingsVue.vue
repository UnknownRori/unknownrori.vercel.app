<script setup lang="ts">
import SettingsIcon from "~/assets/icon/Settings.svg";
import CloseIcon from "~/assets/icon/Close.svg";
import InfoIcon from "~/assets/icon/Info.svg";

const isOpen = ref(false);
</script>

<template>
  <button
    class="flex h-8 items-center justify-center gap-2 xl:motion-safe:hover:animate-spin"
    @click="isOpen = true"
  >
    <SettingsIcon class="m-0 h-8 w-8 p-0" :font-controlled="false" filled />
    <span class="sm:block xl:hidden">Preferences</span>
  </button>

  <PopoutVue :is-open="isOpen">
    <CardVue
      aria-label="Modal"
      class="relative flex flex-col gap-2 p-4 sm:min-w-[82vw] xl:min-w-[42vw] xl:max-w-[42vw]"
    >
      <header class="relative">
        <h1 class="text-center text-2xl font-bold antialiased drop-shadow-lg">
          Preferences
        </h1>

        <button @click="isOpen = false" class="absolute right-0 top-0">
          <CloseIcon
            class="h-8 w-8 text-cod-gray-800 duration-300 hover:text-white"
            :font-controlled="false"
            filled
          />
        </button>
      </header>
      <main>
        <form action="" class="flex flex-col gap-4">
          <div class="flex w-full flex-col gap-2">
            <label for="display-type" class="flex gap-1">
              Display type
              <InfoIcon
                class="h-4 w-4 text-white"
                :font-controlled="false"
                filled
              />
            </label>
            <select
              id="display-type"
              name="display-type"
              class="rounded bg-cod-gray-800 bg-opacity-80 p-2 shadow"
            >
              <option value="Web">Web</option>
              <option value="Terminal" disabled>Terminal</option>
            </select>
          </div>

          <div class="flex w-full flex-col gap-2">
            <label for="colorscheme" class="flex gap-1">
              Colorscheme
              <InfoIcon
                class="h-4 w-4 text-white"
                :font-controlled="false"
                filled
              />
            </label>
            <select
              id="colorscheme"
              name="colorscheme"
              class="rounded bg-cod-gray-800 bg-opacity-80 p-2 shadow"
            >
              <option value="dark-default">Dark Default</option>
              <option value="light-default" disabled>Light Default</option>
              <option value="monokai" disabled>Monokai</option>
            </select>
          </div>

          <div class="flex justify-end">
            <button class="rounded bg-green-600 px-4 py-2">Save</button>
          </div>
        </form>
      </main>
    </CardVue>
  </PopoutVue>
</template>
