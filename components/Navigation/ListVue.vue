<script setup lang="ts">
type NavlinkType = {
  title: string;
  active?: boolean,
  disabled?: boolean,
  href: string;
};

defineProps<{
  links: Array<NavlinkType>;
}>();
</script>

<template>
  <ul class="flex gap-8">
    <NavigationLinkVue
      v-for="(link, id) in $props.links"
      :key="id"
      :href="link.href"
      :title="link.title"
      :disabled="link.disabled ?? false"
      :active="link.active ?? false"
    />
  </ul>
</template>
