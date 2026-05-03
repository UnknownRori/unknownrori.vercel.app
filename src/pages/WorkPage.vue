<script lang='ts' setup>
import { vec2 } from '@/maths/vector2';
import { WindowBase } from '@/components/ui/window';
import { useDevice } from '@/composable/useDevice';
import { useScrambler } from '@/composable/useScrambler';
import { projects } from '@/data/Project.ts';

// Why? well, I hope you like normalness
const { isMobile }  = useDevice();
const defaultOptsScrambler = {
  duration: 1500,
  interval: 69,
  autoPlay: true,
};

const worksTxt = useScrambler('WORKS.TXT', defaultOptsScrambler);
console.log(projects)
</script>

<template>
  <div class="flex flex-col w-screen h-screen items-center justify-center">
    <WindowBase :title="worksTxt.displayText" class="sm:mx-4 md:w-75 lg:w-200 lg:h-96"
    :draggable="!isMobile"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem possimus laudantium aut earum quia soluta corporis ratione nisi perspiciatis nesciunt fuga, eius delectus quam, dolores saepe nam officia blanditiis.
    </WindowBase>
  </div>
</template>
