import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginFavicon from 'vite-plugin-favicon'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginFavicon({
        // The path to the original favicon file
        logo: './src/assets/logo.svg',
        // The name of the generated manifest file
        manifest: 'site.webmanifest',
        // The directory to output the generated files
        outDir: 'public',
        // Additional options for the favicons library
        favicons: {
          appName: 'GamerShelf',
          appShortName: 'GamerShelf',
          appDescription: 'Your free-to-play collection',
          developerName: 'Nícolas Brandão',
          developerURL: 'https://nicolasbrandao.github.io/portfolio/',
          background: '#fff',
          theme_color: '#333',
          icons: {
            appleIcon: true,
            favicons: true,
            android: true,
            appleStartup: false,
            coast: false,
            firefox: false,
            windows: false,
            yandex: false,
          },
        },
    })
  ]
})