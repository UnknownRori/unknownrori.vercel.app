<script lang="ts" setup>
import { Settings } from 'lucide-vue-next';
defineProps<{
  class?: string,
}>();
</script>

<template>
  <Settings :class='$props.class' />
</template>
