<script setup lang='ts'>
import { CardAngled } from '@/components/ui/angled';

import { Github, Youtube, Instagram, Linkedin } from 'lucide-vue-next';
</script>

<template>
  <CardAngled class="w-full after:bg-gray-900/50 border-white after:border-2 after:-skew-y-4">
    <div class="flex flex-col gap-1 w-full h-full p-6 text-white font-bold
            text-center">
      <span class="text-2xl">
        Akbar Hendra Jaya
      </span>
      <span class="italic text-md">
        @UnknownRori / Lilith Itou
      </span>
      <span class="italic text-sm">
        Web Dev, Game Dev, Pixel Artist, VGM Composer
      </span>
      <div class="flex justify-center items-center gap-2 mt-2">
        <a href="https://github.com/UnknownRori" target="_blank" class="text-gray-400
          hover:text-white duration-500">
          <Github class='w-5 h-5' />
        </a>
        <a href="https://www.youtube.com/@unknownrori" target="_blank" class="text-gray-400
          hover:text-white duration-500">
          <Youtube class='w-5 h-5' />
        </a>
        <a href="https://www.instagram.com/unknownrori/" target="_blank" class="text-gray-400
          hover:text-white duration-500">
          <Instagram class='w-5 h-5' />
        </a>
        <a href="https://www.linkedin.com/in/unknownrori" target="_blank" class="text-gray-400
          hover:text-white duration-500">
          <Linkedin class='w-5 h-5' />
        </a>
      </div>
    </div>
  </CardAngled>
</template>
