<script lang='ts' setup>
import { vec2 } from '@/maths/vector2';
import { WindowBase } from '@/components/ui/window';
import { useDevice } from '@/composable/useDevice';
import { useScrambler } from '@/composable/useScrambler';

// Why? well, I hope you like normalness
const {isMobile}  = useDevice();
const defaultOptsScrambler = {
  duration: 1500,
  interval: 69,
  autoPlay: true,
};

const profileTxt = useScrambler('PROFILE.TXT', defaultOptsScrambler);
const profileGif = useScrambler('PROFILE.GIF', defaultOptsScrambler);
const realName = useScrambler('Akbar Hendra Jaya', defaultOptsScrambler);
const alias = useScrambler('@UnknownRori', defaultOptsScrambler);
const jobs = useScrambler('Web Dev, Game Dev, Pixel Artist, VGM Composer', defaultOptsScrambler);
</script>

<template>
  <div class="relative flex md:flex-row sm:flex-col w-screen h-screen items-center">
    <div class="w-full h-full flex justify-items-center justify-center items-center">
      <WindowBase :title="profileTxt.displayText" class="md:min-w-75 sm:h-auto md:min-h-75"
        :draggable="!isMobile">
        <p class="text-3xl">
          {{ realName.displayText }}
        </p>
        <p class="text-2xl">
          {{ alias.displayText }}
        </p>
        <p class="text-gray-500">
          {{ jobs.displayText }}
        </p>

      </WindowBase>
    </div>
    <div class="w-full h-full relative flex justify-items-center justify-center items-center">
      <WindowBase :title="profileGif.displayText" class="sm:relative sm:hidden md:block md:absolute md:w-75 md:left-46"
        :draggable="!isMobile">
        <img src="/assets/img/old/me.gif" alt="Lilith Itou" class="w-75 h-96 object-cover object-top"/>
      </WindowBase>
      <WindowBase :title="profileGif.displayText" class="sm:relative md:absolute md:w-75 md:left-0"
        :draggable="!isMobile">
        <img src="/assets/img/me.gif" alt="Lilith Itou" class="w-75 object-cover object-top"/>
      </WindowBase>
    </div>
  </div>
</template>
