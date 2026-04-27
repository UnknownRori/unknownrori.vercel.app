<script lang="ts" setup>
import { ref, reactive, nextTick, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { type Vector2 } from '@/maths/vector2';
import NavPill from './NavPill.vue';
import NavLink from './NavLink.vue';

const route = useRoute();
const navlinks = [
  { name: 'Home',     href: '/' },
  { name: 'Profile',  href: '/profile' },
  { name: 'Works',    href: '/projects' },
  { name: 'Contacts', href: '/contacts' },
];

const containerRef = ref<HTMLElement | null>(null);
const btnRefs = reactive<any[]>([]);
const pillSize = reactive<Vector2>({ x: 0, y: 0 });
const pillPos  = reactive<Vector2>({ x: 0, y: 0 });

function movePill(index: number) {
  const btnInstance = btnRefs[index];
  const btn = btnInstance?.$el ?? btnInstance;
  if (!btn || !containerRef.value) return;
  const navRect = containerRef.value.getBoundingClientRect();
  const btnRect = btn.getBoundingClientRect();
  pillPos.x  = btnRect.left - navRect.left - 2;
  pillPos.y  = btnRect.top  - navRect.top - 2;
  pillSize.x = btnRect.width;
  pillSize.y = btnRect.height;
}

function getActiveIndex() {
  return navlinks.findIndex(l => l.href === route.path);
}

async function syncPill() {
  await nextTick();
  const i = getActiveIndex();
  if (i !== -1) movePill(i);
}

onMounted(syncPill);
watch(() => route.path, syncPill);
</script>

<template>
  <nav class="absolute flex justify-center items-center w-screen mt-8 z-100">
    <div
      ref="containerRef"
      class="relative border-2 border-gray-500 hover:border-white duration-500 rounded-lg py-2 px-4 flex gap-6"
    >
      <NavPill :size="pillSize" :position="pillPos" />
      <NavLink
        v-for="(item) in navlinks"
        :key="item.name"
        :ref="(el: any) => btnRefs[i] = el"
        :name="item.name"
        :href="item.href"
        :isActive="route.path === item.href"
      />
    </div>
  </nav>
</template>
