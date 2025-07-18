<script setup lang='ts'>
import { Github, ExternalLink } from 'lucide-vue-next';
import { Card } from '@/components/ui/card';
import { Tag } from '@/components/ui/icons';
import {
  projectLists
} from '@/data/Project.ts';
</script>

<template>
  <div class="absolute inset-0 flex w-screen h-screen justify-center items-center sm:px-4 sm:py-24 md:p-24">
    <Card class="flex flex-col gap-4 w-full h-full overflow-y-scroll border-0">
      <div :key='data.name' v-for='data in projectLists' class="flex sm:flex-col lg:flex-row gap-4
        items-stretch">
        <img :src="data.imgUrl" :alt="data.name" class="object-cover sm:w-full lg:w-[500px] h-[300px]">
        <div class="flex flex-col gap-2">
          <div class="flex gap-2 items-center">
            <h1 class="text-lg font-bold text-white">
              {{ data.name }}
            </h1>
            <a v-if='data.sourceUrl' :href="data.sourceUrl">
              <Github class="text-gray-400
          hover:text-white duration-500 w-4 h-4" />
            </a>
            <a v-if='data.previewUrl' :href="data.previewUrl">
              <ExternalLink class="text-gray-400
          hover:text-white duration-500 w-4 h-4" />
            </a>
          </div>
          <p class="text-white">
            {{ data.description }}
          </p>
          <ul class="flex flex-wrap gap-2">
            <li :key='name' v-for='name in data.tags'>
              <Tag>
                {{ name }}
              </Tag>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  </div>
</template>
