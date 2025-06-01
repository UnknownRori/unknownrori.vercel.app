<script setup lang='ts'>
import { Building2, MapPin, Clock5, Heart, Languages } from 'lucide-vue-next';

import { CardAngled } from '@/components/ui/angled';
import useRealtimeClock from '@/composable/useRealtimeClock.ts';

const clock = useRealtimeClock();
</script>

<template>
  <CardAngled class="w-full after:bg-gray-900/50 border-white after:border-2 after:-skew-y-4">
    <div class="flex flex-col gap-2 w-full h-full py-8 px-4 text-white font-bold
            text-center">
      <div class="flex gap-4">
        <Building2 class="text-white" />
        STMIK AMIKOM Surakarta
      </div>
      <div class="flex gap-4">
        <MapPin class="text-white" />
        Indonesia
      </div>
      <div class="flex gap-4">
        <Clock5 class="text-white" />
        {{ clock }}
      </div>
      <div class="flex gap-4">
        <Heart class="text-white" />
        Programming, Games, Music
      </div>
      <div class="flex gap-4">
        <Languages class="text-white" />
        Indonesian, English
      </div>
    </div>
  </CardAngled>
</template>
