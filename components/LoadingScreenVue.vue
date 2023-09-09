<script setup lang="ts">
type LoadingContentType = {
  time: number;
  text: string;
};

defineProps<{
  show: boolean,
}>();

const emits = defineEmits<{
  (e: "done"): void
}>();

const route = useRoute();
const startTime = new Date();
const currentPageFile =
  route.fullPath === "/" ? "/index.html" : `${route.fullPath}.html`;
const loadingContentShown = ref([] as Array<LoadingContentType>);
const loadingContents = [
  { time: 0, text: "Booting..." },
  { time: 1, text: "Loading minimal resources..." },
  { time: 4, text: currentPageFile },
  { time: 12, text: "/assets/css/tailwind.css" },
  { time: 14, text: "/assets/css/scroll.css" },
  { time: 42, text: "/assets/css/nuxt.js" },
  { time: 62, text: "Loading content..." },
  { time: 82, text: "Content Loaded..." },
  { time: 88, text: "Creating app..." },
  { time: 92, text: "Mounting app..." },
  { time: 94, text: "Starting app..." },
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

<style scoped>
.from-right-enter-active,
.from-right-leave-active {
  transition: all 200ms ease;
}
.from-right-enter-from,
.from-right-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>

<template>
  <Transition name="fade">
    <div
      v-if="$props.show"
      id="loading"
      class="absolute inset-0 flex flex-col gap-2 justify-center items-center w-screen h-screen bg-black z-50 bg-[url(~/assets/icon/Grid.svg)]"
    >
      <div
        class="absolute inset-0 w-screen bg-gradient-to-b from-transparent from-40% to-80% to-black z-10"
      ></div>
      <h2 class="text-lg text-white">Please wait warmly....</h2>
      <div
        class="relative bg-cod-gray-950 rounded-md py-2 w-[24vw] lg:w-[42vw] md:w-[60vw] sm:w-[82vw]"
      >
        <span
          class="absolute top-0 left-0 rounded-md h-full bg-white"
          :style="`width: ${loadingLength}%`"
        ></span>
      </div>
      <div
        class="relative min-h-[48vh] w-[24vw] lg:w-[42vw] md:w-[60vw] sm:w-[82vw]"
      >
        <div
          class="flex flex-col-reverse justify-center items-start text-white overflow-hidden"
        >
          <TransitionGroup name="from-right">
            <!-- <span v-for="(val, idx) in loadingContent" :key="idx">{{ val }}</span> -->
            <span v-for="(val, idx) in loadingContentShown" :key="idx"
              >[{{
                "&nbsp;".repeat(
                  5 - val.time.toString().length >= 0
                    ? 5 - val.time.toString().length
                    : 0,
                ) + val.time
              }}] {{ val.text }}</span
            >
          </TransitionGroup>
        </div>
      </div>
    </div>
  </Transition>
</template>
