import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  layout: {
    title: '后台管理系统',
  },
  request: {
    // dataField: "data",
  },
  proxy: {
    '/api': {
      'target': 'https://hn.algolia.com/api/',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
        name: ' CRUD 示例',
        path: '/table',
        component: './Table',
    },
    {
      name: '测试页面',
      path: '/user',
      component: './User',
    },
  ],
  npmClient: 'cnpm',
});

