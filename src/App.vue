<script setup lang="ts">
import { BaseLayout } from '@/layouts';
import { RouterView } from 'vue-router';
import BlinkTransition from '@/components/ui/animation/BlinkTransition.vue';
</script>

<template>
  <BaseLayout>
    <RouterView v-slot='{ Component }'>
      <KeepAlive>
        <BlinkTransition>
          <component :is='Component' />
        </BlinkTransition>
      </KeepAlive>
    </RouterView>
  </BaseLayout>
</template>
