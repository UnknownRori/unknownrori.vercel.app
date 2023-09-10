<script setup lang="ts">
import HomeIcon from "~/assets/icon/Home.svg";
import ScrollIcon from "~/assets/icon/Scroll.svg";
import TerminalIcon from "~/assets/icon/Terminal.svg";
import IDCardIcon from "~/assets/icon/IDCard.svg";
import PeopleIcon from "~/assets/icon/People.svg";

const openNavbar = ref(false);

const routes = [
  { title: "Home", icon: HomeIcon, href: "/" },
  { title: "Blog", icon: ScrollIcon, disabled: true, href: "/blog" },
  { title: "Projects", icon: TerminalIcon, disabled: true, href: "/projects" },
  { title: "Resume", icon: IDCardIcon, disabled: true, href: "/resume" },
  { title: "Social", icon: PeopleIcon, href: "/social" },
];
</script>

<template>
  <nav
    class="flex flex-row gap-4 items-start justify-between m-0 mt-4 px-8 border-b-2 border-cod-gray-500"
  >
    <header class="flex gap-2 items-center">
      <div
        class="border-l-8 border-r-2 border-cod-gray-200 py-4 px-[2px]"
      ></div>
      <img
        src="~/assets/image/icon.webp"
        alt="Logo"
        class="w-10 h-10 object-cover rounded-full border-2 p-[0.2rem] border-white"
      />
      <h1 class="text-lg font-bold antialiased">UnknownRori</h1>
      <IconBadgeVue class="text-xs font-light justify-start">
        v0.0.0
      </IconBadgeVue>
    </header>

    <IconHamburgerVue class="xl:hidden" @click="openNavbar = !openNavbar" />
    <div
      :class="`sm:absolute xl:relative sm:w-full xl:w-auto sm:items-start sm:p-4 xl:p-0 sm:-left-[38rem] xl:left-0 xl:translate-x-0 xl:top-0 sm:top-14 flex sm:flex-col xl:flex-row gap-4 sm:bg-black sm:bg-opacity-90 xl:bg-transparent z-20 duration-500 transition-transform ${
        openNavbar ? 'sm:translate-x-[38rem]' : ''
      }`"
    >
      <NavigationListVue :links="routes" />
      <ClientSettingsVue />
    </div>
  </nav>
</template>
