export default {
    title: '网上冲浪指南',
    description: '你的网络时代生活手册',
    lang: 'zh-CN',

    head: [
        //['link', { rel: 'icon', href: '/favicon.png' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi' }]
    ],
    
    lastUpdated: true,
        markdown: {
          breaks:true,
          lineNumbers: true
        },
    themeConfig: {
        nav: [
            // NavbarItem
            {
                text: '首页',
                link: '/',
            },
            {
                text: 'Github',
                link: 'https://github.com/netlifeguide/netlifeguide.github.io/'
            }
        ],
        sidebar: [
            {
                text: '写在前面',
                items: [
                    { text: '开始', link: '/start' },
                ]
            },
            {
                text: '网站使用',
                items: [
                    { text: 'E-Hentai', link: '/site/EH' },
                    { text: 'pixiv', link: '/site/pixiv' }
                ]
            },
            {
                text: '软件',
                items: [
                    { text: '聚合漫画软件', link: '/app/tachiyomi'}
                ]
            },
            {
                text: '技巧',
                items: [
                    { text: 'BT 下载', link: '/guide/BT' },
                    { text: '观看本地视频', link: '/guide/video' }
                ]
            },
            {
                text: '拓展',
                items: [
                    { text: '如何搜图', link: '/hero' },
                    { text: '资源网站整合', link: '/sites' }
                ]
            }
        ]
    }
}