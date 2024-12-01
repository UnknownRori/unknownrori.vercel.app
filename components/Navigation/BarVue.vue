<script setup lang="ts">
import HomeIcon from "~/assets/icon/Home.svg";
import ScrollIcon from "~/assets/icon/Scroll.svg";
import TerminalIcon from "~/assets/icon/Terminal.svg";
import IDCardIcon from "~/assets/icon/IDCard.svg";
import PeopleIcon from "~/assets/icon/People.svg";

const openNavbar = ref(false);
const version = useVersion();

const routes = [
  { title: "Home", icon: HomeIcon, href: "/" },
  { title: "Blog", icon: ScrollIcon, disabled: true, href: "/blog" },
  { title: "Projects", icon: TerminalIcon, href: "/projects" },
  { title: "Resume", icon: IDCardIcon, href: "/resume" },
  { title: "Social", icon: PeopleIcon, href: "/social" },
];
</script>

<template>
  <nav
    class="m-0 mt-4 flex flex-row items-start justify-between gap-4 border-b-2 border-cod-gray-500 px-8 sm:py-2 md:py-0"
  >
    <header class="flex items-center gap-2">
      <div
        class="border-l-8 border-r-2 border-cod-gray-200 px-[2px] py-4"
      ></div>
      <NuxtImg
        src="/image/icon.webp"
        width="200"
        class="size-10 rounded-full border-2 border-white object-cover p-[0.2rem]"
        placeholder
      />
      <h1 class="text-lg font-bold antialiased">UnknownRori</h1>
      <IconBadgeVue class="justify-start text-xs font-light">
        {{ version }}
      </IconBadgeVue>
    </header>

    <IconHamburgerVue
      class="md:hidden"
      :is-open="openNavbar"
      @click="openNavbar = !openNavbar"
    />
    <div
      :class="`z-20 flex gap-4 transition-transform duration-500 sm:absolute sm:-left-[100vw] sm:top-14 sm:w-full sm:flex-col sm:items-start sm:bg-black sm:bg-opacity-90 sm:p-4 md:relative md:left-0 md:top-0 md:w-auto md:translate-x-0 md:flex-row md:bg-transparent md:p-0 ${
        openNavbar ? 'sm:translate-x-[100vw]' : ''
      }`"
    >
      <NavigationListVue :links="routes" />
      <ClientSettingsVue />
    </div>
  </nav>
</template>
