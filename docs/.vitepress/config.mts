import { defineConfig } from 'vitepress'
import mdPangu from 'markdown-it-pangu'
import sidebar from './sidebar.json'
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
    lastUpdated: {
      text: '本页面最后更新于',
      formatOptions: {
        dateStyle: 'medium'
      }
    },
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
      copyright: '© 樱花国际日语 版权所有，本站仅作摘抄'
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

        text: '实用工具',
        collapsed: true,
        items: [
          { text: 'MOJi辞書', link: 'https://www.mojidict.com/' },
          { text: 'DeepL', link: 'https://www.deepl.com/zh/translator' }
        ]
      }
    ]
  }
})
