<script setup lang="ts">
const routes = [
  { title: "Home", href: "/" },
  { title: "Blog", href: "/blog" },
  { title: "Projects", href: "/projects" },
  { title: "Resume", href: "/resume" },
  { title: "Social", href: "/social" },
];
</script>

<template>
  <nav
    class="flex flex-row gap-4 items-center justify-between m-0 py-4 px-8 bg-slate-950"
  >
    <header class="flex gap-2 items-center">
      <img
        src="~/assets/image/icon.webp"
        alt="Logo"
        class="w-10 h-10 object-cover rounded-full border-2 p-[0.2rem] border-white"
      />
      <h1 class="text-lg antialiased">UnknownRori</h1>
      <IconBadgeVue class="text-xs font-light justify-start">
        v0.0.0
      </IconBadgeVue>
    </header>

    <div class="flex flex-row justify-center items-center gap-4">
      <NavigationListVue :links="routes" />
      <ClientSettingsVue />
    </div>
  </nav>
</template>
