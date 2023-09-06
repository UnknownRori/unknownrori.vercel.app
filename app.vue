<template>
  <NuxtLoadingIndicator />
  <NuxtLayout name="default-layout">
    <NavigationBarVue />
    <div class="h-8 overflow-hidden mx-10">
      <div class="bg-[url(~/assets/icon/Seperator.svg)] bg-repeat-x py-4"></div>
    </div>

    <main>
      <NuxtPage />
    </main>
  </NuxtLayout>
</template>
