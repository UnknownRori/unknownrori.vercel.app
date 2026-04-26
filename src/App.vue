<script setup lang="ts">
import { ref } from 'vue';
import { BaseLayout } from '@/layouts';
import { RouterView } from 'vue-router';
const isDone = ref(true);
</script>

<template>
  <BaseLayout>
    <LoadingScreen :show='isDone' @done='() => isDone = false' />
    <RouterView v-slot='{ Component }'>
      <KeepAlive>
        <component :is='Component' />
      </KeepAlive>
    </RouterView>
  </BaseLayout>
</template>
