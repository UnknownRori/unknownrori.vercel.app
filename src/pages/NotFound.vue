<script setup lang='ts'>
import { ref, onMounted } from 'vue';

import { ArrowDown } from '@/components/ui/icons';
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
  <div class="w-screen h-screen flex flex-col gap-8 justify-center items-center">
    <div class="flex flex-col gap-2 justify-center items-center mt-auto">
      <h1 class="text-5xl text-shadow text-shadow-white/20 font-poet text-white">
        404
      </h1>
      <h1 class="text-xl text-shadow text-shadow-white/20 font-poet text-white">
        Page Not Found
      </h1>
    </div>
    <div v-if='quote' class="mt-4 flex flex-col items-center justify-center gap-2 text-white
      sm:w-full md:w-[400px] lg:w-[800px]">
      <h3 class="font-poet text-lg tracking-wide">
        "{{ quote.quote }}"
      </h3>
      <span class="italic">{{ quote.author }}</span>
    </div>

    <div class="flex flex-col gap-2 justify-center items-center mt-auto pb-8">
      <span class="tracking-widest font-bold text-xl text-white animate-pulse duration-300 mt-auto
      text-shadow-white/40 text-shadow-lg">
        Scroll Down
      </span>
      <ArrowDown />
    </div>
  </div>
</template>
