import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/funtry-task/',
  title: "Funtry-Task",
  description: "funtry-task是我的第一个vitepress项目",
  themeConfig: {
    siteTitle: "Funtry-Task",
    logo: '/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '下拉菜单', items:[
        {text:'java' ,link:'/java'},
        {text:'springboot' ,link:'/java'},
        {text:'vue3' ,link:'/java'},
        {text:'web开发' ,link:'/java'},
      ]},
      { text: '关于我们', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'java',
        items: [
          { text: 'java基础', items:[
            { text: 'java的面向过程与面向对象', link: '/api-examples' },
            {text:'java——jvm原理',link:'/jvm'}
          ]},
          { text: 'java进阶', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
