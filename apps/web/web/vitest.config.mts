import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
 
export default defineConfig({
    plugins: [
        tsconfigPaths({
          projects: ['./tsconfig.json'],
        }),
        react(),
      ],
      test: {
        environment: 'jsdom',
        coverage: {
          reporter: ['text', 'html', 'lcov'], 
          reportsDirectory: './coverage',
        },
      },
    })