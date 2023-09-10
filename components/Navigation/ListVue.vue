<script setup lang="ts">
type NavlinkType = {
  icon: string;
  title: string;
  disabled?: boolean;
  href: string;
};

defineProps<{
  links: Array<NavlinkType>;
}>();
</script>

<template>
  <ul class="flex xl:flex-row sm:flex-col sm:w-full xl:w-auto gap-2">
    <NavigationLinkVue
      v-for="(link, id) in $props.links"
      :key="id"
      :icon="link.icon"
      :href="link.href"
      :title="link.title"
      :is-active="false"
      :disabled="link.disabled ?? false"
    />
  </ul>
</template>
