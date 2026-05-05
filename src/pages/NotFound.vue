<script setup lang='ts'>
import { ref, onMounted } from 'vue';

import useQuote from '@/composable/useQuote.ts';
import type { Quote } from "@/models/Quote";

const quote = ref<Quote | null>(null);
onMounted(() => {
  (async () => {
    quote.value = await useQuote();
  })();
})

</script>

<template>
  <div class="w-screen h-screen flex flex-col gap-8 justify-center items-center uppercase">
    <div class="flex flex-col gap-2 justify-center items-center">
      <h1 class="text-5xl text-shadow text-shadow-white/20 font-poet text-white animate-pulse">
        404
      </h1>
      <h1 class="text-xl text-shadow text-shadow-white/20 font-poet text-white animate-pulse">
        Page Not Found
      </h1>
    </div>
    <div v-if='quote' class="mt-4 flex flex-col items-center justify-center gap-2 text-white
      sm:w-full md:w-[400px] lg:w-[800px]">
      <h3 class="font-poet text-lg tracking-wide">
        "{{ quote.quote }}"
      </h3>
      <span class="italic">'{{ quote.author }}'</span>
    </div>
  </div>
</template>
