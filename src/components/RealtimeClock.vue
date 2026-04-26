<script lang="ts" setup>
import useRealtimeClock from '@/composable/useRealtimeClock.ts';

defineProps<{
  class: string,
}>();

const clock = useRealtimeClock();
</script>

<template>
  <span :class='$props.class'>
    {{clock}}
  </span>
</template>
