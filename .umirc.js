import { resolve } from 'path'
import { defineConfig } from 'umi'

import { SystemConf } from './config/system.conf'

export default defineConfig({
  base: '/',
  hash: true,
  // ssr: {
  //   forceInitial: false,
  //   devServerRender: true,
  //   mode: 'string'
  // },
  ssr: false,
  crossorigin: true,
  title: false,
  publicPath: '/',
  fastRefresh: {},
  webpack5: {},
  targets: {
    ie: 11
  },
  devServer: {
    port: '3000',
    host: 'localhost',
    https: false
  },
  dva: {
    immer: false,
    hmr: true
  },
  theme: {
    ...SystemConf.antd.theme
  },
  nodeModulesTransform: {
    type: 'none'
  },
  alias: {
    '@components': resolve(__dirname, './components')
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index'
    }
  ],
  extraBabelPlugins: [
    [
      'styled-components',
      {
        namespace: 'headless',
        ssr: true,
        displayName: false,
        fileName: false,
        minify: true,
        pure: true,
        transpileTemplateLiterals: true
      }
    ]
  ],
  chainWebpack: (config) => {}
})
