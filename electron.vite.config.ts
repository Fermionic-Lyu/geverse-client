import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@': resolve('src/renderer/src')
      }
    },
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: `@use "src/renderer/src/assets/scss/variable.scss" as *;`
    //     }
    //   }
    // },
    plugins: [
      vue(),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false // css in js
          })
        ]
      }),
      AutoImport({
        imports: [
          'vue',
          {
            'vue-router/auto': ['useRoute', 'useRouter']
          }
        ],
        dts: 'src/auto-imports.d.ts',
        eslintrc: {
          enabled: true
        },
        vueTemplate: true
      })
    ]
  }
})
