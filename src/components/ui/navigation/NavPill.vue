<script lang="ts" setup>
import { computed } from 'vue';
import { type Vector2 } from '@/maths/vector2';

const props = defineProps<{
  size: Vector2,
  position: Vector2,
}>();

const styleObject = computed(() => ({
  width: `${props.size.x}px`,
  height: `${props.size.y}px`,
  left: `${props.position.x}px`,
  top: `${props.position.y}px`,
}));
</script>

<template>
  <div
    class="absolute bg-white rounded-lg pointer-events-none z-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
    :style="styleObject"
  />
</template>
