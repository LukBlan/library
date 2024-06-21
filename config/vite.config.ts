/// <reference types="vitest" />
import { defineConfig } from 'vite'
import pluginChecker from 'vite-plugin-checker';

export default defineConfig({
  base: './',
  plugins: [pluginChecker({ typescript: {root: "./config"} })],
  css: {
    postcss: "config"
  },
  test: {
    environment: "jsdom",
    globals: true,
  }
})