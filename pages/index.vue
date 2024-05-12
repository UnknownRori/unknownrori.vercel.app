<script setup lang="ts">
import BuildingIcon from "~/assets/icon/Building.svg";
import LocationIcon from "~/assets/icon/Location.svg";
import ClockIcon from "~/assets/icon/Clock.svg";
import ChatIcon from "~/assets/icon/Chat.svg";
import LoveIcon from "~/assets/icon/Love.svg";

const customSeo = generateSeoMeta({ title: "UnknownRori - Home" });
useSeoMeta(customSeo as any);

const clock = useRealtimeClock();
const experienceYear = new Date().getUTCFullYear() - 2019;
</script>

<template>
  <div class="m-8 flex gap-4 sm:flex-col xl:flex-row">
    <div
      class="animate-l-border-start border-l-8 border-r-2 border-cod-gray-200 px-[2px] duration-1000 sm:hidden xl:block">
    </div>
    <section>
      <WindowCard title="Profile" class="flex flex-col justify-center font-light sm:w-full xl:w-[24vw]">
        <div class="flex flex-col gap-2 p-4">
          <figure class="flex flex-col items-center">
            <NuxtImg src="/image/UnknownRori.webp" sizes="sm:30vw md:25vw lg:300px"
              class="h-28 w-28 rounded-full object-cover" placeholder />
            <h1 class="text-2xl font-medium tracking-wide antialiased">
              UnknownRori
            </h1>
            <h3 class="text-sm tracking-tight">@UnknownRori / Akbar</h3>
          </figure>
          <div class="bg-gray-700 bg-opacity-25 p-[1px] w-100" aria-label="line"></div>
          <div class="flex flex-col sm:self-center xl:self-start">
            <span class="flex items-center gap-1">
              <BuildingIcon class="h-4 w-4 text-white" :font-controlled="false" filled />
              Amikom Surakarta
            </span>
            <span class="flex items-center gap-1">
              <LocationIcon class="h-4 w-4 text-white" :font-controlled="false" filled />
              Indonesia
            </span>
            <span class="flex items-center gap-1">
              <ClockIcon class="h-4 w-4 text-white" :font-controlled="false" filled />
              {{ clock }}
            </span>
            <span class="flex items-center gap-1">
              <LoveIcon class="h-4 w-4 text-white" :font-controlled="false" filled />
              Coding, Games
            </span>
            <span class="flex items-center gap-1">
              <ChatIcon class="h-4 w-4 text-white" :font-controlled="false" filled />
              English, Indonesian
            </span>
          </div>
        </div>
      </WindowCard>
    </section>

    <section class="flex flex-col gap-4">
      <WindowCard title="About">
        <main class="flex flex-col gap-4 p-4 tracking-tight">
          <p class="text-justify">
            I'm Akbar Hendra Jaya also known as UnknownRori a second year
            college student, I focus on Fullstack web developer, I enjoy making
            Web Application and playing video game, I've been honing my skill
            for
            {{ experienceYear }}-years, I'm interested in Web Development,
            System Programming, Machine Learning.
          </p>
          <p>
            I will share some of my thought, work, and favorite pieces on this
            site, you will also find resume and link to my social media network
          </p>
        </main>
      </WindowCard>

      <WindowCard title="Feed">
        <main class="flex flex-col gap-4 p-4 tracking-tight">
          Currently Not Available
        </main>
      </WindowCard>
    </section>
  </div>
</template>

<style scoped>
.animate-l-border-start {
  animation: height-to-card-profile 1s ease-in-out forwards;
}

@keyframes height-to-card-profile {
  0% {
    height: 0;
  }

  100% {
    height: 22rem;
  }
}
</style>
