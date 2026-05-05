<script lang='ts' setup>
import { ref } from 'vue';
import { cn } from '@/utils';
import { projectTypes } from '@/data/Project';

const emit = defineEmits<{
  (e: "update", value: string): void,
}>();

const value = ref('all')
function updateValue(name: string) {
  value.value = name;
  emit('update', name);
}

</script>

<template>
  <ul class="flex gap-4 text-gray-500">
      <button :class="cn('hover:cursor-pointer duration-500 uppercase', 'all' == value ? 'text-white' : '')"
      @click='updateValue("all")'>
        all
      </button>

    <li :key="name" v-for='name in projectTypes'>
      <button :class="cn('hover:cursor-pointer duration-500 uppercase', name == value ? 'text-white' : '')"
        @click='updateValue(name)'>
        {{ name }}
      </button>
    </li>
  </ul>
</template>
