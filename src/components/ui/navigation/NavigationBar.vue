<script lang="ts" setup>
import { useRoute } from 'vue-router';
import NavLink from './NavLink.vue'

const route = useRoute();
const navlinks = [
  { name: 'Home', href:'/' },
  { name: 'Profile', href:'/profile' },
  { name: 'Works', href:'/projects' },
  { name: 'Contacts', href:'/projects' }
]

</script>

<template>
  <nav class="absolute flex justify-center items-center w-screen mt-8 z-100">
    <div class="border-2 border-gray-500 hover:border-white duration-500 rounded-lg py-2 px-4 flex gap-6">
    <NavLink v-for='item in navlinks'
      v-bind:key='item.name'
      :name='item.name'
      :href='item.href'
      :isActive='route.name == item.name'
    />
    </div>
  </nav>
</template>
