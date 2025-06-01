<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { BlinkTransition } from '@/components/ui/animation';
import { useRoute } from 'vue-router';

import { sleep } from '@/utils';

type LoadingContentType = {
  time: number;
  text: string;
};

defineProps<{
  show: boolean;
}>();

const emits = defineEmits<{
  (e: "done"): void;
}>();

const startTime = new Date();
const currentPageFile = `index.html`;
const loadingContentShown = ref([] as Array<LoadingContentType>);
const loadingContents = [
  { time: 0, text: "Booting..." },
  { time: 1, text: "Loading minimal resources..." },
  { time: 4, text: "Loading /sw.js" },
  { time: 12, text: currentPageFile },
  { time: 42, text: "/assets/css/nuxt.js" },
  { time: 12, text: "/assets/css/tailwind.css" },
  { time: 14, text: "/assets/css/scroll.css" },
  { time: 8, text: "/assets/particle.json" }, // TODO : make this thing gone if config set to disabled
  { time: 62, text: "Loading content..." },
  { time: 82, text: "Content Loaded..." },
  { time: 88, text: "Creating app..." },
  { time: 92, text: "Mounting app..." },
  { time: 94, text: "Starting app..." },
  { time: 8, text: "Initializing Particles" }, // TODO : make this thing gone if config set to disabled
  { time: 112, text: "Ready" },
];

const increment = 100 / (loadingContents.length + 1);
const loadingLength = ref(increment);

for (let i = 0; i < 2; i++) {
  const endTime = new Date().getTime() - startTime.getTime();
  loadingContentShown.value.push({
    time: endTime,
    text: loadingContents[i].text,
  });
  loadingLength.value += increment;
}

onBeforeMount(async () => {
  for (let i = 2; i < loadingContents.length; i++) {
    const endTime = new Date().getTime() - startTime.getTime();
    loadingContentShown.value.push({
      time: endTime,
      text: loadingContents[i].text,
    });
    loadingLength.value += increment;
    await sleep(Math.random() * loadingContents[i].time);
  }

  emits("done");
});
</script>

<template>
  <BlinkTransition>
    <div v-show="$props.show" id="loading" class="absolute inset-0 z-[10000] flex h-screen w-screen flex-col items-center justify-center
      gap-2 bg-black bg-[url(icons/grid.svg)] font-poet">
      <div class="absolute inset-0 z-10 w-screen bg-gradient-to-b from-transparent from-40% to-black to-80%"></div>
      <h2 class="text-lg text-white">Please wait warmly....</h2>
      <div class="relative w-[24vw] rounded-md bg-cod-gray-950 py-2 sm:w-[82vw] md:w-[60vw] lg:w-[42vw]">
        <span class="absolute left-0 top-0 h-full rounded-md bg-white" :style="`width: ${loadingLength}%`"></span>
      </div>
      <div class="relative min-h-[48vh] w-[24vw] sm:w-[82vw] md:w-[60vw] lg:w-[42vw]">
        <div class="flex flex-col-reverse items-start justify-center overflow-hidden text-white">
          <TransitionGroup name="from-right">
            <!-- <span v-for="(val, idx) in loadingContent" :key="idx">{{ val }}</span> -->
            <span v-for="(val, idx) in loadingContentShown" :key="idx">[{{
              "&nbsp;".repeat(
                5 - val.time.toString().length >= 0
                  ? 5 - val.time.toString().length
                  : 0,
              ) + val.time
            }}] {{ val.text }}</span>
          </TransitionGroup>
        </div>
      </div>
    </div>
  </BlinkTransition>
</template>
