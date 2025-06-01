<script lang='ts' setup>
import { Github, Link, Mail, MapPin, Printer } from 'lucide-vue-next';

import { workExperience, education, project, generalKnowledge, programmingLanguage, spokenLanguage } from '@/data/Resume.ts';

import Tag from '@/components/resume-ui/Tag.vue';
import WorkExperienceItem from '@/components/resume-ui/WorkExperienceItem.vue';
import ProjectItem from '@/components/resume-ui/ProjectItem.vue';
import EducationItem from '@/components/resume-ui/EducationItem.vue';

function print() {
  window.print();
}
</script>
<template>
  <div class="w-screen flex justify-center items-center py-16 print:p-0 overflow-scroll">
    <div class="relative bg-white w-[210mm] h-[297mm] p-4 print:p-0 flex flex-col gap-1">
      <div class="absolute inset-0 w-full h-full bg-[url(img/me.png)] bg-cover bg-center
        opacity-5 pointer-events-none"></div>
      <div class="flex justify-between">
        <h1 class="font-bold text-2xl">
          Akbar Hendra Jaya — <span class="text-gray-500">UnknownRori</span>
        </h1>
        <button @click='print' class='print:hidden text-gray-400 hover:text-gray-800
          duration-500 cursor-pointer'>
          <Printer class='w-6 h-6' />
        </button>
      </div>
      <div class="flex gap-4">
        <a href="https://github.com/UnknownRori" class='flex gap-2 text-sm'>
          <Github class="text-black w-4" /> <span class='text-blue-500'>UnknownRori</span>
        </a>
        <a href="https://unknownrori-lilith.vercel.app/" class='flex gap-2 text-sm'>
          <Link class="text-black w-4" /> <span class='text-blue-500'>unknownrori.vercel.app</span>
        </a>
        <a href="mailto:unknownrori@proton.me" class='flex gap-2 text-sm'>
          <Mail class="text-black w-4" /> <span class='text-blue-500'>unknownrori@proton.me</span>
        </a>
        <a href="#" class='flex gap-2 text-sm'>
          <MapPin class="text-black w-4" /> <span class='text-blue-500'>Central Java, Indonesia</span>
        </a>
      </div>
      <div class="border-t-2 border-gray-300 mb-2"></div>

      <div>
        <h2 class="text-xl font-bold uppercase">
          Work Experience
        </h2>
        <div class="border-t-2 border-gray-300 mb-2"></div>
        <ul class="flex flex-col gap-2">
          <li :key='item.title' v-for='item in workExperience'>
            <WorkExperienceItem :title='item.title' :description='item.description' :time='item.time'
              :items='item.items' :tags='item.tags' />
          </li>
        </ul>
      </div>

      <div class="mt-2">
        <h2 class="text-xl font-bold uppercase">
          Projects
        </h2>
        <div class="border-t-2 border-gray-300 mb-2"></div>
        <ul class="flex flex-col gap-2">
          <li :key='item.title' v-for='item in project'>
            <ProjectItem :title='item.title' :description='item.description' :link="item.link" :time='item.time'
              :tags='item.tags' />
          </li>
        </ul>
      </div>

      <div class="mt-2">
        <h2 class="text-xl font-bold uppercase">
          Education
        </h2>
        <div class="border-t-2 border-gray-300 mb-2"></div>
        <ul class="flex flex-col gap-2">
          <li :key='item.title' v-for='item in education'>
            <EducationItem :title='item.title' :location='item.location' :time='item.time' :link='item.link' />
          </li>
        </ul>
      </div>

      <div class="mt-2">
        <h2 class="text-xl font-bold uppercase">
          Skills
        </h2>

        <div class="border-t-2 border-gray-300 mb-2"></div>

        <div class="flex flex-col gap-2">
          <div>
            <h3 class="font-bold">
              General Knowledge and Concept
            </h3>
            <div class="flex flex-wrap gap-2">
              <Tag :key='item' v-for='item in generalKnowledge'>
                {{ item }}
              </Tag>
            </div>
          </div>
          <div>
            <h3 class="font-bold">
              Programming Language/Scripting/Queries and tools
            </h3>
            <div class="flex flex-wrap gap-2">
              <Tag :key='item' v-for='item in programmingLanguage'>
                {{ item }}
              </Tag>
            </div>
          </div>
          <div>
            <h3 class="font-bold">
              Spoken Language
            </h3>
            <div class="flex flex-wrap gap-2">
              <Tag :key='item' v-for='item in spokenLanguage'>
                {{ item }}
              </Tag>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
