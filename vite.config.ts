/// <reference types="vitest/config" />

import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { playwright } from '@vitest/browser-playwright'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import dts from 'unplugin-dts/vite'

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),

    tailwindcss(),

    // Generate TypeScript declaration files.
    dts({
      tsconfigPath: './tsconfig.app.json',
    }),
  ],

  build: {
    lib: {
      // This is the library entry point.
      entry: path.resolve(dirname, 'src/index.ts'),

      // Build both ES modules and CommonJS versions.
      formats: ['es', 'cjs'],

      fileName: 'index',
    },

    rollupOptions: {
      // Do not bundle React or ReactDOM into the library.
      external: ['react', 'react-dom'],
    },
  },

  test: {
    projects: [
      {
        extends: true,

        plugins: [
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],

        test: {
          name: 'storybook',

          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),

            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
        },
      },
    ],
  },
})