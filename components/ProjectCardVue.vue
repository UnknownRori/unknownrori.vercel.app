<script setup lang="ts">
import Project from "~/types/project";

defineProps<{
  project: Project;
}>();

const imagePreviewOpen = ref(false);
</script>

<template>
  <CardVue class="divide-2 flex w-full flex-col gap-1 rounded bg-opacity-60">

    <PreviewImageVue
      :src="$props.project?.img_url"
      :is-open="imagePreviewOpen"
      @close="imagePreviewOpen = false"
      @click-outside="imagePreviewOpen = false"
    />

    <header>
      <button @click="imagePreviewOpen = true">
        <NuxtImg
          :src="$props.project?.img_url"
          sizes="sm:100vw md:50vw lg:400px"
          format="webp"
          placeholder
        />
      </button>
      <div class="flex items-center gap-1 p-2">
        <h1 class="px-4 text-xl font-bold tracking-wide">
          {{ $props.project?.title }}
        </h1>
        <a
          v-if="$props.project?.source_url"
          :href="$props.project?.source_url"
          target="_blank"
          class="rounded"
        >
          <NuxtImg src="/social-icon/github.webp" class="w-6" placeholder />
        </a>
        <a
          v-if="$props.project?.deployment_url"
          :href="$props.project?.deployment_url"
          target="_blank"
          class="rounded"
        >
          <LinkIcon class="w-6" :font-controlled="false" filled />
        </a>
      </div>
    </header>
    <main
      class="mx-4 mb-4 flex h-full flex-col justify-between gap-2 border-t-2 border-gray-700"
    >
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
