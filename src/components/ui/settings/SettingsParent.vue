<script lang="ts" setup>
import SettingsIcon from "./SettingsIcon.vue";
</script>
<template>
  <div class="fixed -bottom-1 p-4 z-100">
    <div class="text-white group rounded-full p-1 opacity-50 hover:opacity-100 duration-500
      cursor-pointer">
      <SettingsIcon class="motion-safe:group-hover:animate-spin duration-500" />
    </div>
  </div>
</template>
