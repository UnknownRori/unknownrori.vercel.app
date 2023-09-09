<script lang="ts" setup>
const customSeo = generateSeoMeta({ title: "UnknownRori - 404" });
useSeoMeta(customSeo as any);

const quote = ref("");

onMounted(async () => {
  quote.value = await useQuote();
})
</script>

<template>
  <main
    class="absolute flex flex-col justify-center items-center gap-4 h-screen w-screen p-24"
  >
    <h1 class="text-6xl">404</h1>
    <h2 class="text-4xl">Page not found!</h2>
    <div class="flex flex-col gap-2 justify-center items-center mt-4">
      <h3 class="font-mono text-lg tracking-wide">"{{ quote.content }}"</h3>
      <span class="italic">{{ quote.author }}</span>
    </div>
  </main>
</template>
