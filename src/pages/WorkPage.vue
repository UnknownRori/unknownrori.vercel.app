<script lang='ts' setup>
import { ref } from 'vue';
import { WindowBase } from '@/components/ui/window';
import { useDevice } from '@/composable/useDevice';
import { useScrambler } from '@/composable/useScrambler';
import { projects, projectLists } from '@/data/Project';
import { ProjectFilter, ProjectList } from '@/components/project';

// Why? well, I hope you like normalness
const { isMobile }  = useDevice();
const defaultOptsScrambler = {
  duration: 1500,
  interval: 69,
  autoPlay: true,
};
const lists = ref({items: projectLists});
const worksTxt = useScrambler('WORKS.TXT', defaultOptsScrambler);
function updateLists(name: string) {
  if (name == 'all') {
    lists.value = {items: projectLists};
    return;
  }

  lists.value = projects[name];
}
</script>

<template>
  <div class="flex flex-col w-screen h-screen items-center justify-center overflow-y-scroll">
    <WindowBase :title="worksTxt.displayText.value"
      class="sm:mx-4 md:mx-4 lg:w-200 lg:h-128 flex"
      :draggable="!isMobile"
    >
      <ProjectFilter @update='updateLists' />
      <div class="flex max-h-[400px] overflow-y-scroll">
        <ProjectList :projects='lists.items' />
      </div>
    </WindowBase>
  </div>
</template>
