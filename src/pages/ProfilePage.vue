<script lang='ts' setup>
import { vec2 } from '@/maths/vector2';
import { WindowBase } from '@/components/ui/window';
import { useDevice } from '@/composable/useDevice';

// Why? well, I hope you like normalness
const {isMobile}  = useDevice();
</script>

<template>
  <div class="relative flex md:flex-row sm:flex-col w-screen h-screen items-center">
    <div class="w-full h-full flex justify-items-center justify-center items-center">
      <WindowBase title="PROFILE.TXT" class="md:min-w-75 sm:h-auto md:min-h-75"
        :draggable="!isMobile">
        <p class="text-3xl">
          Akbar Hendra Jaya
        </p>
        <p class="text-2xl">
          @UnknownRori
        </p>
        <p class="text-gray-500">
          Web Dev, Game Dev, Pixel Artist, VGM Composer
        </p>

      </WindowBase>
    </div>
    <div class="w-full h-full relative flex justify-items-center justify-center items-center">
      <WindowBase title="PROFILE.PNG" class="sm:relative sm:hidden md:block md:absolute md:w-75 md:left-46"
        :draggable="!isMobile">
        <img src="/assets/img/old/me.gif" alt="Lilith Itou" class="w-75 h-96 object-cover object-top"/>
      </WindowBase>
      <WindowBase title="PROFILE.PNG" class="sm:relative md:absolute md:w-75 md:left-0"
        :draggable="!isMobile">
        <img src="/assets/img/me.gif" alt="Lilith Itou" class="w-75 object-cover object-top"/>
      </WindowBase>
    </div>
  </div>
</template>
