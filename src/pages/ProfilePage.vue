<script lang='ts' setup>
import { vec2 } from '@/maths/vector2';
import { WindowBase } from '@/components/ui/window';
import { useBreakpoint } from '@/composable/useBreakpoint';

const isMobile  = useBreakpoint();
</script>

<template>
  <div class="relative flex w-screen h-screen justify-between gap-2">
    <div class="w-full">
      <WindowBase title="Profile" :draggable="true" :normal='!isMobile' :startPosition='vec2(50, 20)'>
        Hello World
      </WindowBase>
    </div>
    <div class="w-full">
      <WindowBase title="profile.png" :draggable="true" :normal='!isMobile' :startPosition='vec2(20, 50)'>
        <img src="/assets/img/me.gif" alt="Lilith Itou" class="w-75"/>
      </WindowBase>
    </div>
  </div>
</template>
