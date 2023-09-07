<script setup lang="ts">
import SignalIcon from "~/assets/icon/Signal.svg";
import ScrollIcon from "~/assets/icon/Scroll.svg";
import TerminalIcon from "~/assets/icon/Terminal.svg";
import IDCardIcon from "~/assets/icon/IDCard.svg";
import PeopleIcon from "~/assets/icon/People.svg";

const routes = [
  { title: "Home", icon: SignalIcon, href: "/" },
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

    <div class="flex flex-row gap-4">
      <NavigationListVue :links="routes" />
      <ClientSettingsVue />
    </div>
  </nav>
</template>
