<script setup lang="ts">
import SettingsIcon from "~/assets/icon/Settings.svg";
import CloseIcon from "~/assets/icon/Close.svg";
import InfoIcon from "~/assets/icon/Info.svg";

const isOpen = ref(false);
</script>

<template>
  <button
    class="items-center gap-2 xl:motion-safe:hover:animate-spin h-8 flex justify-center"
    @click="isOpen = true"
  >
    <SettingsIcon class="w-8 h-8 m-0 p-0" :font-controlled="false" filled />
    <span class="sm:block xl:hidden">Preferences</span>
  </button>

  <PopoutVue :is-open="isOpen">
    <CardVue
      aria-label="Modal"
      class="relative min-w-[42vw] max-w-[42vw] flex flex-col gap-2 p-4"
    >
      <header class="relative">
        <h1 class="text-center font-bold text-2xl drop-shadow-lg antialiased">
          Preferences
        </h1>

        <button @click="isOpen = false">
          <CloseIcon
            class="absolute h-8 w-8 right-0 top-0 text-cod-gray-800 hover:text-white duration-300"
            :font-controlled="false"
            filled
          />
        </button>
      </header>
      <main>
        <form action="" class="flex flex-col gap-4">
          <div class="flex flex-col gap-2 w-full">
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
              class="bg-cod-gray-800 bg-opacity-80 rounded p-2 shadow"
            >
              <option value="Web">Web</option>
              <option value="Terminal" disabled>Terminal</option>
            </select>
          </div>

          <div class="flex flex-col gap-2 w-full">
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
              class="bg-cod-gray-800 bg-opacity-80 rounded p-2 shadow"
            >
              <option value="dark-default">Dark Default</option>
              <option value="light-default" disabled>Light Default</option>
              <option value="monokai" disabled>Monokai</option>
            </select>
          </div>

          <div class="flex justify-end">
            <button class="bg-green-600 rounded py-2 px-4">Save</button>
          </div>
        </form>
      </main>
    </CardVue>
  </PopoutVue>
</template>
