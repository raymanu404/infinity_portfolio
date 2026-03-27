import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  // depending on your application, base can also be "/"
  base: './',
  plugins: [react(), viteTsconfigPaths()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
});
