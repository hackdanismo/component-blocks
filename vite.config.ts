import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'unplugin-dts/vite'

export default defineConfig({
  plugins: [
    react(),

    // Generate TypeScript declaration files.
    dts({
      tsconfigPath: './tsconfig.app.json',
    }),
  ],

  build: {
    lib: {
      // This is the library entry point.
      entry: resolve(__dirname, 'src/index.ts'),

      // Build both ES modules and CommonJS versions.
      formats: ['es', 'cjs'],

      fileName: 'index',
    },

    rollupOptions: {
      // Do not bundle React or ReactDOM into the library.
      external: ['react', 'react-dom'],
    },
  },
})