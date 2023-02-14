import{_ as e,c as r,o as t,a}from"./app.b1d08412.js";const f=JSON.parse('{"title":"BT 下载 - 从入门到买 NAS","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是 BT","slug":"什么是-bt","link":"#什么是-bt","children":[]},{"level":2,"title":"选择 BT 客户端","slug":"选择-bt-客户端","link":"#选择-bt-客户端","children":[]},{"level":2,"title":"设置软件","slug":"设置软件","link":"#设置软件","children":[{"level":3,"title":"“连接”选项卡","slug":"连接-选项卡","link":"#连接-选项卡","children":[]},{"level":3,"title":"“BitTorrent”选项卡","slug":"bittorrent-选项卡","link":"#bittorrent-选项卡","children":[]},{"level":3,"title":"“高级”选项卡","slug":"高级-选项卡","link":"#高级-选项卡","children":[]}]},{"level":2,"title":"使用 BT","slug":"使用-bt","link":"#使用-bt","children":[]},{"level":2,"title":"寻找资源","slug":"寻找资源","link":"#寻找资源","children":[{"level":3,"title":"动画/音声","slug":"动画-音声","link":"#动画-音声","children":[]},{"level":3,"title":"游戏","slug":"游戏","link":"#游戏","children":[]},{"level":3,"title":"电影","slug":"电影","link":"#电影","children":[]}]}],"relativePath":"guide/BT.md","lastUpdated":1675513313000}'),i={name:"guide/BT.md"},l=a('<h1 id="bt-下载-从入门到买-nas" tabindex="-1">BT 下载 - 从入门到买 NAS <a class="header-anchor" href="#bt-下载-从入门到买-nas" aria-hidden="true">#</a></h1><h2 id="什么是-bt" tabindex="-1">什么是 BT <a class="header-anchor" href="#什么是-bt" aria-hidden="true">#</a></h2><p>BT 即 BitTorrent，是一个开放的点对点文件下载协议。<br> 和从服务器下载资源不同，BT 下载的内容完全来源于其他用户的上传。也就是说 BT 是一种“人人为我，我为人人”的下载方式，请务必记住这一点。</p><h2 id="选择-bt-客户端" tabindex="-1">选择 BT 客户端 <a class="header-anchor" href="#选择-bt-客户端" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">提醒</p><p>请注意，从 GitHub 直接下载文件对您的网络有一定要求，建议使用<a href="https://ghproxy.com" target="_blank" rel="noreferrer">ghproxy</a>代理下载链接。</p></div><ul><li><a href="https://www.qbittorrent.org/" target="_blank" rel="noreferrer">qBittorrent</a><br> 老牌又稳定，足够应对几乎所有需求。开源&amp;全 PC 平台兼容。</li><li><a href="https://github.com/c0re100/qBittorrent-Enhanced-Edition/releases" target="_blank" rel="noreferrer">qBittorrent Enhanced Edition</a><br> 前者的增强版，加入了自动更新 trackers 服务器列表和反吸血 (指只下载不上传的用户) 功能。开源&amp;全 PC 平台兼容。<br> 在 Windows 10&amp;11 上可以通过执行以下指令安装。<br><code>winget install c0re100.qBittorrent-Enhanced-Edition</code></li><li><a href="https://motrix.app" target="_blank" rel="noreferrer">Motrix</a><br> 国人开发的下载软件，界面美观，并且支持 HTTP 直链多线程下载，迅雷链接处理等功能。但软件体积极为庞大，仅作为 BT 下载器并不合适。</li><li><a href="https://www.bitcomet.com" target="_blank" rel="noreferrer">比特彗星</a><br> 国人开发的 BT 软件，较久未更新，并且存在一些问题，并不特别推荐使用。闭源&amp;仅支持 Windows 和 macOS。</li></ul><h2 id="设置软件" tabindex="-1">设置软件 <a class="header-anchor" href="#设置软件" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">提示</p><p>因为笔者个人使用 qBittorrent Enhanced Edition，所以以此为例。<br> 部分显而易见的配置项不再赘述</p></div><p>在极少数环境下，qBittorrent Enhanced Edition 不会自动将语言设置为中文，设置中切换为其他语言并重启软件，之后再次设置为中文即可。</p><p>首先我们需要配置 trackers 列表自动更新，详情请参考<a href="https://trackerslist.com/#/zh" target="_blank" rel="noreferrer">该页面的教程</a>。</p><h3 id="连接-选项卡" tabindex="-1">“连接”选项卡 <a class="header-anchor" href="#连接-选项卡" aria-hidden="true">#</a></h3><ul><li>建议取消勾选连接限制，会轻微增加性能消耗，但下载速度可能会有提升。</li><li>代理设置取决于个人需求，一般来讲，当您所在国家或地区不允许使用 BT 网络时才应使用代理下载文件。并确保勾选“使用代理服务器进行用户连接”并取消勾选“只对 torrent 启动代理”。<br> 如果您并非这种情况，那么使用代理一般不会给您带来更多好处。</li></ul><h3 id="bittorrent-选项卡" tabindex="-1">“BitTorrent”选项卡 <a class="header-anchor" href="#bittorrent-选项卡" aria-hidden="true">#</a></h3><ul><li>加密模式设置为“允许加密”，可以同时连接加密用户和未加密用户。</li><li>建议勾选“启用匿名模式”，可以减少您的客户端在与其他用户交流的过程中可能会泄露的隐私。<strong>但请注意：该功能不能完全隐藏您的行踪，如果您有匿名需求，请务必设置代理</strong></li></ul><h3 id="高级-选项卡" tabindex="-1">“高级”选项卡 <a class="header-anchor" href="#高级-选项卡" aria-hidden="true">#</a></h3><ul><li>您可以在此选择是否禁用来自中国大陆地区的 BT 客户端，或者是否禁用使用了 BT 协议的媒体播放器。但笔者并不建议这样做，大概率得不偿失。</li></ul><h2 id="使用-bt" tabindex="-1">使用 BT <a class="header-anchor" href="#使用-bt" aria-hidden="true">#</a></h2><p>接下来，您可以通过导入一个 torrent 文件或者打开磁力链接来下载文件了。默认情况下，qBittorrent Enhanced Edition 会自动开始连接本地用户网络。<br> 如果出现问题，您可以下载一份热门 BT 资源来获得足够的 DHT 节点数。<br> 笔者个人推荐下载一份<a href="https://releases.ubuntu.com/22.10/ubuntu-22.10-desktop-amd64.iso.torrent" target="_blank" rel="noreferrer">Ubuntu 22.10 系统镜像</a>，一般来说，该文件的下载速度就是您 BT 下载的最快速度。</p><h2 id="寻找资源" tabindex="-1">寻找资源 <a class="header-anchor" href="#寻找资源" aria-hidden="true">#</a></h2><p>至此，您已经配置好了您的 BT 客户端，接下来就是寻找资源并下载了。</p><h3 id="动画-音声" tabindex="-1">动画/音声 <a class="header-anchor" href="#动画-音声" aria-hidden="true">#</a></h3><ul><li><a href="https://bangumi.moe" target="_blank" rel="noreferrer">萌番组</a><br> 支持中国大陆地区直连，特别推荐。</li><li><a href="https://acg.rip" target="_blank" rel="noreferrer">ACG.RIP</a></li><li><a href="https://share.acgnx.se" target="_blank" rel="noreferrer">末日动漫资源组</a></li><li><a href="https://share.dmhy.org" target="_blank" rel="noreferrer">动漫花园</a><br> 历史最久，资源最多，考古的时候非常有用。</li><li><a href="https://nyaa.si" target="_blank" rel="noreferrer">Nyaa</a></li></ul><h3 id="游戏" tabindex="-1">游戏 <a class="header-anchor" href="#游戏" aria-hidden="true">#</a></h3><ul><li><a href="https://rutracker.net" target="_blank" rel="noreferrer">RuTracker</a><br> 正如其名，是俄罗斯的站点，游戏资源丰富，大多数以 iso 格式发布。搜索需要登录，但也可在搜索游戏名时加上关键词 rutracker 来进行搜索。</li><li><a href="https://fitgirl-repacks.site" target="_blank" rel="noreferrer">FitGirls Repacks</a><br> 致力于游戏重打包的个人站点，注意下载后需要用内置的软件进行解压安装后才可游玩。</li></ul><h3 id="电影" tabindex="-1">电影 <a class="header-anchor" href="#电影" aria-hidden="true">#</a></h3><ul><li><a href="https://yts.rs" target="_blank" rel="noreferrer">YTS</a></li></ul>',26),n=[l];function h(s,d,o,c,b,u){return t(),r("div",null,n)}const _=e(i,[["render",h]]);export{f as __pageData,_ as default};
