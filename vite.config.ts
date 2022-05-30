import { fileURLToPath, URL } from 'url'

import { defineConfig, type UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export const config: UserConfig = {
  plugins: [vueJsx()],
}

export default defineConfig(() => {
  return {
    ...config,
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
