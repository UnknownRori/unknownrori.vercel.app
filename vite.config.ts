import path from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const base =
  {
    plugins: [
      vue(),
      vueDevTools(),
      tailwindcss(),
      VitePWA({ registerType: 'autoUpdate' }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        $fonts: path.resolve('./public/assets/fonts/'),
      },
    },
  };
  if (command == 'serve') {
    return base;
  }
  return {
    ...base
  };
})
