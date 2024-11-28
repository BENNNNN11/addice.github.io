import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: '/addice.github.io/',
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      { text: '首页', link: '/', },
      // NavbarGroup
      {
        text: 'addIce的博客',
        children: [
          { text: 'Github', link: '/' },
          { text: '知乎', link: '/' },
          { text: '掘金', link: '/' },
        ],
      },
    ],
    sidebar: [
      {
        text: '前言',
        collapsible: false,
        children: [
          { text: '内容介绍' },
          { text: '使用指南' }
        ]
      },
      {
        text: '算法学习',
        link: '/Algorithm/Divide&Conquer',
        collapsible: false,
        children: [
          { text: '分治法', link: '/Algorithm/Divide&Conquer' },
          { text: 'Leetcode', link: '/Algorithm/Leetcode' }
        ],
      }
    ]
  }),
  lang: 'zh-CN',
  title: 'addIce的博客',
  description: '这是我的第一个 VuePress 站点',
})