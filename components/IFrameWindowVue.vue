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
    <div class="flex h-screen w-screen flex-col">
      <header class="flex items-center justify-between bg-cod-gray-500 px-4">
        <div class="flex gap-2">
          <ComputerIcon class="w-4" :font-controlled="false" filled />
          <span> Live Demo </span>
          <a className="text-gray-200" :href="$props.src" target="_blank" title="Open this link if it's slow"
            @click="$emit('close')">
            (Open new tab)
          </a>
        </div>
        <button class="right-0 top-0 m-2" @click="$emit('close')">
          <CloseIcon class="w-6" :font-controlled="false" filled />
        </button>
      </header>
      <iframe v-if="$props.isOpen" :src="$props.src" class="m-0 h-full w-full p-0" loading="lazy"></iframe>
    </div>
  </PopoutVue>
</template>
