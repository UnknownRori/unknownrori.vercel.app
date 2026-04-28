<script lang='ts' setup>
import { ref, onBeforeMount, nextTick  } from 'vue';
import { useRoute } from 'vue-router';

import BlinkTransition from '@/components/ui/animation/BlinkTransition.vue';
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
  { time: 12, text: `Loading ${currentPageFile}` },
  { time: 42, text: "/assets/js/vue.js" },
  { time: 12, text: "/assets/css/tailwind.css" },
  { time: 14, text: "/assets/css/scroll.css" },
  { time: 62, text: "Loading content..." },
  { time: 82, text: "Content Loaded..." },
  { time: 82, text: "󰀤󰁒󰁅󰁁󰁍 Loaded..." },
  { time: 88, text: "Creating app..." },
  { time: 92, text: "Mounting app..." },
  { time: 94, text: "Starting app..." },
  { time: 169, text: "Ready" },
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

  await nextTick();
  emits("done");
});
</script>

<template>
  <BlinkTransition>
    <div
      v-show='$props.show'
      class="absolute inset-0 z-6969 h-screen w-screen flex flex-col items-center
      justify-center gap-2 bg-black uppercase text-white"
    >
      <div class="absolute inset-0 z-10 w-screen bg-gradient-to-b from-transparent from-40% to-black to-80%"></div>
      <div class="relative sm:w-[82vw] md:w-[60vw] lg:w-[42vw] flex justify-center items-center">
        <h2 class="text-2xl">Please wait warmly....</h2>
        <span class="absolute right-0 top-0">{{loadingLength.toFixed(1)}}%</span>
      </div>
      <div
        class="relative sm:w-[82vw] md:w-[60vw] lg:w-[42vw] w-[24vw] border-2 border-white h-12
        rounded-md bg-cod-gray-950 flex items-center"
      >
        <span
          class="left-0 top-0 rounded-md bg-white ml-1 mr-1 h-[80%]"
          :style="`width:${loadingLength}%`" />
      </div>

      <div class="relative h-[20vh] w-[24vw] sm:w-[82vw] md:w-[60vw] lg:w-[42vw]">
        <div class="flex flex-col-reverse items-start justify-center overflow-hidden text-white">
          <TransitionGroup name="from-right">
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
