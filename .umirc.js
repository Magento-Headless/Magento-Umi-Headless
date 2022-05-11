
// ref: https://umijs.org/config/
export default {
  base: '/',
  target: {
    ie: 11
  },
  hase: true,
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
  alias: {
    '@': resolve(__dirname, '../src')
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react', {
        antd: true,
        dva: {
          dynamicImport: true,
          hmr: true
        },
        dynamicImport: {
          webpackChunkName: true
        },
        title: 'magento-umi-headless',
        dll: {
          exclude: [],
          include: []
        },
        locale: {
          enable: true,
          default: 'en-US'
        },
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//
          ]
        }
      }
    ]
  ]
}
