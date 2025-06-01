<script setup lang="ts">
import { ref } from 'vue';
import { BaseLayout } from '@/layouts';
import { LoadingScreen } from '@/components';
import { RouterView } from 'vue-router';
import { BlinkTransition } from '@/components/ui/animation';
const isDone = ref(true);
</script>

<template>
  <BaseLayout>
    <LoadingScreen :show='isDone' @done='() => isDone = false' />
    <RouterView v-slot='{ Component }'>
      <KeepAlive>
        <BlinkTransition>
          <component :is='Component' />
        </BlinkTransition>
      </KeepAlive>
    </RouterView>
  </BaseLayout>
</template>
