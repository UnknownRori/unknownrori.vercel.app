<script setup lang="ts">
const isOpen = ref(false);
</script>

<template>
  <button class="motion-safe:hover:animate-spin" @click="isOpen = true">
    <svg
      class="h-8 w-8 text-white"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      />
    </svg>
  </button>

  <Teleport to="body">
    <div
      v-if="isOpen"
      aria-label="Modal Wrapper"
      class="fixed flex justify-center items-center w-screen h-screen text-white bg-slate-950 bg-opacity-40"
    >
      <CardVue
        aria-label="Modal"
        class="relative min-w-[42vw] max-w-[42vw] flex flex-col gap-2 p-4"
      >
        <header class="relative">
          <h1 class="text-center font-bold text-2xl drop-shadow-lg antialiased">
            Preferences
          </h1>

          <button @click="isOpen = false">
            <svg
              class="absolute h-8 w-8 text-white right-0 top-0"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </header>
        <main>
          <form action="" class="flex flex-col gap-4">
            <div class="flex flex-col gap-2 w-full">
              <label for="display-type" class="flex gap-1">
                Display type
                <svg
                  class="h-4 w-4 text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="12" r="9" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                  <polyline points="11 12 12 12 12 16 13 16" />
                </svg>
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
                <svg
                  class="h-4 w-4 text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="12" r="9" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                  <polyline points="11 12 12 12 12 16 13 16" />
                </svg>
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
    </div>
  </Teleport>
</template>
