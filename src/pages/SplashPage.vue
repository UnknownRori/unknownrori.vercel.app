<script lang='ts' setup>
import { vec2 } from '@/maths/vector2';
import { WindowBase } from '@/components/ui/window';
</script>

<template>
  <div class="w-screen h-screen flex flex-col gap-4 justify-center items-center">
    <h1 class="tracking-widest font-poet text-white text-5xl animate-pulse text-shadow-lg
      text-shadow-white/40 mb-4">Welcome</h1>
    <WindowBase title="Profile" :draggable="true" :startPosition='vec2(0, 0)'>
      Hello World
    </WindowBase>

  </div>
</template>
