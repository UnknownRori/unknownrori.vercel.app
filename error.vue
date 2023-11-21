<script setup lang="ts">
const props = defineProps({
  error: Object,
});

const quote: Ref<Quote | null> = ref(null);
const customSeo = generateSeoMeta({
  title: `UnknownRori - ${props.error?.statusCode}`,
});
useSeoMeta(customSeo as any);

onMounted(async () => {
  quote.value = await useQuote();

  // TODO : Do proper error reporting
  console.error(props.error as any);
});
</script>

<template>
  <NuxtLayout name="default-layout">
    <main
      class="absolute flex h-screen w-screen flex-col items-center justify-center gap-4 p-24"
    >
      <h1 class="text-6xl">{{ $props.error?.statusCode }}</h1>
      <h2 class="text-4xl">{{ $props.error?.message }}</h2>
      <ClientOnly>
        <Transition>
          <div
            v-show="quote != null"
            class="mt-4 flex flex-col items-center justify-center gap-2"
          >
            <h3 class="font-mono text-lg tracking-wide">
              "{{ quote.content }}"
            </h3>
            <span class="italic">{{ quote.author }}</span>
          </div>
        </Transition>
      </ClientOnly>
    </main>
  </NuxtLayout>
</template>
