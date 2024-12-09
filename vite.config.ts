import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  console.log('env', env);

  return {
    base: env.VITE_BASE_URL || '/',
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        base: `${env.VITE_BASE_URL}/`,
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
        workbox: {
          maximumFileSizeToCacheInBytes: 3000000,
        },
        manifest: {
          name: env.VITE_VITE_APP_TITLE,
          short_name: 'Vite PWA',
          description: 'A Vite PWA project',
          icons: [
            {
              src: `${env.VITE_BASE_URL}/android-chrome-192x192.png`,
              sizes: '192x192',
              type: 'image/png',
              purpose: 'favicon',
            },
            {
              src: `${env.VITE_BASE_URL}/android-chrome-512x512.png`,
              sizes: '512x512',
              type: 'image/png',
              purpose: 'favicon',
            },
            {
              src: `${env.VITE_BASE_URL}/apple-touch-icon.png`,
              sizes: '180x180',
              type: 'image/png',
              purpose: 'apple touch icon',
            },
            {
              src: `${env.VITE_BASE_URL}/maskable_icon.png`,
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
          theme_color: '#ffffff',
          background_color: '#000000',
        },
      }),
      tsconfigPaths(),
      svgrPlugin({
        include: '**/*.svg?react',
      }),
    ],
    resolve: {
      alias: {
        '@public': '/public',
      },
    },
    build: {
      outDir: 'build',
      sourcemap: env.VITE_SOURCE_MAP === 'true',
    },
    server: {
      port: +env.VITE_PORT,
      strictPort: true,
      host: true,
      origin: `http://127.0.0.1:${+env.VITE_PORT}`,
    },
  };
});
