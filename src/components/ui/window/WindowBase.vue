<script lang="ts" setup>
import { cn } from '@/utils';
import { Vector2 } from '@/maths/vector2';
import useDraggable from '@/composable/useDraggable';
import WindowBar from './WindowBar.vue';

const props = defineProps<{
  title: string;
  draggable?: boolean;
  startPosition?: Vector2;
  class?: string;
}>();

const { elRef, startDrag, styleObject, placeholderStyle, hasBeenDragged } = useDraggable(props);
</script>

<template>
  <div
    v-if="hasBeenDragged"
    :style="placeholderStyle"
    aria-hidden="true"
  />

  <Teleport to="body" :disabled="!hasBeenDragged">
    <div
      ref="elRef"
      :class="cn(
        'flex flex-col bg-gray-900/20 backdrop-blur-sm text-white will-change-contents',
        hasBeenDragged ? 'print:hidden' : '',
        $props.class,
      )"
      :style="styleObject"
    >
      <WindowBar
        :title="title"
        class="cursor-move active:cursor-move"
        @mousedown="startDrag"
      />

      <div class="relative flex-1 border-l-2 border-r-2 border-b-2 border-gray-700 p-2
        overflow-y-auto">
        <slot />
      </div>
    </div>
  </Teleport>
</template>
