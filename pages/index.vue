<script setup lang="ts">
import BuildingIcon from "~/assets/icon/Building.svg";
import LocationIcon from "~/assets/icon/Location.svg";
import ClockIcon from "~/assets/icon/Clock.svg";
import ChatIcon from "~/assets/icon/Chat.svg";

const customSeo = generateSeoMeta({ title: "UnknownRori - Home" });
useSeoMeta(customSeo as any);

const clock = useRealtimeClock();
const experienceYear = 4; // TODO : Make this dynamic cuz I'm lazy to update something stupid
</script>

<template>
  <div class="flex flex-row gap-4 m-8">
    <section>
      <CardVue
        class="flex flex-col justify-center font-light w-[18vw] bg-opacity-50"
      >
        <!-- TODO : Change color -->
        <span
          class="bg-cod-gray-900 hover:bg-cod-gray-700 bg-opacity-50 duration-500 transition-colors px-4 py-1 rounded-t-md"
          >Profile</span
        >
        <div class="flex flex-col gap-2 p-4">
          <figure class="flex flex-col items-center">
            <img
              src="~/assets/image/UnknownRori.webp"
              alt="UnknownRori"
              class="w-28 h-28 object-cover rounded-full"
            />
            <h1 class="text-2xl antialiased font-medium tracking-wide">
              UnknownRori
            </h1>
            <h3 class="text-sm tracking-tight">@UnknownRori / Akbar</h3>
          </figure>
          <div>
            <!-- TODO : Maybe Refactor this into seperate components -->
            <span class="flex items-center gap-1">
              <BuildingIcon
                class="h-4 w-4 text-white"
                :fontController="false"
                filled
              />
              Amikom Surakarta
            </span>
            <span class="flex items-center gap-1">
              <LocationIcon
                class="h-4 w-4 text-white"
                :fontController="false"
                filled
              />
              Indonesia
            </span>
            <span class="flex items-center gap-1">
              <ClockIcon
                class="h-4 w-4 text-white"
                :fontController="false"
                filled
              />
              {{ clock }}
            </span>
            <span class="flex items-center gap-1">
              <!-- TODO : Maybe switch to flags instead of name -->
              <ChatIcon
                class="h-4 w-4 text-white"
                :fontController="false"
                filled
              />
              English, Indonesian
            </span>
          </div>
        </div>
      </CardVue>
    </section>

    <section>
      <CardVue class="flex flex-col gap-2 bg-opacity-50">
        <span
          class="bg-cod-gray-900 hover:bg-cod-gray-700 bg-opacity-50 duration-300 transition-colors px-4 py-1 rounded-t-md"
          >About</span
        >
        <main class="flex flex-col gap-4 p-4 tracking-tight">
          <p class="text-justify">
            I'm Akbar Hendra Jaya also known as UnknownRori a second year
            college student, I focus on Fullstack web developer, I enjoy making
            Web Application and playing video game, I've been honing skill for
            {{ experienceYear }}-years, I'm interested in Web Development,
            System Programming, Machine Learning.
          </p>
          <p>
            I will share some of my thought, work, and favorite pieces on this
            site, you will also find resume and link to my social media network
          </p>
        </main>
      </CardVue>
    </section>
  </div>
</template>
