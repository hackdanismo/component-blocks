/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'unplugin-dts/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react(),
  // Generate TypeScript declaration files.
  dts({
    tsconfigPath: './tsconfig.app.json'
  })],
  build: {
    lib: {
      // This is the library entry point.
      entry: resolve(__dirname, 'src/index.ts'),
      // Build both ES modules and CommonJS versions.
      formats: ['es', 'cjs'],
      fileName: 'index'
    },
    rollupOptions: {
      // Do not bundle React or ReactDOM into the library.
      external: ['react', 'react-dom']
    }
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        }
      }
    }]
  }
});