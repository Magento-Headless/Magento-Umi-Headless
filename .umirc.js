import { defineConfig } from 'umi';

import { SystemConf } from './config/system.conf';

export default defineConfig({
  base: '/',
  hash: true,
  ssr: false,
  crossorigin: true,
  title: false,
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
  dva: {
    immer: false,
    hmr: true,
  },
  theme: {
    ...SystemConf.antd.theme,
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
