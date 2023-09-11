<script lang="ts" setup>
import GithubIcon from "~/assets/social-icon/github.webp";
import LinkIcon from "~/assets/icon/LinkOpen.svg";

import Project from "~/types/project";

type ProjectResult = {
  code: number;
  data: Project;
}

const {data: projects} = await useFetch<ProjectResult>("/api/v1/projects", {
  lazy: false,
  server: true,
});
</script>

<template>
  <main v-if="projects != null" class="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 justify-center gap-12 flex-wrap my-8 mx-12">
    <CardVue v-for="(project, idx) in projects.data" :key="idx" class="flex flex-col gap-1 divide-2 w-full rounded bg-opacity-60">
      <header>
        <img :src="project?.img_url" :alt="project?.title" class="w-full h-36 object-cover rounded">
        <div class="flex gap-1 items-center p-2">
          <h1 class="tracking-wide font-bold text-xl px-4">{{ project?.title }}</h1>
          <a v-if="project?.source_url" :href="project?.source_url" target="_blank" class="rounded">
            <img :src="GithubIcon" alt="Github" class="w-6">
          </a>
          <a v-if="project?.deployment_url" :href="project?.deployment_url" target="_blank" class="rounded">
            <LinkIcon class="w-6" :font-controlled="false" filled/>
          </a>
        </div>
      </header>
      <main class="flex flex-col justify-between gap-2 mx-4 mb-4 border-t-2 border-gray-700">
        <p>
          {{ project?.description }}
        </p>

        <ul class="flex gap-2 flex-wrap">
          <li v-for="(tag, idx) in project.tags.split(',')" :key="idx">
            <TagVue :text="tag" />
          </li>
        </ul>
      </main>
    </CardVue>
  </main>
</template>
