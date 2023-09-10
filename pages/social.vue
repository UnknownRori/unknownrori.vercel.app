<script setup lang="ts">
import socialMediaLinks from "~/data/socialMediaLinks";

const meta = generateSeoMeta({ title: "UnknownRori - Social" });
useSeoMeta(meta as any);
</script>

<template>
  <section class="m-8">
    <div class="flex flex-col gap-8">
      <CardVue>
        <div
          class="group relative rounded-t-md bg-cod-gray-900 bg-opacity-50 px-4 py-1"
        >
          <div
            class="absolute left-0 top-0 h-full w-0 rounded-t-md bg-cod-gray-800 transition-all duration-500 group-hover:w-full"
          ></div>
          <span class="relative">Important Notice</span>
        </div>
        <main class="flex flex-col gap-2 p-4">
          <p>
            You can find me on the following social networks, though I'm not
            necessarily very active on all of them.
          </p>
          <p>
            Any account not listed below that uses my name or one of my handles
            may not be me.
            <br />
            <a
              href="https://unknownrori.vercel.app"
              target="_blank"
              class="text-blue-500"
              >unknownrori.vercel.app</a
            >
            and
            <a
              href="https://unknownrori-firebase.web.app"
              target="_blank"
              class="text-blue-500"
              >unknownrori-firebase.web.app</a
            >
            is the only site I use for my personal website.
          </p>
        </main>
      </CardVue>
      <section class="flex flex-wrap justify-center gap-4">
        <LazyIconSocialVue
          v-for="(link, id) in socialMediaLinks"
          :key="id"
          :href="link.href"
          :alt="link.alt"
          :src="link.src"
        />
      </section>
    </div>
  </section>
</template>
