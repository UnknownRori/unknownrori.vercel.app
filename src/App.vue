<script setup lang="ts">
import { BaseLayout } from '@/layouts';
import { RouterView } from 'vue-router';
</script>

<template>
  <BaseLayout>
    <RouterView v-slot='{ Component }'>
      <KeepAlive>
        <component :is='Component' />
      </KeepAlive>
    </RouterView>
  </BaseLayout>
</template>
