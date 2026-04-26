<script lang="ts" setup>
import {cn} from '@/utils';
import { X } from '@lucide/vue';

defineProps<{
  class: string,
}>();
</script>

<template>
  <button :class='cn($props.class)'>
    <X/>
  </button>
</template>
