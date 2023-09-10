<script lang="ts" setup>
const customSeo = generateSeoMeta({ title: "UnknownRori - 404" });
useSeoMeta(customSeo as any);

const quote = ref("");

onMounted(async () => {
  quote.value = await useQuote();
});
</script>

<template>
  <main
    class="absolute flex h-screen w-screen flex-col items-center justify-center gap-4 p-24"
  >
    <h1 class="text-6xl">404</h1>
    <h2 class="text-4xl">Page not found!</h2>
    <div class="mt-4 flex flex-col items-center justify-center gap-2">
      <h3 class="font-mono text-lg tracking-wide">"{{ quote.content }}"</h3>
      <span class="italic">{{ quote.author }}</span>
    </div>
  </main>
</template>
