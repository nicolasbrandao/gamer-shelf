import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginFavicon from 'vite-plugin-favicon'
import { resolve } from 'path'

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
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'redux',
      'react-redux',
      'redux-thunk'
    ]
  },
  server: {
    hmr: {
      overlay: false
    }
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
    emptyOutDir: true,
    brotliSize: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  test: {
    testMatch: [
      '<rootDir>/src/**/__tests__/**/*.spec.{js,jsx,ts,tsx}'
    ],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
  }
})