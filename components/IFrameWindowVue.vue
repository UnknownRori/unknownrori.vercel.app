<script setup lang="ts">
import ComputerIcon from "~/assets/icon/Computer.svg";
import CloseIcon from "~/assets/icon/Close.svg";

defineProps<{
  isOpen: boolean;
  src: string;
}>();

defineEmits<{
  (e: "close"): void;
  (e: "click-outside"): void;
}>();
</script>

<template>
  <PopoutVue :is-open="$props.isOpen" @click-outside="$emit('click-outside')">
    <div class="flex flex-col w-screen h-screen">
      <header class="flex justify-between items-center bg-cod-gray-500 px-4 py-1">
        <div class="flex gap-2">
          <ComputerIcon class="w-4" :font-controlled="false" filled />
          <span>
            Live Demo
          </span>
        </div>
        <button class="right-0 top-0 m-2" @click="$emit('close')">
          <CloseIcon class="w-4" :font-controlled="false" filled />
        </button>
      </header>
      <iframe v-if="$props.isOpen" :src="$props.src" class="w-full h-full m-0 p-0" loading="lazy"></iframe>
    </div>
  </PopoutVue>
</template>
