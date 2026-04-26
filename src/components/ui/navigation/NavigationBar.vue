<script lang="ts" setup>
import NavLink from './NavLink.vue'

</script>

<template>
  <!-- TODO:
    Refactor NavLink so it only accept icon, and also extract this into seperate file for
    easy addition
  -->
  <nav class="absolute flex ml-16 mt-8 gap-4">
    <NavLink href='/profile'>
      <img src="/assets/icons/home-icon.webp" alt="Home" class="w-6 h-6">
    </NavLink>

    <NavLink href='/projects'>
      <img src="/assets/icons/project-icon.webp" alt="Home" class="w-6 h-6">
    </NavLink>
  </nav>
</template>
