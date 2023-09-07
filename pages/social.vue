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
          class="group relative bg-cod-gray-900 bg-opacity-50 px-4 py-1 rounded-t-md"
        >
          <div
            class="absolute top-0 left-0 bg-cod-gray-800 w-0 h-full group-hover:w-full duration-500 transition-all rounded-t-md"
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
      <section class="flex justify-center gap-4 flex-wrap">
        <IconSocialVue
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
