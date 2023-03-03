import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import viteEslint from 'vite-plugin-eslint';
import viteStylelint from 'vite-plugin-stylelint';
// https://vitejs.dev/config/
export default defineConfig({
  mode: 'development',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: 'src/types/auto-imports.d.ts', // 用于生成自动导入到类型，方便代码提示
      imports: ['vue', 'pinia', 'vue-router'],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dirs: ['src/components'], // 搜索自动导入组件的范围
      dts: 'src/types/components.d.ts'
    }),
    viteEslint(),
    viteStylelint()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    open: true,
    port: 8080,
  },
});
