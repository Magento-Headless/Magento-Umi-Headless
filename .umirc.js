import { defineConfig } from 'umi';

export default defineConfig({
  base: '/',
  hash: true,
  ssr: false,
  publicPath: '/',
  fastRefresh: {},
  webpack5: {},
  targets: {
    ie: 11,
  },
  devServer: {
    port: '3000',
    host: 'localhost',
    https: false,
  },
  theme: {
    '@primary-color': '#1DA57A',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
    },
  ],
  chainWebpack: (config) => {},
});
