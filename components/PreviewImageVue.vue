<script setup lang="ts">
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
    <button class="absolute right-0 top-0 m-2" @click="$emit('close')">
      <CloseIcon class="w-8" :font-controlled="false" filled />
    </button>
    <NuxtImg
      :src="$props.src"
      class="object-cover sm:w-[95vw] md:w-[80vw] lg:w-[80vw]"
      sizes="sm:95vw md:80vw lg:80vw"
      format="webp"
      placeholder
    />
  </PopoutVue>
</template>
