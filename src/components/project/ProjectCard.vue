<script lang='ts' setup>
import type { Project } from "@/models/Projects";
import ProjectTag from './ProjectTag.vue';
import { ExternalLink } from '@lucide/vue';
import { Github, Itchio, Pixiv } from '@/components/ui/icon';
defineProps<{
  project: Project
}>();
</script>

<template>
  <div class="w-[300px] h-[400px]">
    <img :src="$props.project.imgUrl" :alt="$props.project.name"
      class='w-full h-[300px] object-cover object-center'
    >
    <div class="w-full flex gap-2">
      <span class="w-full uppercase">
        {{ $props.project.name }}
      </span>
      <div class='flex-1 flex gap-2 items-center'>
        <a v-show='$props.project.sourceCode != null' :href="$props.project.sourceCode" target='_blank'
          >
          <Github class="w-4 h-4 text-white"/>
        </a>

        <a v-show='$props.project.itchIo != null' :href="$props.project.itchIo" target='_blank'>
          <Itchio class="w-4 h-4 text-white" />
        </a>

        <a v-show='$props.project.pixiv != null' :href="$props.project.pixiv" target='_blank'>
          <Pixiv class="w-4 h-4 text-white" />
        </a>
        <a v-show='$props.project.previewUrl != null' :href="$props.project.previewUrl" target='_blank'>
          <ExternalLink class="w-4 h-4 text-white" />
        </a>
      </div>
    </div>
    <div class="flex flex-wrap gap-2">
      <ProjectTag :key='$props.project.name + tag' v-for='tag in $props.project.tags' :name='tag' />
    </div>
  </div>
</template>
