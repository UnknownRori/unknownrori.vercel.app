<script setup lang="ts">
import moment from "moment";

const customSeo = generateSeoMeta({ title: "UnknownRori - Home" });
useSeoMeta(customSeo as any);

// TODO : Refactor this
const clock = ref(moment().utc().utcOffset(8).format("HH:mm"));
let clockEventId: null | number = null;

onMounted(() => {
  clockEventId = setInterval(() => {
    clock.value = moment().utc().utcOffset(8).format("HH:mm");
  }, 1000) as any as number;
});

onUnmounted(() => {
  clearInterval(clockEventId as number);
});
</script>

<template>
  <div class="flex flex-row gap-4 m-8">
    <section>
      <CardVue class="flex flex-col justify-center font-light w-[18vw]">
        <!-- TODO : Change color -->
        <span
          class="bg-gray-700 hover:bg-purple-800 duration-300 transition-colors px-4 py-1 rounded-t-md"
          >Profile</span
        >
        <div class="flex flex-col gap-2 p-4">
          <figure class="flex flex-col items-center">
            <img
              src="~/assets/image/UnknownRori.webp"
              alt="UnknownRori"
              class="w-28 h-28 object-cover rounded-full"
            />
            <h1 class="text-2xl antialiased font-medium">UnknownRori</h1>
            <h3 class="text-sm">@UnknownRori / Akbar</h3>
          </figure>
          <div>
            <!-- TODO : Maybe Refactor this into seperate components -->
            <span class="flex items-center gap-1">
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
                <line x1="3" y1="21" x2="21" y2="21" />
                <path d="M5 21v-14l8 -4v18" />
                <path d="M19 21v-10l-6 -4" />
                <line x1="9" y1="9" x2="9" y2="9.01" />
                <line x1="9" y1="12" x2="9" y2="12.01" />
                <line x1="9" y1="15" x2="9" y2="15.01" />
                <line x1="9" y1="18" x2="9" y2="18.01" />
              </svg>
              Amikom Surakarta
            </span>
            <span class="flex items-center gap-1">
              <svg
                class="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Indonesia
            </span>
            <span class="flex items-center gap-1">
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
                <polyline points="12 7 12 12 15 15" />
              </svg>
              {{ clock }}
            </span>
            <span class="flex items-center gap-1">
              <!-- TODO : Maybe switch to flags instead of name -->
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
                <path
                  d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"
                />
                <line x1="8" y1="9" x2="16" y2="9" />
                <line x1="8" y1="13" x2="14" y2="13" />
              </svg>
              English, Indonesian
            </span>
          </div>
        </div>
      </CardVue>
    </section>

    <section>
      <CardVue class="flex flex-col gap-2">
        <!-- TODO : Change color -->
        <span
          class="bg-gray-700 hover:bg-purple-800 duration-300 transition-colors px-4 py-1 rounded-t-md"
          >About</span
        >
        <main class="p-4">
          <p>
            I'm Akbar Hendra Jaya also known as UnknownRori a second year
            college student, I focus on Fullstack web developer, I'm interested
            in Web Development, System Programming, Machine Learning.
          </p>
        </main>
      </CardVue>
    </section>
  </div>
</template>
