<script lang='ts' setup>
import { WindowBase } from '@/components/ui/window';
import { useDevice } from '@/composable/useDevice';
import { useScrambler } from '@/composable/useScrambler';
import { Github, Itchio, Pixiv, Steam, LinkedIn, Youtube, Instagram } from '@/components/ui/icon';

// Why? well, I hope you like normalness
const {isMobile}  = useDevice();
const defaultOptsScrambler = {
  duration: 1500,
  interval: 69,
  autoPlay: true,
};

const profileTxt = useScrambler('PROFILE.TXT', defaultOptsScrambler);
const profileGif = useScrambler('PROFILE.GIF', defaultOptsScrambler);
const realName = useScrambler('Akbar Hendra Jaya', defaultOptsScrambler);
const alias = useScrambler('@UnknownRori', defaultOptsScrambler);
const jobs = useScrambler('Web Dev, Game Dev, Pixel Artist, VGM Composer', defaultOptsScrambler);
</script>

<template>
  <div class="relative flex md:flex-row sm:flex-col w-screen h-screen items-center">
    <div class="w-full h-full flex justify-items-center justify-center items-center">
      <WindowBase :title="profileTxt.displayText.value" class="md:min-w-75 sm:h-auto md:min-h-75"
        :draggable="!isMobile">
        <p class="text-3xl">
          {{ realName.displayText.value }}
        </p>
        <p class="text-2xl">
          {{ alias.displayText.value }}
        </p>
        <p class="text-gray-500">
          {{ jobs.displayText.value }}
        </p>

        <div class="flex gap-2 flex-wrap">
          <a href="https://github.com/UnknownRori" class="text-gray-400
            hover:text-white duration-500">
            <Github class="w-5 h-5"/>
          </a>
          <a href="https://unknownrori.itch.io/" class="text-gray-400
            hover:text-white duration-500">
            <Itchio class="w-5 h-5"/>
          </a>
          <a href="https://www.pixiv.net/en/users/45062630" class="text-gray-400
            hover:text-white duration-500">
            <Pixiv class="w-5 h-5"/>
          </a>
          <a href="https://steamcommunity.com/id/UnknownRori/" class="text-gray-400
            hover:text-white duration-500">
            <Steam class="w-5 h-5"/>
          </a>
          <a href="https://www.youtube.com/@unknownrori" target="_blank" class="text-gray-400
            hover:text-white duration-500">
            <Youtube class='w-5 h-5' />
          </a>
          <a href="https://www.instagram.com/unknownrori/" target="_blank" class="text-gray-400
            hover:text-white duration-500">
            <Instagram class='w-5 h-5' />
          </a>
          <a href="https://www.linkedin.com/in/unknownrori" target="_blank" class="text-gray-400
            hover:text-white duration-500">
            <LinkedIn class='w-5 h-5' />
          </a>
        </div>

      </WindowBase>
    </div>
    <div class="w-full h-full relative flex justify-items-center justify-center items-center">
      <WindowBase :title="profileGif.displayText.value" class="sm:relative sm:hidden md:block md:absolute md:w-75 md:left-46"
        :draggable="!isMobile">
        <img src="/assets/img/old/me.png" alt="Lilith Itou" class="w-75 h-96 object-cover object-top"/>
      </WindowBase>
      <WindowBase :title="profileGif.displayText.value" class="sm:relative md:absolute md:w-75 md:left-0"
        :draggable="!isMobile">
        <img src="/assets/img/me.gif" alt="Lilith Itou" class="w-75 object-cover object-top"/>
      </WindowBase>
    </div>
  </div>
</template>
