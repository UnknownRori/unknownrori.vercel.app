<script lang='ts' setup>
import type { Project } from '@/models/Projects.d.ts';
import ProjectCard from './ProjectCard.vue';
defineProps<{
  projects: Project[]
}>();
</script>

<template>
  <ul class="w-full flex gap-4 flex-wrap justify-center items-center">
    <li :key='project.name' v-for='project in $props.projects'>
      <ProjectCard :project='project' />
    </li>
  </ul>
</template>
