<template>
  <EditorOverlayVue />
  <AnimationCursorVue />

  <div
    class="fixed top-0 left-0 w-full h-full bg-black bg-[url(~/assets/image/background.jpg)] pointer-events-none -z-10 bg-cover bg-no-repeat"
  ></div>
  <div
    class="flex flex-col w-full min-h-screen m-0 p-0 bg-black text-white bg-[url(~/assets/icon/Grid.svg)] bg-opacity-80"
  >
    <NavigationBarVue />
    <div class="h-8 overflow-hidden mx-10">
      <div
        class="bg-[url(~/assets/icon/Seperator.svg)] bg-repeat-x py-4"
      ></div>
    </div>
    <NuxtLoadingIndicator />

    <slot />
  </div>
</template>
