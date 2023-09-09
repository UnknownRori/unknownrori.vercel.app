<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-[url(~/assets/image/background.jpg)] opacity-10 pointer-events-none"
  ></div>
  <div
    class="flex flex-col w-full min-h-screen m-0 p-0 bg-black text-white bg-[url(~/assets/icon/Grid.svg)]"
  >
    <slot />
  </div>
</template>
