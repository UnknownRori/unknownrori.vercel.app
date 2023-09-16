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
    <ProjectCardVue v-for="(project, idx) in projects.data" :key="idx" :project="project" />
  </main>
</template>
