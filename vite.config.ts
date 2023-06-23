import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      widgets: '/src/widgets',
      shared: '/src/shared',
      pages: '/src/pages',
      entities: '/src/entities',
      features: '/src/features'
    }
  },
  define: { global: 'window', },
});
