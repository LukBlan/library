import { defineConfig } from 'vite'
import pluginChecker from 'vite-plugin-checker';

export default defineConfig({
  base: './',
  plugins: [pluginChecker({ typescript: {root: "./config"} })]
})