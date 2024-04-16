<script setup lang="ts">
import { useToast } from "vue-toast-notification";
import LinkIcon from "~/assets/icon/LinkOpen.svg";

import type Project from "~/types/project";

defineProps<{
  project: Project;
}>();

const imagePreviewOpen = ref(false);
const previewFrameOpen = ref(false);

if (process.client) {
  watch(previewFrameOpen, (newVal) => {
    if (newVal == true) {
      useToast().warning("If it's slow click 'Open new tab'");
    }
  });
}
</script>

<template>
  <CardVue class="divide-2 flex w-full flex-col gap-1 rounded bg-opacity-60">
    <PreviewImageVue :src="$props.project?.img_url" :is-open="imagePreviewOpen" @close="imagePreviewOpen = false"
      @click-outside="imagePreviewOpen = false" />

    <IFrameWindowVue v-if="$props.project?.deployment_url" :src="$props.project?.deployment_url"
      :is-open="previewFrameOpen" @close="previewFrameOpen = false" />

    <header class="w-full">
      <button class="w-full" @click="imagePreviewOpen = true">
        <NuxtImg :src="$props.project?.img_url" class="h-[200px] w-full rounded object-cover"
          sizes="sm:100vw md:50vw lg:400px" format="webp" placeholder />
      </button>
      <div class="flex items-center gap-1 p-2">
        <h1 class="px-4 text-xl font-bold tracking-wide">
          {{ $props.project?.title }}
        </h1>
        <a v-if="$props.project?.source_url" :href="$props.project?.source_url" target="_blank" class="rounded">
          <NuxtImg src="/social-icon/github.webp" class="w-6" placeholder />
        </a>

        <button v-if="$props.project?.deployment_url" class="rounded" @click="previewFrameOpen = true">
          <LinkIcon class="w-6" :font-controlled="false" filled />
        </button>
      </div>
    </header>
    <main class="mx-4 mb-4 flex h-full flex-col justify-between gap-2 border-t-2 border-gray-700">
      <p>
        {{ $props.project?.description }}
      </p>

      <ul class="flex flex-wrap gap-2">
        <li v-for="(tag, idx) in project.tags.split(',')" :key="idx">
          <TagVue :text="tag" />
        </li>
      </ul>
    </main>
  </CardVue>
</template>
