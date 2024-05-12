<script setup lang="ts">
const route = useRoute();
const isInfo = ref(("info" in route.query && route.query.info === "false"));
</script>

<template>
  <div class="m-0 flex min-h-screen w-full flex-col bg-gray-950 p-0 text-white">
    <div class="m-8 flex flex-col items-center gap-4">
      <header v-if="!isInfo" class="text-gray-200 text-md sm:w-full md:w-[80%]">
        This page is designed to be printable on a single Letter format page!
        Some personal informations may have been redacted, but my contact
        informations are available on my <a href="/" class="text-blue-400 underline">portfolio</a>
      </header>
      <main class="bg-white w-[210mm] border-[1px] border-gray-300 m-4 text-black">
        <div class="p-[10mm]">
          Resume is in development
        </div>
      </main>
    </div>
  </div>
</template>
