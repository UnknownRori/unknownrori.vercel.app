<script setup lang="ts">
type NavlinkType = {
  icon: string;
  title: string;
  active?: boolean;
  disabled?: boolean;
  href: string;
};

defineProps<{
  links: Array<NavlinkType>;
}>();
</script>

<template>
  <ul class="flex gap-10">
    <NavigationLinkVue
      v-for="(link, id) in $props.links"
      :key="id"
      :icon="link.icon"
      :href="link.href"
      :title="link.title"
      :disabled="link.disabled ?? false"
      :active="link.active ?? false"
    />
  </ul>
</template>
