<script lang="ts" setup>
import { cn } from '@/utils';
import { Vector2 } from '@/maths/vector2';
import useDraggable from '@/composable/useDraggable';
import WindowBar from './WindowBar.vue';

const props = defineProps<{
  title: string,
  normal?: boolean,
  draggable?: boolean,
  startPosition?: Vector2,
}>();

const {
  startDrag,
  styleObject,
} = useDraggable(props);

</script>

<template>
  <div class='flex flex-col bg-gray-900/20 backdrop-blur-sm text-white will-change-contents'
    :style="normal ? {} : styleObject"
    >
    <WindowBar :title='title' class="cursor-move active:cursor-move" @mousedown='startDrag' />

    <div class='min-w-75 min-h-32 border-l-2 border-r-2 border-b-2 border-gray-700 p-2'>
      <slot />
    </div>
  </div>
</template>
