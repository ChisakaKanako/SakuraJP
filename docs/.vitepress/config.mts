import { defineConfig } from 'vitepress'
import mdPangu from 'markdown-it-pangu'
export default defineConfig({
  title: " SakuraJP",
  description: "樱花日语教材在线",
  head: [
    ['link', { rel: 'icon', href: '/icon.png'}]
  ],
  markdown: {
    config(md) {
      md.use(mdPangu)
    },
  },
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                displayDetails: '显示详细列表',
                noResultsText: '没有相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                }
              }
            }
          }
        }
      }
    },
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '深色模式',
    outlineTitle: '在此页面中',
    returnToTopLabel: '回到顶部',
    footer: {
      copyright: '© 2024 樱花国际日语 版权所有，本站仅作摘抄'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    nav: [
      { text: '主页', link: '/' },
    ],
    sidebar: [
      {
        text: '第一级别',
        items: [
          { text: 'Unit1', link: '/document/level1/unit1' },
          { text: 'Unit2', link: '/document/level1/unit2' },
          { text: 'Unit3', link: '/document/level1/unit3' },
          { text: 'Unit4', link: '/document/level1/unit4' },
          { text: 'Unit5', link: '/document/level1/unit5' },
          { text: 'Unit6', link: '/document/level1/unit6' },
          { text: 'Unit7', link: '/document/level1/unit7' },
          { text: 'Unit8', link: '/document/level1/unit8' },
          { text: 'Unit9', link: '/document/level1/unit9' },
          { text: 'Unit10', link: '/document/level1/unit10' },
          { text: 'Unit11', link: '/document/level1/unit11' },
          { text: 'Unit12', link: '/document/level1/unit12' }
        ]
      }
    ]
  }
})
