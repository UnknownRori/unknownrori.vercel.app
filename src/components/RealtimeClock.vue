<script lang="ts" setup>
import useRealtimeClock from '@/composable/useRealtimeClock.ts';

defineProps<{
  class: string,
}>();

const strClock = useRealtimeClock();
const clock = strClock.value.split(':');
</script>

<template>
  <span :class='$props.class'>
    {{clock[0]}} <span class='animate-blink'>:</span>  {{clock[1]}}
  </span>
</template>
