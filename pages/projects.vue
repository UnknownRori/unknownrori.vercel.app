<script lang="ts" setup>
import LinkIcon from "~/assets/icon/LinkOpen.svg";

import Project from "~/types/project";

type ProjectResult = {
  code: number;
  data: Project;
};

const { data: projects } = await useFetch<ProjectResult>("/api/v1/projects", {
  lazy: false,
  server: true,
});
</script>

<template>
  <main
    v-if="projects != null"
    class="mx-12 my-8 grid flex-wrap justify-center gap-12 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
  >
    <CardVue
      v-for="(project, idx) in projects.data"
      :key="idx"
      class="divide-2 flex w-full flex-col gap-1 rounded bg-opacity-60"
    >
      <header>
        <NuxtImg
          :src="project?.img_url"
          sizes="sm:100vw md:50vw lg:400px"
          format="webp"
          placeholder
        />
        <div class="flex items-center gap-1 p-2">
          <h1 class="px-4 text-xl font-bold tracking-wide">
            {{ project?.title }}
          </h1>
          <a
            v-if="project?.source_url"
            :href="project?.source_url"
            target="_blank"
            class="rounded"
          >
            <NuxtImg src="/social-icon/github.webp" class="w-6" placeholder />
          </a>
          <a
            v-if="project?.deployment_url"
            :href="project?.deployment_url"
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
          {{ project?.description }}
        </p>

        <ul class="flex flex-wrap gap-2">
          <li v-for="(tag, idx) in project.tags.split(',')" :key="idx">
            <TagVue :text="tag" />
          </li>
        </ul>
      </main>
    </CardVue>
  </main>
</template>
