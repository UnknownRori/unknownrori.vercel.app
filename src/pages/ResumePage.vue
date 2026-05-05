<script lang='ts' setup>
import { WindowBase } from '@/components/ui/window';
import { useDevice } from '@/composable/useDevice';
import { useScrambler } from '@/composable/useScrambler';
import ResumeContent from '@/components/resume/ResumeContent.vue';

const { isMobile }  = useDevice();
const defaultOptsScrambler = {
  duration: 1500,
  interval: 69,
  autoPlay: true,
};

const resumeTxt = useScrambler('RESUME.TXT', defaultOptsScrambler);
</script>

<template>
  <div class="flex flex-col w-screen h-screen items-center justify-center block print:hidden">
    <WindowBase :title="resumeTxt.displayText.value"
      class="relative sm:w-[80%] sm:h-[60%] sm:mx-2 md:mx-4 lg:w-200 lg:h-128"
      :draggable="!isMobile">
      <div class="relative flex overflow-y-auto">
        <ResumeContent />
      </div>
    </WindowBase>
  </div>
  <ResumeContent class='hidden print:block' />
</template>
